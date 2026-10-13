export type Locale = 'es' | 'en';

export const translations = {
  es: {
    meta: {
      title: 'Óscar García - Full-Stack Developer',
      description:
        'Portfolio de Óscar García, desarrollador full-stack con experiencia en Fintech. TypeScript de punta a punta y Python (FastAPI) en proyectos propios.',
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
        'Desarrollador full-stack con experiencia en Fintech. Trabajo con TypeScript de punta a punta y uso Python (FastAPI) para el backend en mis proyectos propios.',
      contactMe: 'Contáctame',
      viewProjects: 'Ver proyectos',
    },
    about: {
      title: 'Sobre mí',
      paragraph1:
        'Organicé la migración de un sistema a arquitectura multitenant, reduciendo los tiempos de despliegue y agilizando el alta de nuevos tenants.',
      paragraph2:
        'Me interesa que las aplicaciones escalen y que el equipo pueda trabajar con ellas sin fricción, como en la migración multitenant.',
      highlights: [
        {
          title: 'TypeScript de punta a punta',
          description:
            'Frontend con TypeScript; backend con Python y FastAPI en proyectos propios',
        },
        {
          title: 'Arquitectura multitenant',
          description:
            'Migración de build-time a run-time para escalar y dar de alta nuevos clientes con menos fricción',
        },
        {
          title: 'Código mantenible',
          description:
            'Clean Code y decisiones técnicas pensadas para el equipo a largo plazo',
        },
      ],
    },
    experience: {
      title: 'Experiencia laboral',
      current: 'Actual',
      items: [
        {
          company: 'gibobs allbanks',
          position: 'Desarrollador Full-Stack',
          period: 'Enero 2026 - Actual',
          description: [
            'Desarrollo y optimización de la plataforma frontend para el sector financiero e hipotecario',
            'Migración de variables de entorno y estilos de build-time a run-time: despliegues sin recompilación y un entorno en Vercel más escalable para el SaaS',
            'Diseño y refactor de la arquitectura frontend priorizando la mantenibilidad',
            'Colaboración con producto para traducir requisitos complejos en soluciones técnicas, integrando servicios backend',
          ],
          technologies: ['TypeScript', 'Next.js', 'React', 'Vercel'],
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
            'Python',
            'FastAPI',
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'SQL',
          ],
        },
        {
          title: 'Workflow',
          skills: ['Git', 'Vercel'],
        },
        {
          title: 'Arquitectura',
          skills: ['Clean Code', 'Clean Architecture', 'SaaS', 'Multitenant'],
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
        'Si quieres hablar de desarrollo, arquitectura o de alguno de mis proyectos, escríbeme.',
      availability: 'Ubicación',
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
      ],
      copyright: '© 2026 Óscar García',
    },
  },
  en: {
    meta: {
      title: 'Óscar García - Full-Stack Developer',
      description:
        'Portfolio of Óscar García, full-stack developer with Fintech experience. TypeScript end to end and Python (FastAPI) on personal projects.',
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
        'Full-stack developer with Fintech experience. I work with TypeScript end to end and use Python (FastAPI) for the backend on my personal projects.',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'I led the migration of a system to a multitenant architecture, reducing deployment times and speeding up the onboarding of new tenants.',
      paragraph2:
        'I care about applications that scale and about teams that can work on them without friction, as in the multitenant migration.',
      highlights: [
        {
          title: 'TypeScript end to end',
          description:
            'TypeScript on the frontend; Python and FastAPI on the backend in personal projects',
        },
        {
          title: 'Multitenant architecture',
          description:
            'Build-time to run-time migration to scale and onboard new clients with less friction',
        },
        {
          title: 'Maintainable code',
          description:
            'Clean Code and technical decisions made with the long-term team in mind',
        },
      ],
    },
    experience: {
      title: 'Work Experience',
      current: 'Current',
      items: [
        {
          company: 'gibobs allbanks',
          position: 'Full-Stack Developer',
          period: 'January 2026 - Present',
          description: [
            'Development and optimization of the frontend platform for the financial and mortgage sector',
            'Migrated environment variables and styles from build-time to run-time: deployments without rebuilds and a more scalable Vercel setup for the SaaS',
            'Designed and refactored the frontend architecture with maintainability as the priority',
            'Worked with product to turn complex requirements into technical solutions, integrating backend services',
          ],
          technologies: ['TypeScript', 'Next.js', 'React', 'Vercel'],
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
            'Python',
            'FastAPI',
            'Java',
            'Spring Boot',
            'PostgreSQL',
            'SQL',
          ],
        },
        {
          title: 'Workflow',
          skills: ['Git', 'Vercel'],
        },
        {
          title: 'Architecture',
          skills: ['Clean Code', 'Clean Architecture', 'SaaS', 'Multitenant'],
        },
      ],
    },
    projects: {
      title: 'Featured Projects',
      viewProject: 'View Project',
      items: [
        {
          title: 'Cerbero',
          description:
            'Personal expense and income tracker with a Telegram bot and web dashboard. Log transactions from chat, browse categories, and review your history through a Next.js interface backed by Supabase.',
        },
        {
          title: 'Vera Croma',
          description:
            'A color palette generator tool built with Angular. Features an intuitive interface for creating and exploring color combinations with real-time preview.',
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
        'If you want to talk about development, architecture or any of my projects, get in touch.',
      availability: 'Location',
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
      ],
      copyright: '© 2026 Óscar García',
    },
  },
} as const;

export type Translations = (typeof translations)['es'];
