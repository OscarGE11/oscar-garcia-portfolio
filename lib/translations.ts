export type Locale = 'es' | 'en';

export const translations = {
  es: {
    meta: {
      title: 'Óscar García - Full-Stack Developer',
      description:
        'Portfolio de Óscar García, desarrollador full-stack: TypeScript (Next.js, React), NestJS y TypeORM en SaaS Fintech. Proyectos personales con FastAPI y Python. Experiencia en Angular y Java.',
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
        'Desarrollador full-stack: frontend con TypeScript (Next.js, React) y backend con NestJS y TypeORM en SaaS Fintech. En proyectos personales también uso FastAPI con Python. Experiencia previa en Angular y Java.',
      contactMe: 'Contáctame',
      viewProjects: 'Ver proyectos',
    },
    about: {
      title: 'Sobre mí',
      paragraph1:
        'Desarrollador full-stack con experiencia en Fintech y Logística. El último año he estado más centrado en frontend, pero también desarrollo APIs con NestJS según producto va definiendo las funcionalidades.',
      paragraph2:
        'En proyectos personales uso FastAPI con Python en el backend. Me gusta escribir código mantenible, aprender en cada proyecto y usar herramientas de IA (Cursor, Claude Code) para ser más productivo.',
      highlights: [
        {
          title: 'Stack full-stack',
          description:
            'Next.js y React en frontend; NestJS y TypeORM en backend de producto',
        },
        {
          title: 'Desarrollo full-stack',
          description:
            'Refactor y arquitectura SaaS para escalar y dar de alta nuevos clientes con menos fricción',
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
          position: 'Desarrollador Full-Stack',
          period: 'Enero 2026 - Actual',
          description: [
            'Refactor del frontend del SaaS para hacerlo más escalable y dar de alta nuevos clientes con menos fricción',
            'Desarrollo de endpoints en NestJS según producto explica los requisitos de cada funcionalidad, con TypeORM',
            'Migración de variables de entorno y estilos de build-time a run-time, optimizando el pipeline CI/CD en Vercel',
            'Integración de desarrollo asistido por IA (Claude) para acelerar la entrega de features y refactorizaciones',
            'Colaboración con producto para traducir lógica financiera e hipotecaria en interfaces y APIs eficientes',
          ],
          technologies: ['TypeScript', 'Next.js', 'React', 'NestJS', 'TypeORM', 'Vercel'],
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
            'NestJS',
            'TypeORM',
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
        'Portfolio of Óscar García, full-stack developer: TypeScript (Next.js, React), NestJS and TypeORM in Fintech SaaS. Personal projects with FastAPI and Python. Experience with Angular and Java.',
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
        'Full-stack developer: TypeScript frontend (Next.js, React) and NestJS backend with TypeORM in Fintech SaaS. I also use FastAPI with Python on personal projects. Previous experience with Angular and Java.',
      contactMe: 'Contact Me',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      paragraph1:
        'Full-stack developer with experience in Fintech and Logistics. Over the last year I have been more frontend-focused, but I also build APIs with NestJS as product defines requirements for new features.',
      paragraph2:
        'On personal projects I use FastAPI with Python on the backend. I enjoy writing maintainable code, learning from every project, and using AI tools (Cursor, Claude Code) to stay productive.',
      highlights: [
        {
          title: 'Full-stack stack',
          description:
            'Next.js and React on the frontend; NestJS and TypeORM on product backend',
        },
        {
          title: 'Full-stack development',
          description:
            'SaaS refactors and architecture to scale and onboard new clients more easily',
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
          position: 'Full-Stack Developer',
          period: 'January 2026 - Present',
          description: [
            'Refactored the SaaS frontend to scale better and onboard new clients with less friction',
            'Built NestJS endpoints as product explained requirements for each feature, using TypeORM',
            'Migrated build-time environment variables and styles to run-time, optimizing the Vercel CI/CD pipeline',
            'Integrated AI-assisted development (Cursor/Claude) to accelerate feature delivery and refactors',
            'Worked with product to translate financial and mortgage logic into efficient interfaces and APIs',
          ],
          technologies: ['TypeScript', 'Next.js', 'React', 'NestJS', 'TypeORM', 'Vercel'],
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
            'NestJS',
            'TypeORM',
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
          title: 'AI & Workflow',
          skills: ['Claude Code', 'Cursor', 'Git', 'Vercel'],
        },
        {
          title: 'Architecture',
          skills: ['Clean Code', 'Clean Architecture', 'SaaS'],
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
