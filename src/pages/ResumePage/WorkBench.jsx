import React, { useState } from 'react';
import TypingCode from './TypingCode';
import NetworkDiagram from './NetworkDiagram';
import WebStudio from './WebStudio';
import { FiLayout, FiCode, FiServer } from 'react-icons/fi';

export default function WorkBench({ language }) {
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [mode, setMode] = useState('oss');
  const [source, setSource] = useState('4G');
  const t = (ru, en) => language === 'ru' ? ru : en;
  const tabs = [['oss', FiServer, 'OSS'], ['web', FiLayout, 'Web'], ['code', FiCode, 'Code']];
  const ModeIcon = tabs.find(([key]) => key === mode)[1];
  return <section className={`workbench ${playing ? '' : 'motion-paused'}`} aria-label={t('Моя работа в схемах', 'My work in diagrams')}>
    <div className="workbench-toolbar"><span className="console-dots" aria-hidden="true"><i /><i /><i /></span><span className="workbench-path">nikolay / workspace</span><div className="workbench-tabs">{tabs.map(([key, Icon, name]) => <button key={key} onClick={() => setMode(key)} aria-pressed={mode === key}><Icon />{name}</button>)}</div><button className="motion-toggle bench-motion-toggle" onClick={() => setPlaying(!playing)} aria-pressed={playing}>{playing ? t('Пауза Ⅱ', 'Pause Ⅱ') : t('Анимация ▶', 'Animate ▶')}</button><span className="workbench-caption">{t('ВИЗУАЛЬНАЯ СХЕМА', 'VISUAL CONCEPT')}</span></div>
    <div className={`workbench-body bench-${mode}`}>
      <div className="bench-section-label"><div className="bench-mode-icon"><ModeIcon /></div><span className="section-kicker">{mode === 'oss' ? '01 / NETWORK' : mode === 'web' ? '02 / AI & WEB' : '03 / AUTOMATION'}</span></div>
      <div className="workbench-visual" key={mode}>
        {mode === 'oss' ? <NetworkDiagram language={language} source={source} onSourceChange={setSource} /> : mode === 'web' ? <WebStudio language={language} playing={playing} onReplay={() => setPlaying(true)} /> : <TypingCode language={language} playing={playing} onReplay={() => setPlaying(true)} />}
      </div>
    </div>
  </section>;
}
