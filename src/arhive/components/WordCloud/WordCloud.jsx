import React, { useEffect, useRef, useState } from 'react';
import './WordCloud.css';

const WordCloud = ({ words: propWords }) => {
    const cloudRef = useRef(null);
    const [positions, setPositions] = useState([]);

    const words = (propWords).sort((a, b) => b.weight - a.weight); // biggest first

    const measureTextWidth = (text, fontSize) => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = `${fontSize}px Arial`;
        return ctx.measureText(text).width;
    };

    const doOverlap = (rect1, rect2) => {
        return !(
            rect1.x + rect1.width < rect2.x ||
            rect2.x + rect2.width < rect1.x ||
            rect1.y + rect1.height < rect2.y ||
            rect2.y + rect2.height < rect1.y
        );
    };

    const calculatePositions = () => {
        const cloud = cloudRef.current;
        if (!cloud) return;

        const { width, height } = cloud.getBoundingClientRect();
        const centerX = width / 2;
        const centerY = height / 2;

        const newPos = [];
        const placedRects = [];

        words.forEach((word, i) => {
            let placed = false;
            let attempts = 0;
            const fontSize = word.weight * 5 + 16;
            const wordWidth = measureTextWidth(word.text, fontSize);
            const wordHeight = fontSize * 1.2;

            while (!placed && attempts < 300) {
                const angle = attempts * 50;
                const radius = i * 15 + attempts * 1.5;

                const x = centerX + Math.cos(angle) * radius - wordWidth / 2;
                const y = centerY + Math.sin(angle) * radius - wordHeight / 2;

                const rect = { x, y, width: wordWidth, height: wordHeight };

                if (
                    x < 0 || y < 0 ||
                    x + wordWidth > width ||
                    y + wordHeight > height
                ) {
                    attempts++;
                    continue;
                }

                const overlaps = placedRects.some(r => doOverlap(rect, r));
                if (!overlaps) {
                    newPos.push({ x, y });
                    placedRects.push(rect);
                    placed = true;
                } else {
                    attempts++;
                }
            }

            if (!placed) {
                newPos.push({
                    x: Math.random() * (width - wordWidth),
                    y: Math.random() * (height - wordHeight)
                });
            }
        });

        setPositions(newPos);

        // apply styles after position calculation
        setTimeout(() => {
            const cloud = cloudRef.current;
            if (!cloud) return;

            words.forEach((word, i) => {
                const el = cloud.children[i];
                if (!el) return;

                const { x, y } = newPos[i];
                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
                el.style.fontSize = `${word.weight * 5 + 16}px`;
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
                el.style.setProperty('--word-brightness', (word.weight / 10).toFixed(2));
                // el.style.setProperty('--word-brightness', (word.weight / 28).toFixed(2));
            });
        }, 100);
    };

    useEffect(() => {
        calculatePositions();
        window.addEventListener('resize', calculatePositions);
        return () => window.removeEventListener('resize', calculatePositions);
    }, [words]);

    // Mouse interaction
    useEffect(() => {
        const cloud = cloudRef.current;
        if (!cloud || positions.length === 0) return;

        const threshold = 100;

        const handleMouseMove = (e) => {
            const { left, top } = cloud.getBoundingClientRect();
            const mx = e.clientX - left;
            const my = e.clientY - top;

            Array.from(cloud.children).forEach((el, i) => {
                if (!positions[i]) return;

                const pos = positions[i];
                const fontSize = words[i].weight * 5 + 10;
                const wordWidth = measureTextWidth(words[i].text, fontSize);
                const wordHeight = fontSize * 1.2;
                const cx = pos.x + wordWidth / 2;
                const cy = pos.y + wordHeight / 2;

                const dx = cx - mx;
                const dy = cy - my;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < threshold) {
                    const force = 1 - Math.min(dist / threshold, 1);
                    const scale = 1 + force * 0.2;
                    const tx = (dx / dist || 0) * force * 30;
                    const ty = (dy / dist || 0) * force * 30;

                    el.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
                    el.style.zIndex = '10';
                } else {
                    el.style.transform = 'translate(0, 0) scale(1)';
                    el.style.zIndex = '1';
                }
            });
        };

        const handleMouseLeave = () => {
            Array.from(cloud.children).forEach(el => {
                el.style.transform = 'translate(0, 0) scale(1)';
                el.style.zIndex = '1';
            });
        };

        cloud.addEventListener('mousemove', handleMouseMove);
        cloud.addEventListener('mouseleave', handleMouseLeave);
        return () => {
            cloud.removeEventListener('mousemove', handleMouseMove);
            cloud.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [positions, words]);

    return (
        <div className="word-cloud" ref={cloudRef}>
            {words.map((word, i) => (
                <span key={i} className="word">{word.text}</span>
            ))}
        </div>
    );
};

export default WordCloud;
