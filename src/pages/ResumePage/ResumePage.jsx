import React, { useContext, useState, useEffect } from 'react';
import { FiUser, FiBriefcase, FiCode, FiBookOpen, FiAward, FiSearch, FiArrowUpRight, FiChevronDown, FiLink, FiLayers, FiCpu, FiFilm, FiActivity, FiZap, FiHeadphones, FiMonitor, FiWind, FiGithub, FiSend } from 'react-icons/fi';
import LanguageContext from '../../contexts/LanguageContext';
import avatar from '../../assets/profile.jpg';
import './ResumePage.css';
import './WorkspacePanels.css';
import WorkBench from './WorkBench';
import SkillCatalog from './SkillCatalog';
import InterestsPanel from './InterestsPanel';
import BrandMark from '../../components/BrandMark';

const sections = [['about', FiUser], ['experience', FiBriefcase], ['projects', FiCode], ['skills', FiLayers], ['education', FiBookOpen], ['certificates', FiAward]];
const interestIcons = { 'Machine Learning': FiCpu, Coding: FiCode, Anime: FiFilm, Workout: FiActivity, Tech: FiZap, Music: FiHeadphones, Gaming: FiMonitor, Swimming: FiWind };

export default function ResumePage() {
  const { data, language, switchLanguage } = useContext(LanguageContext);
  const [active, setActive] = useState('about');
  const [motionPaused, setMotionPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState('all');
  const [expanded, setExpanded] = useState({});
  const [mood, setMood] = useState(() => {
    try {
      const saved = localStorage.getItem('portfolio-atmosphere-v2');
      return ['nebula', 'aurora', 'sunset', 'burgundy'].includes(saved) ? saved : 'burgundy';
    } catch { return 'burgundy'; }
  });
  useEffect(() => {
    try { localStorage.setItem('portfolio-atmosphere-v2', mood); } catch { /* The theme still works without storage. */ }
    const shell = document.querySelector('.portfolio-shell');
    const icon = document.querySelector('link[rel="icon"]');
    if (!shell || !icon) return;
    const colors = window.getComputedStyle(shell);
    const accent = colors.getPropertyValue('--accent').trim();
    const background = colors.getPropertyValue('--deep').trim();
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="14" fill="${background}"/><g stroke="${accent}" stroke-width="4" stroke-linecap="round"><path d="M32 10V54M10 32H54M16 16L48 48M16 48L48 16"/></g></svg>`;
    icon.setAttribute('href', `data:image/svg+xml,${encodeURIComponent(svg)}`);
  }, [mood]);
  const t = (ru, en) => language === 'ru' ? ru : en;
  const selectSection = key => { setActive(key); setQuery(''); setFilter('all'); };
  const groups = {
    about: data.aboutText.map((item, i) => ({ ...item, id: `about-${i}`, description: item.content })),
    experience: data.experienceData.map((item, i) => ({ ...item, id: `experience-${i}`, title: item.position, subtitle: item.company, current: i === 0 })),
    projects: data.projectsData.map((item, i) => ({ ...item, id: `projects-${i}`, title: item.name, current: true })),
    skills: [...data.skillsData.map(item => ({ ...item, group: data.ui.skills, category: 'skills' })), ...data.toolsData.map(item => ({ ...item, group: data.ui.tools, category: 'tools' })), ...data.languagesData.map(item => ({ ...item, group: data.ui.languages, category: 'languages' }))].map((item, i) => ({ ...item, id: `skills-${i}`, title: item.name, subtitle: item.group })),
    education: data.educationData.map((item, i) => ({ ...item, id: `education-${i}`, title: item.degree, subtitle: item.university, period: item.year })),
    certificates: data.certificatesData.map((item, i) => ({ ...item, id: `certificates-${i}`, title: item.name, period: item.year })),
  };
  const items = groups[active];
  const filtered = items.filter(item => (filter === 'all' || (filter === 'current' ? item.current : item.category === filter)) && `${item.title} ${item.subtitle || ''} ${item.description || ''} ${(item.technologies || []).join(' ')}`.toLowerCase().includes(query.toLowerCase()));
  const sectionCopy = {
    about: [t('Обо мне и моей работе', 'About me and my work'), t('Разработка, аналитика и автоматизация в телекоммуникациях.', 'Development, analytics and automation in telecommunications.')],
    experience: [t('Мой профессиональный маршрут', 'My professional journey'), t('От автоматизации отчётности до корпоративных решений.', 'From reporting automation to enterprise solutions.')],
    projects: [t('Лаборатория идей', 'The idea lab'), t('Боты, AI и эксперименты с автоматизацией.', 'Bots, AI and automation experiments.')],
    skills: [t('Мой рабочий арсенал', 'My working toolkit'), t('Технологии, инструменты и языки, с которыми я работаю.', 'The technologies, tools and languages I work with.')],
    education: [t('Точка старта', 'The starting point'), t('Фундамент, на котором строится мой путь.', 'The foundation of my journey.')],
    certificates: [t('Всегда в процессе обучения', 'Always learning'), t('Курсы и направления, которые я изучал.', 'Courses and fields I’ve explored.')],
  };
  const sectionIcons = { about: FiUser, experience: FiBriefcase, projects: FiCode, skills: FiLayers, education: FiBookOpen, certificates: FiAward };
  const SectionIcon = sectionIcons[active];
  const searchHints = {
    about: t('Найти в описании: Python, OSS, цель…', 'Find in my profile: Python, OSS, goals…'),
    experience: t('Найти компанию, роль или технологию…', 'Find a company, role or technology…'),
    projects: t('Найти проект или технологию…', 'Find a project or technology…'),
    skills: t('Найти технологию: Python, Tableau, React…', 'Find a technology: Python, Tableau, React…'),
    education: t('Найти университет или специальность…', 'Find a university or degree…'),
    certificates: t('Найти курс или сертификат…', 'Find a course or certificate…'),
  };
  const heroCopy = {
    about: {
      label: t('Инженер по профессии. Разработчик по призванию.', 'Engineer by profession. Developer at heart.'),
      title: data.personalInfo.name,
      text: t('Данные в порядок. Рутину — в скрипты.', 'Data in order. Routine into scripts.'),
      punchline: t('И немного магии между строк.', 'And a little magic between the lines.'),
      tags: ['Python', 'Tableau', 'React', 'OSS'], orbit: ['Python', 'React', 'DATA / OSS'],
      footer: 'Tele2 Kazakhstan / Lead Engineer Developer OSS',
    },
    experience: {
      label: t('Мой путь в телекоммуникациях', 'My journey in telecommunications'),
      title: t('От данных — к решениям.', 'From data to solutions.'),
      text: data.experienceData[0].position,
      punchline: t('Автоматизация, аналитика и разработка в Tele2 Kazakhstan.', 'Automation, analytics and development at Tele2 Kazakhstan.'),
      tags: ['Telecom', 'OSS', 'Analytics', 'Automation'], orbit: ['Tele2', 'OSS', 'CAREER / JOURNEY'],
      footer: `${data.experienceData[0].company} / ${data.experienceData[0].period}`,
    },
    projects: {
      label: t('Здесь идеи превращаются в эксперименты', 'Where ideas become experiments'),
      title: t('Собираю. Пробую. Создаю.', 'Build. Explore. Create.'),
      text: t('Боты и AI для повседневных задач.', 'Bots and AI for everyday tasks.'),
      punchline: t('Моя лаборатория автоматизации бизнес-процессов.', 'My lab for business process automation.'),
      tags: ['GPT Bots', 'Make', 'n8n', 'Prompt'], orbit: ['GPT', 'n8n', 'IDEAS / LAB'],
      footer: t(`${data.projectsData.length} проекта / Изучаю и экспериментирую`, `${data.projectsData.length} projects / Learning and experimenting`),
    },
    skills: {
      label: t('Инструменты, которые всегда под рукой', 'The tools I keep close'),
      title: t('Мой стек. Мои возможности.', 'My stack. My capabilities.'),
      text: t('От Python-скрипта до интерфейса на React.', 'From a Python script to a React interface.'),
      punchline: t('Выбираю инструмент под задачу.', 'Choosing the tool to fit the task.'),
      tags: ['Python', 'SQL', 'Tableau', 'React'], orbit: ['Python', 'SQL', 'TOOLS / STACK'],
      footer: t(`${data.skillsData.length} технологий / ${data.toolsData.length} инструментов / ${data.languagesData.length} языка`, `${data.skillsData.length} technologies / ${data.toolsData.length} tools / ${data.languagesData.length} languages`),
    },
    education: {
      label: t('Фундамент для новых идей', 'A foundation for new ideas'),
      title: t('Всё начинается с любопытства.', 'It starts with curiosity.'),
      text: data.educationData[0].degree,
      punchline: data.educationData[0].university,
      tags: ['IT', data.educationData[0].year, t('Бакалавриат', 'Bachelor’s degree')], orbit: ['IT', 'Turan', 'LEARN / EXPLORE'],
      footer: `${data.educationData[0].university} / ${data.educationData[0].year}`,
    },
    certificates: {
      label: t('Следующая глава — новые знания', 'The next chapter brings new knowledge'),
      title: t('Учиться. И двигаться дальше.', 'Learn. And keep moving.'),
      text: t('Python, аналитика, frontend и GPT-боты.', 'Python, analytics, frontend and GPT bots.'),
      punchline: t('Каждый курс — ещё один шаг вперёд.', 'Every course is another step forward.'),
      tags: ['Python', 'Data Analytics', 'Frontend', 'GPT Bots'], orbit: ['Python', 'AI', 'GROW / ACHIEVE'],
      footer: t(`${data.certificatesData.length} сертификата / Продолжаю учиться`, `${data.certificatesData.length} certificates / Still learning`),
    },
  };
  const hero = heroCopy[active];
  const sectionNumber = String(sections.findIndex(([key]) => key === active) + 1).padStart(2, '0');
  const contacts = data.contactData.map(contact => ({ ...contact, href: contact.icon === 'telegram' ? `https://t.me/${contact.text.replace('@', '')}` : contact.text }));

  return <div className={`portfolio-shell mood-${mood} view-${active}`}>
    <header className="portfolio-topbar">
      <div className="topbar-inner">
      <a className="brand" href="#" onClick={e => { e.preventDefault(); selectSection('about'); }} aria-label="NDLK. — главная"><BrandMark /><span className="brand-word">NDLK<b>.</b></span></a>
      <nav aria-label={t('Разделы резюме', 'Resume sections')}>{sections.map(([key, Icon]) => <button key={key} className={`nav-item ${active === key ? 'is-active' : ''}`} onClick={() => selectSection(key)} aria-current={active === key ? 'page' : undefined}><Icon /><span>{data.ui[key]}</span>{active === key && <i />}</button>)}</nav>
      </div>
    </header>
    <main className="portfolio-main">
      <div className="ambient-stars" aria-hidden="true" />
      <header className="page-heading"><div><div className="eyebrow">PERSONAL SPACE <span>/</span> {t('РЕЗЮМЕ', 'RESUME')}</div><h1>{data.ui[active]}<span>.</span></h1><p>{data.personalInfo.title}</p></div><div className="header-actions"><div className="language-toggle" aria-label={t('Язык', 'Language')}>{['ru', 'en'].map(lang => <button key={lang} onClick={() => switchLanguage(lang)} className={language === lang ? 'selected' : ''} aria-pressed={language === lang}>{lang.toUpperCase()}</button>)}</div><a className="link-button" href={contacts[0]?.href} target="_blank" rel="noreferrer" aria-label="GitHub"><FiLink /></a></div></header>
      <section className={`hero-card ${motionPaused ? 'motion-paused' : ''}`} key={`hero-${active}`} aria-label={data.ui[active]} onPointerMove={event => {
        if (event.pointerType !== 'mouse') return;
        const rect = event.currentTarget.getBoundingClientRect();
        event.currentTarget.style.setProperty('--pointer-x', `${event.clientX - rect.left}px`);
        event.currentTarget.style.setProperty('--pointer-y', `${event.clientY - rect.top}px`);
      }}>
        <div className="hero-grid" aria-hidden="true" />
        {active === 'about' && <div className="profile-card-caption"><BrandMark /><span>PERSONAL FILE / 01</span></div>}
        <span className="hero-chapter" aria-hidden="true">{sectionNumber}</span>
        <svg className="hero-constellation" viewBox="0 0 600 260" aria-hidden="true"><path d="M20 210 100 150 180 175 275 65 360 115 470 30 570 85" /><path d="M100 150 130 50 275 65 320 220 470 30" />{[[20,210],[100,150],[180,175],[275,65],[360,115],[470,30],[570,85],[130,50],[320,220]].map(([x,y]) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3" />)}</svg>
        <div className="orbit-scene"><div className="orbital-halo" aria-hidden="true" /><div className="satellite-track" aria-hidden="true"><i /><i /></div>
          <div className="orbit-ring ring-one" aria-hidden="true" /><div className="orbit-ring ring-two" aria-hidden="true" />
          <div className={`portrait-planet planet-${active}`}>{active === 'about' ? <img src={avatar} alt={data.personalInfo.name} /> : <><svg className="globe-wire" viewBox="0 0 140 140" aria-hidden="true"><circle cx="70" cy="70" r="61" /><ellipse cx="70" cy="70" rx="25" ry="61" /><ellipse cx="70" cy="70" rx="48" ry="61" /><ellipse cx="70" cy="70" rx="61" ry="23" /><path d="M9 70H131M20 35Q70 55 120 35M20 105Q70 85 120 105" /></svg><div className="planet-meridian" aria-hidden="true" /><SectionIcon className="planet-symbol" aria-hidden="true" /><span className="planet-caption">{data.ui[active]}</span></>}</div>
          <span className="orbit-label label-python">{hero.orbit[0]} <i>✦</i></span><span className="orbit-label label-react">{hero.orbit[1]} <i>↗</i></span><span className="orbit-label label-data">{hero.orbit[2]}</span>
          <span className="orbit-coordinate">N {sectionNumber} / {active === 'about' ? 'PERSONAL ORBIT' : active.toUpperCase()}</span>
        </div>
        <div className="hero-content"><div className="hero-label"><i />{hero.label}</div><h2>{hero.title}</h2><p>{hero.text}<br /><span className="hero-punchline">{hero.punchline}</span></p><div className="hero-tags">{hero.tags.map(item => <span key={item}>{item}</span>)}</div><div className="hero-bottom"><i /><span>{hero.footer}</span></div></div>
        <button className="hero-motion-toggle motion-toggle" onClick={() => setMotionPaused(!motionPaused)} aria-pressed={!motionPaused}>{motionPaused ? t('Анимация ▶', 'Animate ▶') : t('Пауза Ⅱ', 'Pause Ⅱ')}</button><div className="mood-control"><span>{t('Атмосфера', 'Atmosphere')}</span>{[['nebula', t('Туманность', 'Nebula')], ['aurora', t('Аврора', 'Aurora')], ['sunset', t('Закат', 'Sunset')], ['burgundy', t('Бургунди', 'Burgundy')]].map(([key, label]) => <button key={key} className={mood === key ? 'chosen' : ''} onClick={() => setMood(key)} aria-pressed={mood === key} aria-label={label} title={label}><i className={`swatch-${key}`} /></button>)}</div>
      </section>
      <WorkBench language={language} onNavigate={selectSection} />
      <section className="resume-content" aria-labelledby="section-title" key={active}>
        <div className="section-heading"><div><div className="section-kicker"><SectionIcon />{data.ui[active]} <span>/ {String(sections.findIndex(([key]) => key === active) + 1).padStart(2, '0')}</span></div><h2 id="section-title">{sectionCopy[active][0]}</h2><p>{sectionCopy[active][1]}</p></div><span className="entry-count">{String(filtered.length).padStart(2, '0')}<small>{t('записей', 'entries')}</small></span></div>
        <label className="search-field"><FiSearch /><input value={query} onChange={e => setQuery(e.target.value)} placeholder={searchHints[active]} aria-label={t('Поиск по разделу', 'Search this section')} /></label>
        <div className="filter-row"><div className="filter-tabs"><button className={filter === 'all' ? 'selected' : ''} onClick={() => setFilter('all')} aria-pressed={filter === 'all'}>{t('Все', 'All')}<span>{items.length}</span></button>{['experience', 'projects'].includes(active) && <button className={filter === 'current' ? 'selected' : ''} onClick={() => setFilter('current')} aria-pressed={filter === 'current'}>{t('Сейчас', 'Current')}<span>{items.filter(item => item.current).length}</span></button>}{active === 'skills' && ['skills', 'tools', 'languages'].map(key => <button key={key} className={filter === key ? 'selected' : ''} onClick={() => setFilter(key)} aria-pressed={filter === key}>{data.ui[key]}<span>{items.filter(item => item.category === key).length}</span></button>)}</div><button className="reset-filter" onClick={() => { setQuery(''); setFilter('all'); }}>{t('Сбросить', 'Clear filters')}</button></div>
        <div className={`entry-list layout-${active}`}>
          {active === 'skills' ? ['skills', 'tools', 'languages'].map(category => {
            const categoryItems = filtered.filter(item => item.category === category);
            if (!categoryItems.length) return null;
            return <SkillCatalog key={category} items={categoryItems} category={category} title={data.ui[category]} language={language} />;
          }) : filtered.map((item, index) => {
            const open = expanded[item.id] ?? (item.id === 'about-0' || ['experience', 'projects', 'education', 'certificates'].includes(active));
            const Icon = active === 'about' ? [FiUser, FiArrowUpRight, FiLayers, FiCode][data.aboutText.findIndex(entry => entry.title === item.title)] || FiUser : SectionIcon;
            return <article className={`resume-entry entry-${item.id} ${open ? 'expanded' : ''} ${item.current ? 'entry-current' : ''}`} key={item.id}>
              <div className="entry-art" aria-hidden="true"><span>{String(index + 1).padStart(2, '0')}</span><Icon /></div>
              <div className="entry-card-top"><span className="entry-marker"><Icon /></span><span className="entry-index">{item.current ? t('В процессе', 'In progress') : item.period || `${String(index + 1).padStart(2, '0')} / ${data.ui[active]}`}</span></div>
              <div className="entry-body"><button className="entry-toggle" onClick={() => setExpanded(prev => ({ ...prev, [item.id]: !open }))} aria-expanded={open}><div><h3>{item.title}</h3>{(item.subtitle || item.period) && <p className="entry-meta">{item.subtitle}{item.subtitle && item.period && <span>·</span>}{item.period}</p>}{!open && item.description && <p className="entry-preview">{item.description.trim().split('\n')[0]}</p>}</div><FiChevronDown className="entry-chevron" /></button>
                {open && <div className="entry-detail">{item.description && <p>{item.description.trim()}</p>}{item.technologies && <div className="entry-tags">{item.technologies.map(tech => <span key={tech}>{tech}</span>)}</div>}{item.url && <a href={item.url} target="_blank" rel="noreferrer">{active === 'projects' ? t('Платформа проекта', 'Project platform') : t('Перейти на сайт', 'Visit website')}<FiArrowUpRight /></a>}</div>}
              </div>
            </article>;
          })}
          {!filtered.length && <div className="empty-state"><FiSearch /><p>{t('Ничего не найдено. Попробуй другой запрос.', 'No matches. Try another search.')}</p></div>}
        </div>
        {active === 'about' && <InterestsPanel items={data.interestsData} language={language} mood={mood} />}
      </section>
      <footer className="portfolio-footer"><div className="contact-intro"><span className="section-kicker">{t('МОЙ ПОДХОД', 'MY APPROACH')}</span><blockquote>{t('Разобраться в сложном.', 'Understand the complex.')}<br /><em>{t('Сделать простым.', 'Make it simple.')}</em></blockquote><p>{t('В данных, в коде и в повседневной работе.', 'In data, in code and in everyday work.')}</p></div><div className="contact-links">{contacts.map(contact => {const Icon=contact.icon === 'github' ? FiGithub : FiSend;return <a key={contact.icon} href={contact.href} target="_blank" rel="noreferrer"><Icon /><div><strong>{contact.icon === 'github' ? 'GitHub' : 'Telegram'}</strong><span>{contact.icon === 'github' ? contact.text.split('/').pop() : contact.text}</span></div><FiArrowUpRight /></a>;})}</div><div className="footer-signoff"><a href="#" className="footer-logo" onClick={event => { event.preventDefault(); selectSection('about'); window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }}><BrandMark /><strong>NDLK<span>.</span></strong><small>ENGINEER / DEVELOPER</small></a><div className="footer-track" aria-hidden="true"><span>DATA</span><i /><span>CODE</span><i /><span>OSS</span></div><button className="back-to-top" onClick={() => window.scrollTo({top:0,behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'})}>{t('Наверх', 'Back to top')}<FiArrowUpRight /></button></div></footer>
    </main>
  </div>;
}
