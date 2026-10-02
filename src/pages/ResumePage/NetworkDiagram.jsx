import React from 'react';
import { FiRadio, FiServer, FiCode, FiFileText, FiBarChart2 } from 'react-icons/fi';

const examples = {
  '2G': [['Вызовы', 'Calls'], ['Загрузка', 'Load'], ['Доступность', 'Availability']],
  '3G': [['Голос / данные', 'Voice / data'], ['Соединения', 'Connections'], ['Загрузка', 'Load']],
  '4G': [['Трафик', 'Traffic'], ['Доступность', 'Availability'], ['Нагрузка на соты', 'Cell load']],
  '5G': [['Трафик', 'Traffic'], ['Скорость', 'Throughput'], ['Нагрузка на соты', 'Cell load']],
};

function Connection({ label }) {
  return <div className="oss-connection"><span>{label}</span><i aria-hidden="true" /></div>;
}

export default function NetworkDiagram({ language, source, onSourceChange }) {
  const t = (ru, en) => language === 'ru' ? ru : en;
  return <>
    <div className="visual-heading"><span><i />NETWORK TO REPORT</span><small>{t('Как данные становятся отчётом', 'How data becomes a report')}</small></div>
    <div className="oss-generation-selector" role="group" aria-label={t('Поколение сети', 'Network generation')}>
      <span>{t('Источник данных', 'Data source')}</span>
      {Object.keys(examples).map(name => <button key={name} onClick={() => onSourceChange(name)} aria-pressed={source === name}>{name}</button>)}
    </div>
    <div className="oss-flow" aria-label={t('Сеть → OSS → обработка → отчёт', 'Network → OSS → processing → report')}>
      <article className="oss-node oss-source" aria-live="polite">
        <span className="oss-step">01 / {source}</span><FiRadio className="oss-node-icon" />
        <h3>{t('Базовые станции', 'Base stations')}</h3>
        <p>{t('Примеры показателей', 'Example metrics')}</p>
        <ul>{examples[source].map(pair => <li key={pair[1]}>{t(...pair)}</li>)}</ul>
      </article>
      <Connection label={t('Счётчики', 'Counters')} />
      <article className="oss-node oss-node-core">
        <span className="oss-step">02 / COLLECT</span><FiServer className="oss-node-icon" />
        <h3>OSS</h3><p>{t('Сбор данных сети', 'Collect network data')}</p>
        <ul><li>{t('Статистика', 'Statistics')}</li><li>{t('События и аварии', 'Events and alarms')}</li><li>{t('Выгрузка данных', 'Data export')}</li></ul>
      </article>
      <Connection label="CSV / Excel" />
      <article className="oss-node">
        <span className="oss-step">03 / PROCESS</span><FiCode className="oss-node-icon" />
        <h3>Python / SQL</h3><p>{t('Подготовка данных', 'Prepare data')}</p>
        <ul><li>{t('Проверка и очистка', 'Validate and clean')}</li><li>{t('Объединение', 'Combine')}</li><li>{t('Сводные показатели', 'Summary metrics')}</li></ul>
      </article>
      <Connection label={t('Сводка', 'Summary')} />
      <article className="oss-node oss-results">
        <span className="oss-step">04 / REPORT</span>
        <h3>{t('Результат', 'Output')}</h3>
        <div><FiFileText /><span><strong>Excel</strong><small>{t('Таблицы и отчёты', 'Tables and reports')}</small></span></div>
        <div><FiBarChart2 /><span><strong>Tableau</strong><small>{t('Графики и дашборды', 'Charts and dashboards')}</small></span></div>
      </article>
    </div>
    <div className="bench-footnote">{t('Пример цепочки обработки данных сети', 'Example network data processing flow')}<span>{source} / COLLECT / PROCESS / REPORT</span></div>
  </>;
}
