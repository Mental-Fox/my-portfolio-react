import React, { useState } from 'react';
import { SiPython, SiJavascript, SiMysql, SiPhp, SiGit, SiReact, SiNodedotjs, SiHtml5, SiOpenai, SiTableau, SiVisualstudiocode, SiPowerbi, SiNetlify } from 'react-icons/si';
import { FiCpu, FiGlobe, FiLayers, FiServer, FiCoffee, FiZap } from 'react-icons/fi';

const icons = { Python: SiPython, JavaScript: SiJavascript, MySQL: SiMysql, PHP: SiPhp, Git: SiGit, ReactJS: SiReact, 'Node.js': SiNodedotjs, 'HTML/CSS': SiHtml5, 'Java (basics)': FiCoffee, ChatGPT: SiOpenai, Tableau: SiTableau, 'VS Code': SiVisualstudiocode, 'Power BI': SiPowerbi, Netlify: SiNetlify, Administration: FiServer, Make: FiZap, n8n: FiLayers };

const contexts = {
  Python: ['Скрипты · Excel · данные', 'Scripts · Excel · data'],
  'HTML/CSS': ['Разметка и интерфейсы', 'Layout and interfaces'],
  MySQL: ['Запросы и базы данных', 'Queries and databases'],
  JavaScript: ['Логика веб-приложений', 'Web application logic'],
  PHP: ['Серверная разработка', 'Server development'],
  Git: ['Версии и совместная работа', 'Versions and collaboration'],
  ReactJS: ['Компоненты и интерфейсы', 'Components and interfaces'],
  'Node.js': ['JavaScript на сервере', 'Server-side JavaScript'],
  'Java (basics)': ['Основы языка', 'Language basics'],
  ChatGPT: ['Идеи и помощь в работе', 'Ideas and work assistance'],
  Tableau: ['Аналитика и дашборды', 'Analytics and dashboards'],
  'Power BI': ['Отчёты и визуализация', 'Reports and visualization'],
  'VS Code': ['Среда разработки', 'Development environment'],
  Netlify: ['Публикация веб-проектов', 'Publishing web projects'],
  Administration: ['Системы и инфраструктура', 'Systems and infrastructure'],
  Make: ['Автоматизация процессов', 'Workflow automation'],
  n8n: ['Связи между сервисами', 'Connecting services'],
};

function RatingDial({ value, label }) {
  return <div className="catalog-dial" aria-label={`${label}: ${value}%`}>
    <svg viewBox="0 0 80 80" aria-hidden="true">
      <circle className="dial-ticks" cx="40" cy="40" r="36" pathLength="100" />
      <circle className="dial-track" cx="40" cy="40" r="29" />
      <circle className="dial-value" cx="40" cy="40" r="29" pathLength="100" strokeDasharray={`${value} 100`} transform="rotate(-90 40 40)" />
    </svg>
    <strong aria-hidden="true">{value}<small>%</small></strong>
  </div>;
}

export default function SkillCatalog({ items, category, title, language }) {
  const [showRatings, setShowRatings] = useState(true);
  const t = (ru, en) => language === 'ru' ? ru : en;
  const CategoryIcon = category === 'languages' ? FiGlobe : category === 'tools' ? FiLayers : FiCpu;
  const description = category === 'skills' ? t('Пишу код и работаю с данными', 'Writing code and working with data') : category === 'tools' ? t('Мой набор для повседневных задач', 'My everyday toolkit') : t('Для общения и работы', 'For communication and work');
  return <section className={`skill-catalog catalog-${category}`} aria-label={title}><div className="catalog-header"><div><CategoryIcon /><h3>{title}</h3><span>{String(items.length).padStart(2,'0')}</span></div><p>{description}</p><button onClick={() => setShowRatings(!showRatings)} aria-pressed={showRatings}>{showRatings ? t('Скрыть оценки', 'Hide estimates') : t('Показать самооценку', 'Show self-assessment')}</button></div><div className="catalog-grid">{items.map((item,index) => {
    const Icon = icons[item.title] || FiGlobe;
    const context = contexts[item.title];
    return <article className={`catalog-item ${showRatings ? 'ratings-visible' : ''}`} key={item.id}>
      <div className="catalog-item-symbol"><Icon /></div>
      <div className="catalog-item-copy"><span className="catalog-item-number">{String(index+1).padStart(2,'0')} / {category === 'skills' ? 'CODE' : category === 'tools' ? 'TOOL' : 'LANG'}</span><h4>{item.title}</h4><span className="catalog-item-category">{context ? t(...context) : t('Общение и работа', 'Communication and work')}</span></div>
      {showRatings && <div className="catalog-rating"><RatingDial value={item.level} label={t('Самооценка', 'Self-assessment')} /><span>{t('Самооценка', 'Self-assessment')}</span></div>}
    </article>;
  })}</div></section>;
}

