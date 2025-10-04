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
            'A new platform designed to help students at the University of British Columbia discover and stay updated on campus events. My role was to develop a method to automate website updates with new posts, as the process had become extremely tedious.',
          imageUrl:
            'https://avatars.githubusercontent.com/u/169808025?s=200&v=4',
          link: 'https://mypinnit.com/',
          technologies: ["Python", "React", "MongoDB", "Scikit-Learn", "Pandas", "Numpy", "SpaCy", "Google Vision API"],
          keyFeatures: [
            "Event classification with an accuracy of 95%",
            "Extract event information from images and text",
            "Automatically update website with new events",
          ],
          learnings: [
            "Working with other developers and delivering my part to build a scalable and efficient platform",
            "How to apply machine learning techniques learned in class (CPSC 330) to solve problems",
            "Cleaning and pre-processing data is the hardest part of machine learning (Had to manually label 1500+ events for training a supervised learning model 💀)",
            "Building pipelines to break down problem for data processing and machine learning",

          ],
          screenshots: {
            main: "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/pinnit1.png",
            mobile: "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/pinnit2.png"
          }
        },
        {
          title: 'JustChat App',
          description:
            'JustChat is a real-time messaging app that streamlines Instagram DM management with an intuitive interface, efficient message handling, and seamless updates from your favorite accounts.',
          imageUrl:
            'https://raw.githubusercontent.com/jchatapp/jchatapp-frontend/refs/heads/main/demo/logo.png',
          link: 'https://github.com/jchatapp/jchatapp-frontend',
          technologies: ["JavaScript", "React Native", "Node.js", "Express.js", "MongoDB", "Instagram API"],
          keyFeatures: [
            "Real-time messaging for Instagram DMs",
            "Keep up with your favorite accounts in real-time"
          ],
          learnings: [
            "Learned how to build RESTful APIs with CRUD operations using Express.js and MongoDB",
            "Parsing large JSON files to retrieve messages for Instagram DMs",
            "Found out polling is not the best way to implement a real-time messaging app 😅 (Didn't have many options though)",
          ],
          screenshots: [
            "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/1.png",
            "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/2.png",
            "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/3.png",
            "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/8.png",
          ]
        },
        {
          title: 'Basketball League Database',
          description:
            'A comprehensive database for managing a basketball league, designed to handle various aspects of a basketball league including player statistics, team management, and scheduales.',
          imageUrl:
            'https://raw.githubusercontent.com/ZaidlKhan/basketball_database/refs/heads/main/demo/ball.png',
          link: 'https://github.com/ZaidlKhan/basketball_database',
          technologies: ["Java", "SQL", "Oracle", "JFrame"],
          keyFeatures: [
            "Track and edit team info such as roster, owner, arena, and sponsors",
            "View and edit player info such as age, salary, and position",
            "Can view stats for each season and game"
          ],
          learnings: [
            "Learned how to use Oracle SQL to create a database and tables",
            "Using JFrame to create a GUI for the database",
            "Learned how to use Java to create a program that can interact with the database",
          ],
          screenshots: "https://raw.githubusercontent.com/ZaidlKhan/zk_portfolio/refs/heads/main/src/assets/bball.png"
        },
        {
          title: 'Greek Alphabet Recognition',
          description:
            "Greek Alphabet Recognition an application that identifies Greek letters drawn by the user, providing instant feedback on accuracy.",
          imageUrl:
            'https://raw.githubusercontent.com/ZaidlKhan/basketball_database/refs/heads/main/demo/greek.webp',
          link: 'https://github.com/ZaidlKhan/greek_alphabet_recognition',
          technologies: ["Jupyter Notebook", "Python", "TensorFlow", "Flask", "Scikit-Learn", "Pandas", "Numpy"],
          keyFeatures: [
            "The user draws the required letter and the app identifies it",
            "The user is able to add their own letters to the dataset",
          ],
          learnings: [
            "How to implement real-time canvas drawing with touch and mouse events",
            "Image preprocessing techniques for machine learning model input",
          ],
          screenshots: [
            "https://raw.githubusercontent.com/ZaidlKhan/greek_alphabet_recognition/main/demo.gif",
            "https://raw.githubusercontent.com/ZaidlKhan/greek_alphabet_recognition/main/demo1.gif"
          ]
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
    fileUrl: ''// Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'Java',
    'TypeScript',
    'Spring',
    'C/C++',
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
      description: 'Developed and maintained Angular front-end components and Java Spring back-end services for the Global License Compliance Platform (GLCP), streamlining compliance workflows for 500+ analysts worldwide. Designed and delivered scalable full-stack features across storage, REST APIs, and UI with a focus on security, performance, and user experience.',
      position: 'Full-Stack Software Developer Intern - SAP',
      from: 'Sept 2025',
      to: 'Present',
      companyLink: '',
      companyLogo: "https://images.seeklogo.com/logo-png/46/2/sap-logo-png_seeklogo-465583.png",
      technologies: ['Angular', 'Java', 'Groovy', 'Spring Framework', 'TypeScript', 'REST APIs', 'SQL'],
      learnings: [
        'How to design efficient, modular front-end components in Angular that integrate cleanly with Java Spring services.',
        'How internal tools and CI/CD pipelines are managed in large organizations to support continuous deployment.',
        'Collaborating with global teams across different time zones'
      ],
      improvements: []
    },
    {
      company: 'Designed and implemented a scalable, serverless simulation platform using several AWS services, React, and the Spring Framework, that significantly reduced test time, enabled asynchronous model evaluation, and enhanced user experience with real-time tracking and automated notifications.',
      position: 'Software Developement Engineer Intern - Amazon',
      from: 'May 2025',
      to: 'July 2025',
      companyLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2UK5vSjqngN6SDUoKvRUR1kFmWtdyguxh6b6mg6mgluQx_EM9RJ6RzwFDs_kljVG9F04&usqp=CAU",
      companyLink: '',
      technologies: ['React', 'Java', 'Spring Framework', 'TypeScript', 'REST APIs', 'AWS', 'AWS State Machines', 'AWS SNS Function'],
      learnings: [
        "Agile practices, such as daily stand-ups and sprint planning, were critical for effective collaboration.",
        "The value of observability, metrics and logs were as critical as functionality.",
        "How to communicate design tradeoffs effectively within fast-paced engineering teams.",
      ],
      improvements: [
        "Focus earlier on unit test coverage to streamline later validation.",
        "Document assumptions and data flows earlier to accelerate review cycles."
      ]
    },
    {
      company: 'Led cross-functional collaboration with 10+ stakeholders to develop a data-driven care pathway model, utilizing Python, Power BI, and Azure SQL to integrate and analyze healthcare data. Synthesized insights from 30+ research papers and policies to ensure compliance and inform actionable recommendations.',
      position: 'Data Analyst - Health of the Vulnerable',
      from: 'September 2024',
      to: 'May 2025',
      companyLink: '',
      companyLogo: "https://i.postimg.cc/gJK53Wcn/HOV-logo.png",
      technologies: ['Python', 'Power BI', 'Power BI', 'Azure SQL'],
      learnings: [
        'How to synthesize complex public health data into actionable insights.',
        'The importance of clear stakeholder communication when defining research scope.',
        'How data visualization drives understanding and decision-making among non-technical teams.',
      ],
      improvements: [
        'Incorporate interactive dashboards for more dynamic data exploration.',
        'Allocate more time for validating assumptions behind the care pathway model.'
      ]
    },
    {
      company: 'Engineered a data automation pipeline using Python to extract real-time network usage data from the Starlink API across 60+ Nunavut locations. Optimized data transformation and storage with Azure Data Factory and reduced costs by leveraging Azure Blob Storage over SQL databases. Configured MySQL with optimized schemas for fast queries and large-scale data handling. Developed interactive Power BI dashboards that provided actionable insights for strategic business decisions.',
      position: 'Data Engineering Intern - Qiniq',
      from: 'April 2024',
      to: 'August 2024',
      companyLink: '',
      companyLogo: "https://qview.ssicanada.com/channels/Qiniq/.custom/img/logo.png?v=2",
      technologies: ['Python', 'Power BI', 'Azure Data Factory', 'Azure Blob Storage', 'MySQL', 'Terraform'],
      learnings: [
        'How to design and deploy end-to-end data pipelines in production using Azure.',
        "How infrastructure decisions (like storage choices) directly impact cost and performance."
      ],
      improvements: [
        "Introduce more detailed logging and data validation layers from the start.",
        "Test alternative ETL architectures (e.g., streaming vs batch) earlier in development."
      ]
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
