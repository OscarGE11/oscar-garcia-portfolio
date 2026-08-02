export type Locale = 'es' | 'en';

export const translations = {
  es: {
    meta: {
      title: 'Óscar García - Full-Stack Developer',
      description:
        'Portfolio de Óscar García, desarrollador full-stack con foco en TypeScript, Next.js y React. Experiencia en Angular y Java.',
    },
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      projects: 'Proyectos',
      contact: 'Contacto',
      switchTo: 'EN',
    },
    hero: {
      title: 'Full-Stack Developer',
      description:
        'Especializado en TypeScript (Next.js, React), con experiencia en Angular y Java. Desarrollo aplicaciones completas en sectores Fintech y Logística.',
      contactMe: 'Contáctame',
      viewProjects: 'Ver proyectos',
    },
    about: {
      title: 'Sobre mí',
      paragraph1:
        'Desarrollador full-stack con experiencia en sectores Fintech y Logística. TypeScript es mi stack principal, con una base sólida en Angular y Java que sigo aplicando según el proyecto.',
      paragraph2:
        'Me gusta escribir código mantenible, aprender en cada proyecto y usar herramientas de IA (Cursor, Claude Code) para ser más productivo. Busco entender el porqué de cada decisión técnica antes de implementarla.',
      highlights: [
        {
          title: 'TypeScript como foco',
          description:
            'Trabajo principalmente con Next.js y React, apoyándome en Angular y Java',
        },
        {
          title: 'Desarrollo full-stack',
          description:
            'Experiencia construyendo aplicaciones completas, de frontend a backend',
        },
        {
          title: 'Aprendizaje continuo',
          description:
            'Siempre explorando nuevas tecnologías y buenas prácticas',
        },
      ],
    },
    experience: {
      title: 'Experiencia laboral',
      current: 'Actual',
      items: [
        {
          company: 'gibobs allbanks',
          position: 'Frontend Engineer',
          period: 'Enero 2026 - Actual',
          description: [
            'Migración de variables de entorno y estilos de build-time a run-time, optimizando el pipeline CI/CD en Vercel para un entorno SaaS dinámico',
            'Integración de desarrollo asistido por IA (Claude) para acelerar la entrega de features y refactorizaciones',
            'Refactorización de componentes críticos bajo principios de Clean Code para mejorar la mantenibilidad',
            'Colaboración con equipos de producto para traducir lógica financiera e hipotecaria en interfaces eficientes',
          ],
          technologies: ['TypeScript', 'Next.js', 'React', 'Vercel', 'AntD'],
        },
        {
          company: 'GAHN Logística y Gestión',
          position: 'Desarrollador Full Stack',
          period: 'Noviembre 2024 - Enero 2026',
          description: [
            'Desarrollo del core del sistema logístico con Java, Spring Boot e Hibernate, trabajando con bases de datos relacionales (SQL)',
            'Creación y mantenimiento de la interfaz web para la gestión logística con Angular y JavaScript',
          ],
          technologies: ['Angular', 'Java', 'Spring Boot', 'Hibernate', 'SQL'],
        },
        {
          company: 'Softtek',
          position: 'Desarrollador Full Stack (Prácticas)',
          period: 'Abril 2024 - Junio 2024',
          description: [
            'Desarrollo integral de aplicación web con Angular 17 en el frontend y Java Spring Boot con PostgreSQL en el backend',
            'Trabajo en equipo multidisciplinar en un proyecto full-stack completo',
          ],
          technologies: ['Angular 17', 'Java', 'Spring Boot', 'PostgreSQL'],
        },
      ],
    },
    skills: {
      title: 'Stack técnico',
      categories: [
        {
          title: 'Frontend',
          skills: [
            'TypeScript',
            'Next.js',
            'React',
            'Angular 17',
            'HTML5/CSS3',
            'Tailwind',
          ],
        },
        {
          title: 'Backend & DB',
          skills: [
            'Node.js',
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'SQL',
            'MongoDB',
          ],
        },
        {
          title: 'IA & Workflow',
          skills: ['Claude Code', 'Cursor', 'Git', 'Vercel'],
        },
        {
          title: 'Arquitectura',
          skills: ['Clean Code', 'Clean Architecture', 'SaaS'],
        },
      ],
    },
    projects: {
      title: 'Proyectos destacados',
      viewProject: 'Ver proyecto',
      items: [
        {
          title: 'Cerbero',
          description:
            'Tracker personal de gastos e ingresos con bot de Telegram y dashboard web. Registra movimientos desde el chat, visualiza categorías y consulta tu historial desde una interfaz Next.js conectada a Supabase.',
        },
        {
          title: 'Vera Croma',
          description:
            'Generador de paletas de colores construido con Angular. Interfaz intuitiva para crear y explorar combinaciones de colores con vista previa en tiempo real.',
        },
      ],
    },
    education: {
      title: 'Formación',
      officialEducation: 'Formación oficial',
      languages: 'Idiomas',
      courses: 'Cursos y certificaciones',
      educationItems: [
        {
          title: 'Técnico Superior en Desarrollo de Aplicaciones Web (DAW)',
          institution: 'IES Arquitecto Ventura Rodríguez',
          period: '2022 - 2024',
        },
      ],
      certifications: [
        { title: 'B2 First Certificate', platform: 'Cambridge English' },
        {
          title: 'JavaScript: Web API, Componentes y Testing',
          platform: 'Curso de especialización',
        },
        {
          title: 'Dominando Vue: Fundamentos a gestión de estado global',
          platform: 'Curso de especialización',
        },
      ],
      languagesList: [
        { language: 'Español', level: 'Nativo' },
        { language: 'Inglés', level: 'B2 - Cambridge' },
      ],
    },
    contact: {
      title: 'Contacto',
      letsTalk: 'Hablemos',
      intro:
        'Estoy disponible para nuevas oportunidades como desarrollador full-stack. Comprometido con escribir código claro, seguir aprendiendo y aportar valor al equipo.',
      availability: 'Disponibilidad',
      contactInfo: 'Información de contacto',
      labels: {
        email: 'Email',
        phone: 'Teléfono',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      availabilityItems: [
        'Móstoles, Madrid',
        'Carnet de conducir y vehículo propio',
        'Disponible para trabajo híbrido o remoto',
      ],
      copyright: '© 2026 Óscar García',
    },
  },
  en: {
    meta: {
      title: 'Óscar García - Full-Stack Developer',
      description:
        'Portfolio of Óscar García, full-stack developer focused on TypeScript, Next.js and React. Experience with Angular and Java.',
    },
    nav: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      switchTo: 'ES',
    },
    hero: {
      title: 'Full-Stack Developer',
      description:
        'Specialized in TypeScript (Next.js, React), with experience in Angular and Java. Building complete applications in Fintech and Logistics.',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'Full-stack developer with experience in Fintech and Logistics. TypeScript is my main stack, with a solid foundation in Angular and Java that I still apply depending on the project.',
      paragraph2:
        'I enjoy writing maintainable code, learning from every project, and using AI tools (Cursor, Claude Code) to be more productive. I aim to understand the why behind each technical decision before implementing it.',
      highlights: [
        {
          title: 'TypeScript focus',
          description:
            'Working mainly with Next.js and React, backed by Angular and Java',
        },
        {
          title: 'Full-stack development',
          description:
            'Experience building complete applications, from frontend to backend',
        },
        {
          title: 'Continuous learning',
          description: 'Always exploring new technologies and best practices',
        },
      ],
    },
    experience: {
      title: 'Work Experience',
      current: 'Current',
      items: [
        {
          company: 'gibobs allbanks',
          position: 'Frontend Engineer',
          period: 'January 2026 - Present',
          description: [
            'Migrated build-time environment variables and styles to run-time, optimizing the Vercel CI/CD pipeline for a dynamic SaaS environment',
            'Integrated AI-assisted development (Cursor/Claude) to accelerate feature delivery and refactors',
            'Refactored critical components under Clean Code principles to improve maintainability',
            'Collaborated with product teams to translate financial and mortgage logic into efficient interfaces',
          ],
          technologies: [
            'TypeScript',
            'Next.js',
            'React',
            'Vercel',
            'Tailwind',
          ],
        },
        {
          company: 'GAHN Logística y Gestión',
          position: 'Full Stack Developer',
          period: 'November 2024 - January 2026',
          description: [
            'Developed the core of the logistics system with Java, Spring Boot and Hibernate, working with relational databases (SQL)',
            'Built and maintained the web interface for logistics management with Angular and JavaScript',
          ],
          technologies: ['Angular', 'Java', 'Spring Boot', 'Hibernate', 'SQL'],
        },
        {
          company: 'Softtek',
          position: 'Full Stack Developer (Internship)',
          period: 'April 2024 - June 2024',
          description: [
            'End-to-end web application development with Angular 17 on the frontend and Java Spring Boot with PostgreSQL on the backend',
            'Worked in a multidisciplinary team on a complete full-stack project',
          ],
          technologies: ['Angular 17', 'Java', 'Spring Boot', 'PostgreSQL'],
        },
      ],
    },
    skills: {
      title: 'Tech Stack',
      categories: [
        {
          title: 'Frontend',
          skills: [
            'TypeScript',
            'Next.js',
            'React',
            'Angular 17',
            'HTML5/CSS3',
            'Tailwind',
          ],
        },
        {
          title: 'Backend & DB',
          skills: [
            'Node.js',
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'SQL',
            'MongoDB',
          ],
        },
        {
          title: 'AI & Workflow',
          skills: ['Claude Code', 'Cursor', 'Git', 'Vercel CI/CD'],
        },
        {
          title: 'Architecture',
          skills: [
            'Clean Code',
            'Clean Architecture',
            'Micro-frontends',
            'SaaS',
          ],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'Vera Croma',
          description:
            'A color palette generator tool built with Angular. Features an intuitive interface for creating and exploring color combinations with real-time preview.',
        },
        {
          title: 'Cerbero',
          description:
            'Personal expense and income tracker with a Telegram bot and web dashboard. Log transactions from chat, browse categories, and review your history through a Next.js interface backed by Supabase.',
        },
      ],
    },
    education: {
      title: 'Education',
      officialEducation: 'Official Education',
      languages: 'Languages',
      courses: 'Courses & Certifications',
      educationItems: [
        {
          title: 'Higher Technician in Web Application Development',
          institution: 'IES Arquitecto Ventura Rodríguez',
          period: '2022 - 2024',
        },
      ],
      certifications: [
        { title: 'B2 First Certificate', platform: 'Cambridge English' },
        {
          title: 'JavaScript: Web API, Components and Testing',
          platform: 'Specialization Course',
        },
        {
          title: 'Dominando Vue: Fundamentals to Global State Management',
          platform: 'Specialization Course',
        },
      ],
      languagesList: [
        { language: 'Spanish', level: 'Native' },
        { language: 'English', level: 'B2 - Cambridge' },
      ],
    },
    contact: {
      title: 'Contact',
      letsTalk: "Let's Talk",
      intro:
        "I'm available for new opportunities as a full-stack developer. Committed to writing clear code, continuous learning, and contributing value to the team.",
      availability: 'Availability',
      contactInfo: 'Contact Information',
      labels: {
        email: 'Email',
        phone: 'Phone',
        linkedin: 'LinkedIn',
        github: 'GitHub',
      },
      availabilityItems: [
        'Móstoles, Madrid',
        "Driver's license and own vehicle",
        'Available for hybrid or remote work',
      ],
      copyright: '© 2026 Óscar García',
    },
  },
} as const;

export type Translations = (typeof translations)['es'];
