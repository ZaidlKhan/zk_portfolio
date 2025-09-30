// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'zaidlkhan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/zk_portfolio/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'updated', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Pinnit UBC',
          description:
            'A new platform designed to help students at the University of British Columbia (UBC) discover and stay updated on campus events.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/169808025?s=200&v=4',
          link: 'https://mypinnit.com/',
        },
        {
          title: 'JustChat App',
          description:
            'JustChat is a real-time messaging app that streamlines Instagram DM management with an intuitive interface, efficient message handling, and seamless updates from your favorite accounts.',
          imageUrl:
            'https://raw.githubusercontent.com/jchatapp/jchatapp-frontend/refs/heads/main/demo/logo.png',
          link: 'https://github.com/jchatapp/jchatapp-frontend',
        },
        {
          title: 'Basketball League Database',
          description:
            'A comprehensive database for managing a basketball league, designed to handle various aspects of a basketball league including player statistics, team management, and scheduales.',
          imageUrl:
            'https://raw.githubusercontent.com/ZaidlKhan/basketball_database/refs/heads/main/demo/ball.png',
          link: 'https://github.com/ZaidlKhan/basketball_database',
        },
        {
          title: 'Greek Alphabet Recognition',
          description:
            "Greek Alphabet Recognition an application that identifies Greek letters drawn by the user, providing instant feedback on accuracy.",
          imageUrl:
            'https://raw.githubusercontent.com/ZaidlKhan/basketball_database/refs/heads/main/demo/greek.webp',
          link: 'https://github.com/ZaidlKhan/greek_alphabet_recognition',
        },
      ],
    },
  },
  seo: {
    title: "Zaid's Portfolio",
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'zaidlkhan',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '',
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '6043138533',
    email: 'zkhan1065@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/11CxLqDIcso-a33DKOY5w2wiQGK1xgF4_/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'TypeScript',
    'C/C++',
    'Power BI',
    'Pandas',
    'Numpy',
    'Scikit-Learn',
    'MySQL',
    'React.js',
    'Angular',
    'Git',
    'Node.js',
    'MongoDB',
    'Oracle',
    'AWS',
    'Azure'
  ],
  experiences: [
    {
      company: 'Developed and maintained Angular front-end components and Java Spring back-end services for the Global License Compliance Platform (GLCP), streamlining compliance workflows for 500+ analysts worldwide. Designed and delivered scalable full-stack features across storage, REST APIs, and UI with a focus on security, performance, and user experience.',
      position: 'Full-Stack Software Developer Intern - SAP',
      from: 'Sept 2025',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Designed and implemented a scalable, serverless simulation platform using several AWS services, JSP, and the Spring Framework, that significantly reduced test time, enabled asynchronous model evaluation, and enhanced user experience with real-time tracking and automated notifications.',
      position: 'Software Developement Engineer Intern - Amazon',
      from: 'May 2025',
      to: 'July 2025',
      companyLink: '',
    },
    {
      company: 'Led cross-functional collaboration with 10+ stakeholders to develop a data-driven care pathway model, utilizing Python, Power BI, and Azure SQL to integrate and analyze healthcare data. Synthesized insights from 30+ research papers and policies to ensure compliance and inform actionable recommendations.',
      position: 'Data Analyst - Health of the Vulnerable',
      from: 'September 2024',
      to: 'May 2025',
      companyLink: '',
    },
    {
      company: 'Engineered a data automation pipeline using Python to extract real-time network usage data from the Starlink API across 60+ Nunavut locations. Optimized data transformation and storage with Azure Data Factory and reduced costs by leveraging Azure Blob Storage over SQL databases. Configured MySQL with optimized schemas for fast queries and large-scale data handling. Developed interactive Power BI dashboards that provided actionable insights for strategic business decisions.',
      position: 'Data Engineering Intern - Qiniq',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: '',
    },
  ],
  certifications: [

  ],
  educations: [
    {
      institution: 'University of British Columbia',
      degree: 'Bachelors of Computer Science and Public Health',
      from: '2020',
      to: '2026',
    },
  ],
  publications: [
  ],
  // Display articles from your medium or dev account. (Optional)

  googleAnalytics: {
    id: 'G-NXS7LQ7FNY', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'dracula',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'business',
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
