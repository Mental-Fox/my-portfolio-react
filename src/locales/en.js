export const en = {
  personalInfo: {
    name: "Nedelko Nikolay",
    title: "OSS Engineer-Developer",
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
    { name: "Russian", level: 100 },
    { name: "English", level: 55 },
    { name: "Kazakh", level: 30 },
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
      title: "About Me",
      content: `Full-stack data analyst with expert-level Tableau development for enterprise solutions, actively rewriting the web server from PHP to React and creating/monitoring Python scripts based on colleagues' requests.`,
    },
    {
      title: "Goal",
      content: `To become a full-stack developer, contribute to open-source projects, and create products that enhance people's lives.`,
    },
    {
      title: "Term",
      content: `OSS (Operation Support System) is a system for interacting with telecommunications operational equipment: switches, networks, ATS, and more.`,
    },
    {
      title: "Term Example",
      content: `
      For example, if a Tele2 operator's base station fails in the Almaty region, 
      an engineer opens an OSS system, such as Huawei U2000 or Ericsson ENM, and sees:
    - The equipment is not responding;
    - Which alarms (errors) have been triggered;
    - How many subscribers are affected.
    Through the same system, they can:
    - Remotely reboot the equipment;
    - Adjust settings (e.g., rotate the antenna by 10°);
    - Run a script to collect load statistics.`,
    },
  ],

  experienceData: [
    {
      company: "Tele2 Kazakhstan",
      position: "Lead Engineer Developer OSS",
      period: "October 2024 - Present",
      description: `Developed a unique dashboard for analyzing incidents and subscriber requests, which was highly appreciated by management and became a benchmark for subsequent projects.\nOptimized data visualization in Tableau by implementing dynamic filtering and aggregated views.\nCreated an internal course and guide on Tableau for technical department employees.`,
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
      period: "February 2023 - October 2024",
      description:
        "Automated and updated reporting processes.\nDeveloped features in PHP for the Data Aggregation Reporting system, including daily, weekly, and monthly statistical reports for 2G, 3G, 4G, and 5G networks.\nPrepared technical specifications for Huawei employees and instructions for internal departments.",
      technologies: ["Python", "MySQL", "PHP"],
      url: "https://tele2.kz",
    },
  ],

  projectsData: [
    {
      name: "GPT Bots",
      period: "2025 - ...",
      description:
        "Currently learning to create bots, with several projects already based on GPT-4.",
      technologies: ["SendPulse", "Prompt", "GPT"],
    },
    {
      name: "Make & n8n",
      period: "2025 - ...",
      description: "Currently learning to create bots.",
      technologies: ["make", "n8n", "telegram", "GPT"],
    },
  ],

  educationData: [
    {
      degree: "Bachelor of Information Technology",
      university: "Turan University, Almaty",
      year: "2018 - 2021",
    },
  ],

  certificatesData: [
    {
      name: "GPT Bots Integrator (yes, I got carried away by the hype)",
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

  // Translations for UI elements
  ui: {
    about: "About Me",
    contacts: "Contacts",
    skills: "Skills",
    tools: "Tools",
    languages: "Languages",
    interests: "Interests",
    experience: "Experience",
    projects: "Projects",
    education: "Education",
    certificates: "Certificates",
  },
};
