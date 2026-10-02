import React, { useState } from 'react';
import sources from '../../../public/interests/sources.json';
import { FiPause, FiPlay } from 'react-icons/fi';

const media = { 'Machine Learning': 'machine-learning', Coding: 'coding', Anime: 'anime', Workout: 'workout', Tech: 'tech', Music: 'music', Gaming: 'gaming', Swimming: 'swimming' };

export default function InterestsPanel({ items, language, mood }) {
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const t = (ru, en) => language === 'ru' ? ru : en;
  const tint = { nebula: [.74,.61,.94], aurora: [.55,.91,.83], sunset: [1,.7,.56], burgundy: [.91,.47,.59] }[mood];
  return <section className="interests" aria-labelledby="interests-title"><svg className="gif-filter-defs" aria-hidden="true"><defs><filter id="interest-tint" colorInterpolationFilters="sRGB"><feColorMatrix type="saturate" values="0" /><feComponentTransfer><feFuncR type="table" tableValues={`0 ${tint[0]}`} /><feFuncG type="table" tableValues={`0 ${tint[1]}`} /><feFuncB type="table" tableValues={`0 ${tint[2]}`} /></feComponentTransfer></filter></defs></svg><div className="interests-heading"><span>✳</span><div><span className="section-kicker">{t('ВНЕ РАБОЧИХ ЗАДАЧ', 'BEYOND THE WORK')}</span><h3 id="interests-title">{t('Не только код.', 'More than code.')}</h3><p>{t('То, что заряжает меня между проектами.', 'What recharges me between projects.')}</p></div><button className="motion-toggle interests-caption" onClick={() => setPlaying(!playing)} aria-pressed={playing}>{playing ? <FiPause /> : <FiPlay />}{playing ? t('Пауза GIF', 'Pause GIFs') : t('Включить GIF', 'Play GIFs')}</button></div><div className="interest-grid">{items.map((item,index) => <article className="interest-tile" key={item}><img src={`/interests/${media[item]}.${playing ? 'gif' : 'png'}`} alt="" loading="lazy" width="320" height="180" /><div className="interest-tile-bottom"><span>{item}</span><a className="interest-source" href={sources[media[item]].source} target="_blank" rel="noreferrer" aria-label={`${item} — GIF на Tenor`}>Tenor ↗</a></div></article>)}</div></section>;
}
