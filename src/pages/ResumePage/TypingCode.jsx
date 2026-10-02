import React, { useEffect, useState } from 'react';
import { FiFileText, FiCheck, FiX, FiGrid } from 'react-icons/fi';
import './TypingCode.css';

const example = [
  'import pandas as pd',
  '',
  'data = pd.read_excel("data.xlsx")',
  'clean = data.dropna()',
  'report = clean.groupby("region")["traffic"].sum()',
  '',
  'report.to_excel("report.xlsx")',
  'print("report.xlsx saved")',
].join('\n');

export default function TypingCode({ language, playing, onReplay }) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const [count, setCount] = useState(() => reduced ? example.length : 0);
  const [workbookOpen, setWorkbookOpen] = useState(true);
  const t = (ru, en) => language === 'ru' ? ru : en;
  useEffect(() => {
    if (!playing || reduced || count >= example.length) return;
    const timer = setTimeout(() => setCount(value => value + 1), example[count] === '\n' ? 230 : 55);
    return () => clearTimeout(timer);
  }, [playing, reduced, count]);
  const typed = example.slice(0, count).split('\n');
  const complete = count === example.length;
  return <div className="typing-demo"><div className="code-excel-layout"><div><div className="code-window"><div><span>excel_report.py</span><small>pandas / Excel</small></div><pre aria-hidden="true"><code>{example.split('\n').map((line,index) => <span className="numbered-code" key={index}><i>{String(index+1).padStart(2,'0')}</i><span>{typed[index] || ''}{index === typed.length - 1 && !complete && <b className="typing-cursor">▍</b>}</span></span>)}</code></pre><span className="sr-only">{example}</span></div><div className="typing-result"><span>{t('Вывод', 'Output')}</span><code>{complete ? 'report.xlsx saved' : '…'}</code>{!reduced && <button onClick={() => { setCount(0); setWorkbookOpen(true); onReplay(); }} disabled={!complete}>{t('Повторить', 'Replay')} ↻</button>}</div></div>
    <div className="excel-output" aria-live="polite">
      {complete && workbookOpen ? <div className="excel-preview" role="region" aria-label={t('Пример Excel-отчёта report.xlsx', 'Sample Excel report report.xlsx')}>
        <div className="excel-titlebar"><span className="excel-app-icon">X</span><strong>report.xlsx</strong><FiCheck /><button onClick={() => setWorkbookOpen(false)} aria-label={t('Закрыть пример отчёта', 'Close sample report')}><FiX /></button></div>
        <div className="excel-ribbon"><span>{t('Файл', 'File')}</span><span className="excel-ribbon-active">{t('Главная', 'Home')}</span><span>{t('Вставка', 'Insert')}</span><span>{t('Данные', 'Data')}</span></div>
        <div className="excel-formula"><span>A2</span><i>fx</i><span>Almaty</span></div>
        <div className="excel-grid-wrap"><table className="excel-grid" aria-label={t('Трафик по регионам, ГБ', 'Traffic by region, GB')}><thead><tr><th aria-label={t('Номер строки', 'Row number')} /><th scope="col">A</th><th scope="col">B</th></tr></thead><tbody><tr><th scope="row">1</th><td className="excel-table-heading">region</td><td className="excel-table-heading">traffic</td></tr>{[['Almaty', 420], ['Astana', 310], ['Shymkent', 180]].map(([region, traffic], i) => <tr key={region}><th scope="row">{i + 2}</th><td className={i === 0 ? 'excel-selected-cell' : ''}>{region}</td><td className="excel-number">{traffic}</td></tr>)}<tr aria-hidden="true"><th>5</th><td /><td /></tr><tr aria-hidden="true"><th>6</th><td /><td /></tr></tbody></table></div>
        <div className="excel-sheet-tabs"><FiGrid /><span>Sheet1</span><small>+</small></div>
        <div className="excel-status"><span>{t('Сводка по регионам', 'Summary by region')}</span><span>{t('Сумма', 'Sum')}: 910 {t('ГБ', 'GB')}</span></div>
      </div> : <div className="excel-waiting"><FiFileText /><strong>{complete ? 'report.xlsx' : t('Код → Excel-отчёт', 'Code → Excel report')}</strong><p>{complete ? t('Пример отчёта закрыт.', 'Sample report closed.') : t('После набора кода здесь появится таблица: трафик сгруппирован по регионам.', 'Once the code is typed, a table will appear here with traffic grouped by region.')}</p>{complete ? <button onClick={() => setWorkbookOpen(true)}>{t('Открыть отчёт', 'Open report')}</button> : <span className="excel-waiting-dots" aria-hidden="true"><i /><i /><i /></span>}</div>}
    </div>
    </div><div className="bench-footnote">{t('Анимация примера: Python → pandas → Excel', 'Animated example: Python → pandas → Excel')}<span>READ / CLEAN / GROUP / EXPORT</span></div></div>;
}
