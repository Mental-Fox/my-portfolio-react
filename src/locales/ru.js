export const ru = {
  personalInfo: {
    name: "Nedelko Nikolay",
    title: "Engineer-Developer OSS",
  },

  contactData: [
    { icon: "github", text: "https://github.com/Mental-Fox" },
    { icon: "telegram", text: "@n_nikolay_kz" },
  ],

  skillsData: [
    { name: "Python", level: 80 },
    { name: "HTML/CSS", level: 70 },
    { name: "MySQL", level: 50 },
    { name: "JavaScript", level: 50 },
    { name: "PHP", level: 35 },
    { name: "Git", level: 30 },
    { name: "ReactJS", level: 30 },
    { name: "Node.js", level: 30 },
    { name: "Java (basics)", level: 10 },
  ],

  toolsData: [
    { name: "ChatGPT", level: 100 },
    { name: "Tableau", level: 100 },
    { name: "VS Code", level: 75 },
    { name: "Administration", level: 50 },
    { name: "Power BI", level: 40 },
    { name: "Netlify", level: 25 },
    { name: "Make", level: 5 },
    { name: "n8n", level: 5 },
  ],

  languagesData: [
    { name: "Русский", level: 100 },
    { name: "Английский", level: 55 },
    { name: "Казахский", level: 30 },
  ],

  interestsData: [
    "Machine Learning",
    "Coding",
    "Anime",
    "Workout",
    "Tech",
    "Music",
    "Gaming",
    "Swimming",
  ],

  aboutText: [
    {
      title: "Обо мне",
      content: `Full-stack аналитик данных с экспертным уровнем в разработке Tableau для корпоративных решений, активно переписываю веб-сервер с PHP на React и создаю/мониторю Python-скрипты по задачам коллег.`,
    },
    {
      title: "Цель",
      content: `Стать Full-stack разработчиком, внести вклад в open-source проекты и создавать продукты, которые улучшают жизнь людей.`,
    },
    {
      title: "Термин",
      content: `OSS (Operation Support System) - система для взаимодействия с операционным оборудованием телекоммуникаций: коммутаторы, сети, АТС и прочее.`,
    },
    {
      title: "Пример термина",
      content: `
      Например, если у оператора Tele2 в Алматинской области вышла из строя базовая станция, 
      инженер открывает OSS систему, например Huawei U2000 или Ericsson ENM, и видит:
    - Оборудование не отвечает;
    - Какие алармы (ошибки) сработали;
    - Сколько абонентов затронуто.
    Через эту же систему он может:
    - Удаленно перезагрузить оборудование;
    - Изменить настройки (например, повернуть антенну на 10°);
    - Запустить скрипт для сбора статистики нагрузки.`,
    },
  ],

  experienceData: [
    {
      company: "Tele2 Kazakhstan",
      position: "Lead Engineer Developer OSS",
      period: "Октябрь 2024 - Настоящее время",
      description: `Разработал уникальный дашборд для анализа инцидентов и обращений абонентов, который был высоко оценен руководством и стал эталоном для последующих проектов.\nОптимизировал визуализацию данных в Tableau путем внедрения динамической фильтрации и агрегированных представлений.\nРазработал внутренний курс и руководство по Tableau для сотрудников технического отдела.`,
      technologies: [
        "Python",
        "SQL",
        "Tableau",
        "VBS",
        "Excel",
        "PHP",
        "JavaScript",
        "ReactJS",
        "Data Visualization",
        "Pixel-Perfect",
      ],
      url: "https://tele2.kz",
    },
    {
      company: "Tele2 Kazakhstan",
      position: "Middle/Senior Engineer Developer OSS",
      period: "Февраль 2023 - Октябрь 2024",
      description:
        "Автоматизировал и обновил процессы отчетности.\nРазработал функции на PHP для системы Data Aggregation Reporting, включая ежедневные, еженедельные и ежемесячные статистические отчеты для сетей 2G, 3G, 4G и 5G.\nПодготавливал технические задания для сотрудников Huawei и инструкции для внутренних отделов.",
      technologies: ["Python", "MySQL", "PHP"],
      url: "https://tele2.kz",
    },
  ],

  projectsData: [
    {
      name: "Интеграция GPT Bots в бизнес-процессы",
      period: "2025 - ...",
      description:
        "В настоящее время учусь создавать ботов, уже есть несколько проектов на основе GPT-4.",
      technologies: ["SendPulse", "Prompt", "OpenAI: GPT-4"],
      url: "https://sendpulse.kz/",
    },
    {
      name: "Создание ботов на платформах Make & n8n",
      period: "2025 - ...",
      description: "В настоящее время учусь создавать ботов.",
      technologies: ["make", "n8n", "Prompt", "OpenAI: GPT-4"],
      url: "https://n8n.io/vs/make/",
    },
  ],

  educationData: [
    {
      degree: "Бакалавр информационных технологий",
      university: "Университет Туран, Алматы",
      year: "2018 - 2021",
      url: "https://www.turan-edu.kz/",
    },
  ],

  certificatesData: [
    {
      name: "Интегратор GPT Bots (да, поддался хайпу)",
      year: "2025",
      icon: "gpt",
      url: "https://onaibots.kz/",
    },
    {
      name: "Data Analytics (academica.kz)",
      year: "2025",
      icon: "data",
      url: "https://academica.kz",
    },
    {
      name: "Frontend Access (Jusan Singularity)",
      year: "2024",
      icon: "frontend",
      url: "https://singularity.camp/",
    },
    {
      name: "Advanced Python (Bilim Park)",
      year: "2022",
      icon: "python",
      url: "https://bilimpark.kz",
    },
  ],

  // Переводы для UI элементов
  ui: {
    about: "Обо мне",
    contacts: "Контакты",
    skills: "Навыки",
    tools: "Инструменты",
    languages: "Языки",
    interests: "Интересы",
    experience: "Опыт работы",
    projects: "Проекты",
    education: "Образование",
    certificates: "Сертификаты",
  },
};
