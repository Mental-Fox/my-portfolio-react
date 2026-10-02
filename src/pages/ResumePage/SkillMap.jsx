import React, { useState } from 'react';
import { FiCpu, FiLayers, FiGlobe, FiArrowUpRight } from 'react-icons/fi';

export default function SkillMap({ items, category, title, language }) {
  const [selectedId, setSelectedId] = useState(null);
  const selected = items.find(item => item.id === selectedId) || items[0];
  const t = (ru, en) => language === 'ru' ? ru : en;
  const Icon = category === 'skills' ? FiCpu : category === 'tools' ? FiLayers : FiGlobe;
  if (!selected) return null;
  const positions = items.map((_, index) => {
    const angle = (index / items.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + Math.cos(angle) * 36, y: 50 + Math.sin(angle) * 36 };
  });
  return <section className={`technology-map map-${category}`} aria-label={title}>
    <div className="map-heading"><h3>{title}</h3><span>{String(items.length).padStart(2, '0')} / {t('на карте', 'on the map')}</span></div>
    <div className="map-layout"><div className="constellation-map">
      <svg className="map-connections" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true"><ellipse cx="50" cy="50" rx="36" ry="36" />{positions.map(({x,y},index) => <line key={items[index].id} x1="50" y1="50" x2={x} y2={y} className={items[index].id === selected.id ? 'connected' : ''} />)}</svg>
      <div className="map-core" aria-hidden="true"><Icon /><span>{category === 'skills' ? 'STACK' : category === 'tools' ? 'TOOLBOX' : 'LANGUAGES'}</span></div>
      {items.map((item,index) => <button key={item.id} className={`technology-node ${item.id === selected.id ? 'node-selected' : ''}`} style={{left:`${positions[index].x}%`,top:`${positions[index].y}%`}} aria-pressed={item.id === selected.id} onClick={() => setSelectedId(item.id)}><span>{item.title}</span><i aria-hidden="true" /></button>)}
    </div><div className="map-detail" aria-live="polite"><span className="map-detail-kicker">{t('В МОЁМ НАБОРЕ', 'IN MY TOOLKIT')}<FiArrowUpRight /></span><div className="map-detail-icon"><Icon /></div><h4>{selected.title}</h4><p>{t('Моя оценка владения', 'My proficiency estimate')}</p><div className="map-score">{selected.level}<span>/ 100</span></div><small>{t('Нажми на технологию на карте, чтобы посмотреть её оценку.', 'Select a technology on the map to see my estimate.')}</small></div></div>
  </section>;
}
