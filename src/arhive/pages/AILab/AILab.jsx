import React, { useEffect, useRef, useState } from 'react';
import './AILab.css';

const AILab = () => {
    const canvasRef = useRef(null);
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const aiResponses = {
        'привет': [
            'Приветствую!',
            'Здравствуй!',
            'Рад тебя видеть!',
            'Привет! Чем могу помочь?',
            'И тебе привет!',
        ],
        'здравствуй': [
            'Здравствуйте!',
            'Приветствую вас!',
            'Очень приятно!',
        ],
        'хай': [
            'Хай!',
            'И тебе хай!',
            'Что случилось?',
        ],
        'hello': [ // На всякий случай, если вдруг напишут на английском
            'Hello!',
            'Hi there!',
            'Greetings!',
        ],
        'как дела': [
            'У меня всё отлично, спасибо, что спросил!',
            'Работаю над новыми идеями, всё супер!',
            'Чувствую себя прекрасно, готов к новым вопросам!',
        ],
        'как ты': [
            'Я в порядке, спасибо!',
            'Всё хорошо, готов общаться.',
            'Отлично, заряжен знаниями!',
        ],
        'что нового': [
            'Сегодня узнал много интересного о квантовой физике!',
            'Разрабатываю новые алгоритмы для более креативных ответов.',
            'Мир не стоит на месте, и я вместе с ним!',
        ],
        'расскажи шутку': [
            'Почему программисты путают Хэллоуин и Рождество? Потому что Oct 31 == Dec 25!',
            'Что говорит компьютер, когда ему холодно? - Нужна форточка (window)!',
            'Как называют грустного программиста? - Dis-assembler!',
        ],
        'переведи это': [
            'На какой язык мне это перевести?',
            'Отправьте мне фразу, которую нужно перевести.',
            'Я могу перевести на множество языков, просто скажите, на какой!',
        ],
        'что такое': [
            (query) => {
                const term = query.toLowerCase().replace('что такое ', '');
                return `Интересный вопрос о "${term}". Мне нужно немного больше контекста, чтобы дать точный ответ. Можешь уточнить?`;
            },
        ],
        'спасибо': [
            'Пожалуйста!',
            'Всегда рад помочь!',
            'Обращайся ещё!',
        ],
        'ты человек': [
            'Я - искусственный интеллект, разработанный, чтобы помогать и общаться.',
            'Нет, я не человек, я программа.',
            'Я - твой виртуальный ассистент!',
        ],
        'ты робот': [
            'Хотя у меня нет физического тела, меня можно назвать своего рода "роботом" в цифровом мире.',
            'Я - программное обеспечение, а не физический робот.',
            'Можно и так сказать, я автоматизированная система.',
        ],
        'что ты умеешь делать': [
            'Я могу отвечать на вопросы, генерировать тексты, переводить языки и многое другое!',
            'Мои возможности постоянно расширяются. Спроси меня о чем-нибудь!',
            'Я здесь, чтобы помогать тебе с информацией и креативными задачами.',
        ],
        'до свидания': [
            'До скорой встречи!',
            'Пока-пока!',
            'Буду рад снова пообщаться!',
        ],
        'пока': [
            'Удачи!',
            'Счастливо!',
            'До связи!',
        ],
        'какой сегодня праздник': [
            () => {
                const today = new Date();
                const day = today.getDate();
                const month = today.getMonth() + 1;
                // Здесь можно добавить логику для определения праздников по дате
                return `Сегодня ${day}.${month}. Надеюсь, у тебя отличный день! 🎉`;
            },
        ],
        'какая сегодня погода': [
            'К сожалению, у меня нет доступа к текущей информации о погоде в твоем регионе.',
            'Чтобы узнать погоду, можешь воспользоваться специальными приложениями или сайтами.',
        ],
    };

    const handleAskAI = async () => {
        if (!input.trim()) {
            setResponse('Эй, напиши что-нибудь, я же не телепат!');
            return;
        }

        setResponse('');
        setIsTyping(true);

        let responseText = 'Задумался...'; // По умолчанию
        const lowerInput = input.toLowerCase();

        for (const key in aiResponses) {
            if (lowerInput.includes(key)) {
                const possibleResponses = aiResponses[key];
                responseText = typeof possibleResponses === 'function'
                    ? possibleResponses(input)
                    : possibleResponses[Math.floor(Math.random() * possibleResponses.length)];
                break;
            }
        }

        // Плавный вывод текста
        let index = 0;
        setResponse(responseText.charAt(0)); // Первая буква сразу
        index = 0; // Продолжать со второй

        const typeText = () => {
            setResponse((prev) => prev + responseText.charAt(index));
            index++;
            if (index < responseText.length) {
                setTimeout(typeText, 20);
            } else {
                setIsTyping(false);
            }
        };

        setTimeout(typeText, 500);

        setInput(''); // Очищаем поле, но не переводим в lowerCase
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 5 + 1;
                this.speedX = Math.random() * 3 - 1.5;
                this.speedY = Math.random() * 3 - 1.5;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.size > 0.2) this.size -= 0.1;
                if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
                if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
            }

            draw() {
                ctx.fillStyle = 'rgba(0, 255, 136, 0.8)';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles.length = 0; // Очищаем существующий массив частиц
            for (let i = 0; i < 100; i++) {
                particles.push(new Particle());
            }
        };

        const connectParticles = () => {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 255, 136, ${1 - distance / 1000})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animateParticles = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height); // ВАЖНО: очищаем холст
            particles.forEach((particle, index) => {
                particle.update();
                particle.draw();
                if (particle.size <= 0.2) {
                    particles.splice(index, 1);
                    particles.push(new Particle());
                }
            });
            connectParticles();
            requestAnimationFrame(animateParticles);
        };

        initParticles();
        animateParticles();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles(); // Инициализируем частицы заново
            // Нет необходимости вызывать animateParticles() здесь,
            // так как requestAnimationFrame уже запланирован
        };

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize); // ВАЖНО: убираем слушатель
    }, []);


    return (
        <div className="ai section">
            <canvas ref={canvasRef}></canvas>
            <div className="ai-chat">
                <h1>AI Лаборатория</h1>
                <p>Поболтай с моим весёлым ИИ!</p>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Спроси что-нибудь смешное!"
                />
                <button onClick={handleAskAI}>Спросить</button>
                <div className="ai-response">
                    {isTyping ? 'ИИ печатает...' : response}
                </div>
            </div>
        </div>
    );
};

export default AILab;