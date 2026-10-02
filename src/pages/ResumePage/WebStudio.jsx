import React, { useEffect, useState } from 'react';
import { FiCode, FiCpu, FiArrowRight, FiLayout, FiX } from 'react-icons/fi';
import './WebStudio.css';

const example = [
  'export default function Portfolio() {',
  '  return (',
  '    <main className="portfolio">',
  '      <Hero title="Nikolay" />',
  '      <Projects />',
  '      <Skills />',
  '      <Contact />',
  '    </main>',
  '  );',
  '}',
].join('\n');

export default function WebStudio({ language, playing, onReplay }) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [count, setCount] = useState(() => reduced ? example.length : 0);
  const [previewOpen, setPreviewOpen] = useState(true);
  const t = (ru, en) => language === 'ru' ? ru : en;
  useEffect(() => {
    if (!playing || reduced || count >= example.length) return;
    const timer = window.setTimeout(() => setCount(value => value + 1), example[count] === '\n' ? 180 : 40);
    return () => window.clearTimeout(timer);
  }, [count, playing, reduced]);
  const typed = example.slice(0, count).split('\n');
  const complete = count === example.length;
  return <div className="web-studio web-typing-demo">
    <div className="visual-heading"><span><i />GPT 6.2 / REACT</span><small>{t('Идея → код → сайт', 'Idea → code → website')}</small></div>
    <div className="web-request"><FiCpu /><span>{t('Запрос: портфолио инженера с проектами, навыками и контактами.', 'Prompt: an engineer portfolio with projects, skills and contacts.')}</span></div>
    <div className="web-studio-body">
      <div className="web-typed-code"><div className="code-window"><div><span>Portfolio.jsx</span><small>React / CSS</small></div><pre aria-hidden="true"><code>{example.split('\n').map((line, index) => <span className="numbered-code" key={index}><i>{String(index + 1).padStart(2, '0')}</i><span>{typed[index] || ''}{index === typed.length - 1 && !complete && <b className="typing-cursor">▍</b>}</span></span>)}</code></pre><span className="sr-only">{example}</span></div><div className="typing-result"><span>{t('Результат', 'Result')}</span><code>{complete ? t('Интерфейс собран', 'Interface built') : t('Печатается код…', 'Typing code…')}</code>{!reduced && <button disabled={!complete} onClick={() => { setCount(0); setPreviewOpen(true); onReplay(); }}>{t('Повторить', 'Replay')} ↻</button>}</div></div>
      <div className="web-preview-output" aria-live="polite">
        {complete && previewOpen ? <div className="web-preview" role="region" aria-label={t('Пример сайта в браузере', 'Sample website in browser')}>
          <div className="web-preview-bar"><span className="console-dots" aria-hidden="true"><i /><i /><i /></span><span>portfolio / preview</span><button onClick={() => setPreviewOpen(false)} aria-label={t('Закрыть пример сайта', 'Close sample website')}><FiX /></button></div>
          <div className="web-preview-page"><div className="web-preview-nav"><strong>✳ NDLK.</strong><span>WORK / ABOUT</span></div><div className="web-preview-hero"><span>ENGINEER & DEVELOPER</span><h4>Nikolay.</h4><p>{t('Данные. Код. Интерфейсы.', 'Data. Code. Interfaces.')}</p><span className="web-preview-cta">{t('Мои проекты', 'My projects')} <FiArrowRight /></span><div className="web-preview-orbit" aria-hidden="true"><FiCode /></div></div><div className="web-preview-tiles"><div><FiLayout /><span>PROJECTS</span></div><div><FiCode /><span>SKILLS</span></div><div><FiCpu /><span>CONTACT</span></div></div><div className="web-preview-bottom"><span>REACT / CSS / AI</span><span>PORTFOLIO</span></div></div>
        </div> : <div className="excel-waiting"><FiLayout /><strong>{t('Код → готовый интерфейс', 'Code → finished interface')}</strong><p>{complete ? t('Пример сайта закрыт.', 'Sample website closed.') : t('После набора кода здесь откроется окно браузера с портфолио.', 'Once the code is typed, a browser window with the portfolio will appear here.')}</p>{complete ? <button onClick={() => setPreviewOpen(true)}>{t('Открыть сайт', 'Open website')}</button> : <span className="excel-waiting-dots" aria-hidden="true"><i /><i /><i /></span>}</div>}
      </div>
    </div>
    <div className="bench-footnote">{t('Анимация примера: запрос → React → интерфейс', 'Animated example: prompt → React → interface')}<span>PROMPT / CODE / PREVIEW</span></div>
  </div>;
}
