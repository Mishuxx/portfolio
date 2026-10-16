export type Language = "en" | "es";

export interface NodeDetail {
  title: string;
  category: string;
  badge: string;
  desc: string;
}

export interface SkillNode {
  id: string;
  name: string;
  status: string;
  xp: string;
  category: string;
  psychologicalHook: string;
  vocationalImpact: string;
  branch: string;
}

export interface ExperienceRole {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  category: "product" | "recruitment";
  badge: string;
  badgeColor: string;
  featured?: boolean;
  achievements: string[];
  skills: string[];
}

export interface Translations {
  nav: {
    recruiting: string;
    skillea: string;
    psychology: string;
    experience: string;
    contact: string;
    cv: string;
    statusPill: string;
    connectIntro: string;
  };
  hero: {
    tagline: string;
    headlineStart: string;
    headlineGradient: string;
    subheadline: string;
    tryDemoBtn: string;
    demoUrl: string; // [PLACEHOLDER: demo URL]
    recruitingBtn: string;
    downloadCvBtn: string;
    photoToggleHorse: string;
    photoToggleCat: string;
    photoCaption: string;
  };
  highlights: {
    item1Value: string;
    item1Label: string;
    item2Value: string;
    item2Label: string;
    item3Value: string;
    item3Label: string;
    item4Value: string;
    item4Label: string;
  };
  nodeGraph: {
    title: string;
    subtitle: string;
    status: string;
    clickPrompt: string;
    nodes: {
      recruiting: NodeDetail;
      psychology: NodeDetail;
      skillea: NodeDetail;
      productCode: NodeDetail;
    };
  };
  recruiting: {
    eyebrow: string;
    headline: string;
    body: string;
    card1Title: string;
    card1Badge: string;
    card1Body: string;
    card2Title: string;
    card2Badge: string;
    card2Body: string;
    card3Title: string;
    card3Badge: string;
    card3Body: string;
    exampleCaseTitle: string;
    exampleCaseBody: string;
  };
  psychology: {
    eyebrow: string;
    headline: string;
    badge: string;
    body: string;
    quote: string;
    quoteAuthor: string;
  };
  skillea: {
    eyebrow: string;
    headline: string;
    statusPrototype: string;
    statusRole: string;
    tryDemoBtn: string;
    demoUrl: string;
    body1: string;
    body2: string;
    whatIBringTitle: string;
    whatIBringItem1: string;
    whatIBringItem2: string;
    illustrativeExampleLabel: string;
    nodeDetailsTitle: string;
    mockLearnerTier: string;
    nodes: SkillNode[];
    strategyCardTitle: string;
    strategyCardBody: string;
    strategyItem1Title: string;
    strategyItem1Desc: string;
    strategyItem2Title: string;
    strategyItem2Desc: string;
    strategyItem3Title: string;
    strategyItem3Desc: string;
    uxCardTitle: string;
    uxCardBody: string;
    uxItem1Title: string;
    uxItem1Desc: string;
    uxItem2Title: string;
    uxItem2Desc: string;
    uxItem3Title: string;
    uxItem3Desc: string;
  };
  experience: {
    headline: string;
    subheadline: string;
    filterAll: string;
    filterProduct: string;
    filterRecruiting: string;
    competenciesLabel: string;
    roles: ExperienceRole[];
  };
  skills: {
    headline: string;
    subheadline: string;
    col1Title: string;
    col1Subtitle: string;
    col1Skills: string[];
    col2Title: string;
    col2Subtitle: string;
    col2Skills: string[];
    col3Title: string;
    col3Subtitle: string;
    col3Skills: string[];
    col4Title: string;
    col4Subtitle: string;
    col4Skills: string[];
  };
  beyondWork: {
    eyebrow: string;
    headline: string;
    body: string;
    photoCaption: string;
  };
  contact: {
    eyebrow: string;
    headline: string;
    body: string;
    emailBtn: string;
    copyBtn: string;
    copiedBtn: string;
    downloadCvBtn: string;
    footerNote: string;
    allRightsReserved: string;
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      recruiting: "Recruiting",
      skillea: "Skillea",
      psychology: "Psychology",
      experience: "Experience",
      contact: "Contact",
      cv: "CV",
      statusPill: "Open to roles, advisory & collaboration",
      connectIntro: "Connect / Intro",
    },
    hero: {
      tagline: "Tech Recruiter • Psychologist (UCV) • Co-Founder @ Skillea",
      headlineStart: "Understanding people to build better teams and ",
      headlineGradient: "better products.",
      subheadline:
        "5+ years recruiting tech talent from Latin America for Canadian and US companies. Background in psychology. Now building Skillea, a gamified career-learning platform, as co-founder.",
      tryDemoBtn: "Try the Skillea demo",
      demoUrl: "[PLACEHOLDER: demo URL]",
      recruitingBtn: "Recruiting work",
      downloadCvBtn: "Download CV",
      photoToggleHorse: "🐴 Outdoors",
      photoToggleCat: "🐱 Cat / Workspace",
      photoCaption: "Ricardo (Rick) Pulgar Mendoza",
    },
    highlights: {
      item1Value: "5+ years",
      item1Label: "Tech recruiting since 2021",
      item2Value: "Director-level",
      item2Label: "Most senior placement",
      item3Value: "70+ placements",
      item3Label: "Bold Business, 2022–2024",
      item4Value: "Working prototype",
      item4Label: "Skillea, built with AI agents",
    },
    nodeGraph: {
      title: "SKILLS & DOMAIN MAP",
      subtitle: "// Practical domains & current focus",
      status: "Active focus",
      clickPrompt: "Click nodes to view detail",
      nodes: {
        recruiting: {
          title: "Technical Talent Recruiting",
          category: "talent",
          badge: "5+ Years Core Work",
          desc: "Full-cycle IT recruiting for Canadian and US clients. Sourcing, technical calibration, and close manager alignment.",
        },
        psychology: {
          title: "Psychology",
          category: "psychology",
          badge: "Psychologist (UCV)",
          desc: "Observing behavioral cues, evaluating pressure handling, and applying learning psychology to product pacing.",
        },
        skillea: {
          title: "Skillea Progress Tree",
          category: "product",
          badge: "Working Prototype",
          desc: "Gamified career-learning architecture mapping developer competencies into RPG-style branching milestones.",
        },
        productCode: {
          title: "Product & Code",
          category: "product",
          badge: "Building with AI agents",
          desc: "Rapid prototyping, wireframing, and building interactive web software using modern AI coding workflows.",
        },
      },
    },
    recruiting: {
      eyebrow: "RECRUITING",
      headline: "Specialized searches, not volume hiring.",
      body: "I run role-by-role searches for Canadian and US clients: DevOps engineers, cloud and data architects, full-stack developers, and marketing roles. The work is getting the brief right with the hiring manager, finding people who actually match it, and making sure what a candidate says holds up.",
      card1Title: "Technical screening",
      card1Badge: "Technical Depth",
      card1Body:
        "Strong understanding of the software development lifecycle and of algorithms and data structures, which lets me go beyond keyword matching: following technical conversations, understanding how a candidate's work fits from planning to deployment, and judging problem-solving rather than memorized answers. Real experience is checked against the role's stack (Azure, AWS, data platforms, full-stack), with close alignment with hiring managers on what \"senior\" means for their team.",
      card2Title: "Behavioral interviewing",
      card2Badge: "Psychology-Informed",
      card2Body:
        "Structured interviews informed by psychology. Checking consistency between the CV, the claims and the examples, and understanding how candidates handle pressure and setbacks.",
      card3Title: "Process & automation",
      card3Badge: "JobAdder & Lever",
      card3Body:
        "Day-to-day work in JobAdder and Lever. Built recruiting automations in Make.",
      exampleCaseTitle: "Example Case",
      exampleCaseBody:
        "An Azure infrastructure role with a client-facing component, which needed both deep technical skills and the communication to work directly with the client. [PLACEHOLDER: one-line outcome]",
    },
    psychology: {
      eyebrow: "PSYCHOLOGY",
      headline: "A psychology background, applied.",
      badge: "Lic. en Psicología • UCV",
      body: "I studied psychology at Universidad Central de Venezuela. I didn't build a long clinical career, but I use its tools every day: listening for what's said and what isn't, noticing when a story doesn't add up, and understanding how people cope under pressure. In recruiting, that means interviews that get past rehearsed answers. In product, it means designing learning around how people actually stay motivated, from Piaget's view of building knowledge in stages to Skinner's work on reinforcement, used with care.",
      quote:
        "\"Tools follow instructions. People act on motivation, habit and fear. Good teams and good products take both seriously.\"",
      quoteAuthor: "— Ricardo (Rick) Pulgar Mendoza",
    },
    skillea: {
      eyebrow: "SKILLEA",
      headline: "Skillea: The Progress Tree",
      statusPrototype: "Working prototype",
      statusRole:
        "Role: [PLACEHOLDER: title, suggested Co-Founder, Product & Technology]",
      tryDemoBtn: "Try the demo →",
      demoUrl: "[PLACEHOLDER: demo URL]",
      body1:
        "Skillea turns tech career paths into an RPG-style skill tree. Instead of long course playlists, learners see branches, milestones, and what each skill unlocks for the jobs they want. I designed the product structure and the gamification system, and I build the prototype myself with AI coding agents.",
      body2:
        "The idea comes from years of playing RPGs: skill trees make progress visible and give every hour of effort a clear payoff. Skillea brings that to learning tech careers.",
      whatIBringTitle: "What I bring",
      whatIBringItem1:
        "A recruiter's view of what hiring managers actually look for.",
      whatIBringItem2:
        "A psychologist's view of motivation and pacing.",
      illustrativeExampleLabel: "Illustrative example",
      nodeDetailsTitle: "Node details",
      mockLearnerTier: "Learner Tier: Lvl 14 Full-Stack",
      nodes: [
        {
          id: "node-1",
          name: "Cognitive Load Mapping",
          status: "Mastered",
          xp: "+650 XP",
          category: "Psychology & UX",
          psychologicalHook: "Miller's Law (7±2 chunks) & Cognitive Ergonomics",
          vocationalImpact: "Structured mental models that reduce learner hesitation.",
          branch: "Foundations",
        },
        {
          id: "node-2",
          name: "Gamified Loop Architecture",
          status: "Mastered",
          xp: "+920 XP",
          category: "Product Design",
          psychologicalHook: "Clear reward pacing & intrinsic motivation",
          vocationalImpact: "Maintains learner momentum through visible milestones.",
          branch: "Foundations",
        },
        {
          id: "node-3",
          name: "Adaptive Branching Engine",
          status: "In Progress",
          xp: "+1,200 XP",
          category: "Curriculum Routing",
          psychologicalHook: "Vygotsky's Zone of Proximal Development",
          vocationalImpact: "Adjusts difficulty to the learner's level (planned)",
          branch: "Architecture",
        },
        {
          id: "node-4",
          name: "Real Job Requirement Alignment",
          status: "Unlocked",
          xp: "+1,500 XP",
          category: "Recruiter Insights",
          psychologicalHook: "Goal gradient effect & practical relevance",
          vocationalImpact: "Milestone reveals tied to real skill progress",
          branch: "Job Readiness",
        },
        {
          id: "node-5",
          name: "Demonstrated Competency Showcase",
          status: "In Progress",
          xp: "+2,000 XP",
          category: "Credentialing",
          psychologicalHook: "Competence validation & clear proof of work",
          vocationalImpact: "Demonstrable skill evidence for real hiring manager interviews.",
          branch: "Outcomes",
        },
      ],
      strategyCardTitle: "Product Strategy & Learning Design",
      strategyCardBody:
        "Connecting candidate motivation with practical technical skills. Translating complex software roles into tangible, achievable checkpoints.",
      strategyItem1Title: "01 // Skill Tree Progression",
      strategyItem1Desc: "Visualizing progress as a branch map instead of static video playlists.",
      strategyItem2Title: "02 // Cognitive Engagement",
      strategyItem2Desc: "Pacing modules to avoid overwhelm and sustain focus.",
      strategyItem3Title: "03 // Market Relevance",
      strategyItem3Desc: "Aligning learning criteria with what hiring teams look for in real searches.",
      uxCardTitle: "UX Narrative & Motivation",
      uxCardBody:
        "Designing learning experiences grounded in human psychological principles:",
      uxItem1Title: "Autonomy & Choice",
      uxItem1Desc: "Non-linear paths so learners choose their specialization with clarity.",
      uxItem2Title: "Cognitive Load Regulation",
      uxItem2Desc: "Progressive disclosure to present one conceptual leap at a time.",
      uxItem3Title: "Milestone Feedback",
      uxItem3Desc: "Milestone reveals tied to real skill progress.",
    },
    experience: {
      headline: "Experience",
      subheadline: "From psychology to tech recruiting to building a product.",
      filterAll: "All",
      filterProduct: "Product & Founder",
      filterRecruiting: "Recruiting",
      competenciesLabel: "Competencies:",
      roles: [
        {
          id: "skillea",
          role: "Co-Founder, [PLACEHOLDER: title]",
          company: "Skillea",
          period: "Dec 2025–Present",
          location: "Remote",
          category: "product",
          badge: "Product & Founder",
          badgeColor: "#8B5CF6",
          featured: true,
          achievements: [
            "Designed the product structure and the gamified progression system.",
            "Building the working prototype with AI coding agents.",
          ],
          skills: [
            "Product design",
            "Gamification",
            "UX flows",
            "AI-assisted development",
          ],
        },
        {
          id: "devengine",
          role: "Senior Technical Recruiter",
          company: "DevEngine",
          period: "Nov 2025–Present; May 2024–Oct 2024",
          location: "Vancouver, Canada (Remote)",
          category: "recruitment",
          badge: "Technical Recruiting",
          badgeColor: "#06B6D4",
          featured: true,
          achievements: [
            "Specialized searches for Canadian and US clients across DevOps, cloud and data architecture, full-stack and marketing.",
            "Placements up to Director level, including client-facing Azure infrastructure roles.",
          ],
          skills: [
            "Full-cycle recruiting",
            "Technical screening",
            "Client management",
            "JobAdder",
            "Lever",
          ],
        },
        {
          id: "it-bootcamp",
          role: "Lead Recruiter",
          company: "The IT Bootcamp",
          period: "Oct 2024–Oct 2025",
          location: "Remote",
          category: "recruitment",
          badge: "Process & Automation",
          badgeColor: "#10B981",
          achievements: [
            "[PLACEHOLDER: what was designed from scratch]",
            "Automated pipeline steps with Make.",
            "Full-cycle hiring.",
          ],
          skills: [
            "Process design",
            "Automation (Make)",
            "Full-cycle recruiting",
          ],
        },
        {
          id: "bold-business",
          role: "Recruiter & HR Specialist",
          company: "Bold Business",
          period: "Apr 2022–Apr 2024",
          location: "Remote",
          category: "recruitment",
          badge: "Recruitment & HR",
          badgeColor: "#3B82F6",
          achievements: [
            "70+ placements of customer support agents for US clients within an RPO model.",
            "Onboarding and HR operations.",
          ],
          skills: [
            "High-volume recruiting",
            "RPO",
            "Onboarding",
            "HR operations",
          ],
        },
        {
          id: "listopro",
          role: "Technical Sourcer",
          company: "Listopro • Fetcher • Revelo",
          period: "2021–2022",
          location: "Latin America / North America",
          category: "recruitment",
          badge: "Sourcing",
          badgeColor: "#F59E0B",
          achievements: [
            "Sourced Latin American developers for North American startups through Boolean search and passive outreach.",
          ],
          skills: ["Boolean search", "Passive outreach", "Sourcing"],
        },
        {
          id: "bioetica",
          role: "Contributor",
          company: "Bioética en la Red",
          period: "2020–[PLACEHOLDER: end year]",
          location: "Remote",
          category: "product",
          badge: "Writing & Ethics",
          badgeColor: "#EC4899",
          achievements: [
            "Articles on AI ethics, cognitive enhancement and psychology. [PLACEHOLDER: link to articles]",
          ],
          skills: ["Research", "Writing", "Ethics in AI"],
        },
      ],
    },
    skills: {
      headline: "Skills & tools",
      subheadline: "What I use day to day across recruiting, product and AI.",
      col1Title: "Recruiting",
      col1Subtitle: "Full-cycle talent acquisition & client alignment",
      col1Skills: [
        "Full-cycle technical recruiting",
        "Sourcing & Boolean search",
        "Behavioral interviewing",
        "JobAdder & Lever",
        "Pipeline reporting",
        "Candidate experience",
      ],
      col2Title: "Technical foundations",
      col2Subtitle: "Concepts used during deep candidate evaluation",
      col2Skills: [
        "Software development lifecycle",
        "Algorithms & data structures",
        "Cloud & data platforms (for screening)",
      ],
      col3Title: "Product & AI",
      col3Subtitle: "Prototyping, gamification & modern workflows",
      col3Skills: [
        "Gamification design",
        "User journeys",
        "Product scoping",
        "AI coding agents",
        "Automation with Make",
        "Ethics in AI",
      ],
      col4Title: "Collaboration",
      col4Subtitle: "Async organization & team alignment",
      col4Skills: [
        "Slack",
        "Asana & Trello",
        "Google Workspace",
        "Notion",
        "Active listening",
      ],
    },
    beyondWork: {
      eyebrow: "BEYOND WORK",
      headline: "Beyond work",
      body: "Animal lover, usually with a cat nearby or a horse when I get outdoors. Lifelong gamer, especially RPGs, which is where the idea for Skillea's skill tree came from.",
      photoCaption: "Desk companion — QA cat on duty",
    },
    contact: {
      eyebrow: "CONTACT",
      headline: "Let's talk.",
      body: "Hiring for a tech role, want a second look at your hiring process, or curious about Skillea? Write to me. Advisory covers interview design, hiring process reviews and candidate evaluation.",
      emailBtn: "Send Email",
      copyBtn: "Copy",
      copiedBtn: "Copied!",
      downloadCvBtn: "Download CV (PDF)",
      footerNote: "Remote · English & Spanish",
      allRightsReserved: "Ricardo (Rick) Pulgar Mendoza. All rights reserved.",
    },
  },
  es: {
    nav: {
      recruiting: "Reclutamiento",
      skillea: "Skillea",
      psychology: "Psicología",
      experience: "Experiencia",
      contact: "Contacto",
      cv: "CV",
      statusPill: "Disponible para roles, asesoría y colaboración",
      connectIntro: "Conectar / Contacto",
    },
    hero: {
      tagline: "Reclutador Tech • Psicólogo (UCV) • Co-Founder @ Skillea",
      headlineStart: "Entender a las personas para construir mejores equipos y ",
      headlineGradient: "mejores productos.",
      subheadline:
        "Más de 5 años reclutando talento tech de Latinoamérica para empresas de Canadá y EE. UU. Formación en psicología. Actualmente construyendo Skillea, una plataforma de aprendizaje profesional gamificada, como cofundador.",
      tryDemoBtn: "Probar la demo de Skillea",
      demoUrl: "[PLACEHOLDER: demo URL]",
      recruitingBtn: "Trabajo en reclutamiento",
      downloadCvBtn: "Descargar CV",
      photoToggleHorse: "🐴 Aire libre",
      photoToggleCat: "🐱 Gato / Escritorio",
      photoCaption: "Ricardo (Rick) Pulgar Mendoza",
    },
    highlights: {
      item1Value: "5+ años",
      item1Label: "Reclutamiento tech desde 2021",
      item2Value: "Nivel Director",
      item2Label: "Posición más senior ubicada",
      item3Value: "70+ contrataciones",
      item3Label: "Bold Business, 2022–2024",
      item4Value: "Prototipo funcional",
      item4Label: "Skillea, creado con agentes de IA",
    },
    nodeGraph: {
      title: "MAPA DE HABILIDADES Y DOMINIOS",
      subtitle: "// Áreas de práctica y enfoque actual",
      status: "Enfoque activo",
      clickPrompt: "Haz clic en los nodos para ver detalles",
      nodes: {
        recruiting: {
          title: "Reclutamiento de Talento Tech",
          category: "talent",
          badge: "5+ Años de Trabajo Central",
          desc: "Reclutamiento IT integral para clientes de Canadá y EE. UU. Sourcing, calibración técnica y alineación estrecha con hiring managers.",
        },
        psychology: {
          title: "Psicología",
          category: "psychology",
          badge: "Psicólogo (UCV)",
          desc: "Observación de señales conductuales, evaluación de manejo bajo presión y aplicación de psicología del aprendizaje al ritmo de producto.",
        },
        skillea: {
          title: "Progress Tree de Skillea",
          category: "product",
          badge: "Prototipo Funcional",
          desc: "Arquitectura de aprendizaje gamificado que organiza competencias técnicas en hitos ramificados al estilo RPG.",
        },
        productCode: {
          title: "Producto y Código",
          category: "product",
          badge: "Construyendo con agentes de IA",
          desc: "Prototipado rápido, flujos de UX y desarrollo de interfaces web interactivas mediante flujos modernos con IA.",
        },
      },
    },
    recruiting: {
      eyebrow: "RECLUTAMIENTO",
      headline: "Búsquedas especializadas, no contrataciones por volumen.",
      body: "Realizo búsquedas rol por rol para clientes en Canadá y EE. UU.: ingenieros DevOps, arquitectos de datos y cloud, desarrolladores full-stack y perfiles de marketing. El trabajo consiste en calibrar bien el requerimiento con el hiring manager, encontrar a personas que realmente hagan match y asegurar que lo que el candidato dice se sostenga.",
      card1Title: "Screening técnico",
      card1Badge: "Profundidad Técnica",
      card1Body:
        "Sólido entendimiento del ciclo de vida del software (SDLC), algoritmos y estructuras de datos, lo que me permite ir más allá del cruce de palabras clave: seguir conversaciones técnicas, entender cómo encaja el trabajo del candidato desde la planificación hasta el despliegue, y evaluar la resolución real de problemas por encima de respuestas memorizadas. Se valida la experiencia real frente al stack del rol (Azure, AWS, plataformas de datos, full-stack), con estrecha sintonía con los hiring managers sobre lo que significa \"senior\" para su equipo.",
      card2Title: "Entrevistas conductuales",
      card2Badge: "Basado en Psicología",
      card2Body:
        "Entrevistas estructuradas con fundamentación en psicología. Verificación de consistencia entre el CV, lo que afirma el candidato y sus ejemplos reales, evaluando cómo maneja la presión y los contratiempos.",
      card3Title: "Proceso y automatización",
      card3Badge: "JobAdder y Lever",
      card3Body:
        "Trabajo diario en JobAdder y Lever. Creación de automatizaciones de reclutamiento con Make.",
      exampleCaseTitle: "Caso de Ejemplo",
      exampleCaseBody:
        "Un rol de infraestructura en Azure con componente de cara al cliente, que requería tanto sólida destreza técnica como la comunicación necesaria para interactuar directamente con el cliente. [PLACEHOLDER: one-line outcome]",
    },
    psychology: {
      eyebrow: "PSICOLOGÍA",
      headline: "Formación en psicología, aplicada.",
      badge: "Lic. en Psicología • UCV",
      body: "Estudié psicología en la Universidad Central de Venezuela. No hice una larga carrera clínica, pero uso sus herramientas a diario: escuchar lo que se dice y lo que no, notar cuando una historia no cuadra y entender cómo las personas gestionan la presión. En reclutamiento, eso se traduce en entrevistas que van más allá de las respuestas ensayadas. En producto, significa diseñar el aprendizaje en torno a cómo las personas realmente se mantienen motivadas, desde la visión de Piaget de construir conocimiento por etapas hasta el trabajo de Skinner sobre reforzamiento, utilizado con cuidado.",
      quote:
        "\"Las herramientas siguen instrucciones. Las personas actúan por motivación, hábito y miedo. Los buenos equipos y los buenos productos se toman ambos en serio.\"",
      quoteAuthor: "— Ricardo (Rick) Pulgar Mendoza",
    },
    skillea: {
      eyebrow: "SKILLEA",
      headline: "Skillea: El Progress Tree",
      statusPrototype: "Prototipo funcional",
      statusRole:
        "Rol: [PLACEHOLDER: title, suggested Co-Founder, Product & Technology]",
      tryDemoBtn: "Probar la demo →",
      demoUrl: "[PLACEHOLDER: demo URL]",
      body1:
        "Skillea convierte las trayectorias en tecnología en un árbol de habilidades al estilo RPG. En lugar de largas listas de cursos, los aprendices ven ramas, hitos y lo que cada habilidad desbloquea para los empleos que buscan. Diseñé la estructura del producto y el sistema de gamificación, y construyo el prototipo yo mismo con agentes de programación de IA.",
      body2:
        "La idea surge de años jugando RPGs: los árboles de habilidades hacen visible el progreso y le dan a cada hora de esfuerzo una recompensa clara. Skillea lleva eso al aprendizaje de carreras en tecnología.",
      whatIBringTitle: "Lo que aporto",
      whatIBringItem1:
        "La visión de un reclutador sobre lo que realmente buscan los hiring managers.",
      whatIBringItem2:
        "La visión de un psicólogo sobre la motivación y el ritmo de aprendizaje.",
      illustrativeExampleLabel: "Ejemplo ilustrativo",
      nodeDetailsTitle: "Detalles del nodo",
      mockLearnerTier: "Nivel de Aprendiz: Lvl 14 Full-Stack",
      nodes: [
        {
          id: "node-1",
          name: "Mapeo de Carga Cognitiva",
          status: "Completado",
          xp: "+650 XP",
          category: "Psicología y UX",
          psychologicalHook: "Ley de Miller (7±2 fragmentos) y Ergonomía Cognitiva",
          vocationalImpact: "Modelos mentales estructurados que reducen la indecisión del aprendiz.",
          branch: "Fundamentos",
        },
        {
          id: "node-2",
          name: "Arquitectura de Ciclos Gamificados",
          status: "Completado",
          xp: "+920 XP",
          category: "Diseño de Producto",
          psychologicalHook: "Recompensas progresivas y motivación intrínseca",
          vocationalImpact: "Mantiene el impulso del aprendiz mediante hitos visibles.",
          branch: "Fundamentos",
        },
        {
          id: "node-3",
          name: "Motor de Ramificación Adaptativa",
          status: "En Progreso",
          xp: "+1,200 XP",
          category: "Rutas de Aprendizaje",
          psychologicalHook: "Zona de Desarrollo Próximo de Vygotsky",
          vocationalImpact: "Adjusts difficulty to the learner's level (planned)",
          branch: "Arquitectura",
        },
        {
          id: "node-4",
          name: "Alineación con Ofertas Reales",
          status: "Desbloqueado",
          xp: "+1,500 XP",
          category: "Criterio de Reclutador",
          psychologicalHook: "Efecto de gradiente de meta y aplicabilidad real",
          vocationalImpact: "Milestone reveals tied to real skill progress",
          branch: "Preparación Laboral",
        },
        {
          id: "node-5",
          name: "Validación Demostrable de Competencias",
          status: "En Progreso",
          xp: "+2,000 XP",
          category: "Certificación Práctica",
          psychologicalHook: "Validación de competencia y prueba de trabajo real",
          vocationalImpact: "Evidencia tangible para entrevistas reales con hiring managers.",
          branch: "Resultados",
        },
      ],
      strategyCardTitle: "Estrategia de Producto y Aprendizaje",
      strategyCardBody:
        "Conectando la motivación del candidato con habilidades técnicas prácticas. Traduciendo roles complejos en hitos alcanzables.",
      strategyItem1Title: "01 // Progresión por Árbol de Habilidades",
      strategyItem1Desc: "Progreso visualizado en ramas en vez de listas estáticas de videos.",
      strategyItem2Title: "02 // Regulación Cognitiva",
      strategyItem2Desc: "Ritmo diseñado para evitar saturación y mantener la concentración.",
      strategyItem3Title: "03 // Relevancia para el Mercado",
      strategyItem3Desc: "Criterios alineados a lo que buscan los equipos de ingeniería en vacantes reales.",
      uxCardTitle: "Narrativa UX y Motivación",
      uxCardBody:
        "Diseñando experiencias educativas fundamentadas en principios psicológicos humanos:",
      uxItem1Title: "Autonomía y Decisión",
      uxItem1Desc: "Rutas no lineales para que el usuario elija su especialización con claridad.",
      uxItem2Title: "Carga Cognitiva Optimizada",
      uxItem2Desc: "Presentación progresiva para abordar un salto conceptual a la vez.",
      uxItem3Title: "Retroalimentación de Hitos",
      uxItem3Desc: "Milestone reveals tied to real skill progress.",
    },
    experience: {
      headline: "Experiencia",
      subheadline: "De la psicología al reclutamiento tech y a la creación de producto.",
      filterAll: "Todo",
      filterProduct: "Producto y Fundador",
      filterRecruiting: "Reclutamiento",
      competenciesLabel: "Competencias:",
      roles: [
        {
          id: "skillea",
          role: "Co-Founder, [PLACEHOLDER: title]",
          company: "Skillea",
          period: "Dic 2025–Presente",
          location: "Remoto",
          category: "product",
          badge: "Producto y Fundador",
          badgeColor: "#8B5CF6",
          featured: true,
          achievements: [
            "Diseñé la estructura del producto y el sistema de progresión gamificado.",
            "Construyo el prototipo funcional con agentes de programación de IA.",
          ],
          skills: [
            "Diseño de producto",
            "Gamificación",
            "Flujos UX",
            "Desarrollo asistido con IA",
          ],
        },
        {
          id: "devengine",
          role: "Senior Technical Recruiter",
          company: "DevEngine",
          period: "Nov 2025–Presente; May 2024–Oct 2024",
          location: "Vancouver, Canadá (Remoto)",
          category: "recruitment",
          badge: "Reclutamiento Técnico",
          badgeColor: "#06B6D4",
          featured: true,
          achievements: [
            "Búsquedas especializadas para clientes de Canadá y EE. UU. en DevOps, arquitectura cloud y de datos, full-stack y marketing.",
            "Contrataciones hasta nivel Director, incluyendo roles de infraestructura en Azure con trato directo con el cliente.",
          ],
          skills: [
            "Reclutamiento end-to-end",
            "Screening técnico",
            "Gestión con clientes",
            "JobAdder",
            "Lever",
          ],
        },
        {
          id: "it-bootcamp",
          role: "Lead Recruiter",
          company: "The IT Bootcamp",
          period: "Oct 2024–Oct 2025",
          location: "Remoto",
          category: "recruitment",
          badge: "Procesos y Automatización",
          badgeColor: "#10B981",
          achievements: [
            "[PLACEHOLDER: what was designed from scratch]",
            "Automatización de etapas del pipeline con Make.",
            "Contratación de ciclo completo.",
          ],
          skills: [
            "Diseño de procesos",
            "Automatización (Make)",
            "Reclutamiento end-to-end",
          ],
        },
        {
          id: "bold-business",
          role: "Recruiter & HR Specialist",
          company: "Bold Business",
          period: "Abr 2022–Abr 2024",
          location: "Remoto",
          category: "recruitment",
          badge: "Reclutamiento y RRHH",
          badgeColor: "#3B82F6",
          achievements: [
            "Más de 70 contrataciones de agentes de soporte para clientes de EE. UU. bajo modelo RPO.",
            "Onboarding y operaciones de recursos humanos.",
          ],
          skills: [
            "Reclutamiento de volumen",
            "RPO",
            "Onboarding",
            "Operaciones de RRHH",
          ],
        },
        {
          id: "listopro",
          role: "Technical Sourcer",
          company: "Listopro • Fetcher • Revelo",
          period: "2021–2022",
          location: "Latinoamérica / Norteamérica",
          category: "recruitment",
          badge: "Sourcing",
          badgeColor: "#F59E0B",
          achievements: [
            "Sourcing de desarrolladores latinoamericanos para startups norteamericanas mediante búsqueda booleana y contacto pasivo.",
          ],
          skills: ["Búsqueda booleana", "Contacto pasivo", "Sourcing"],
        },
        {
          id: "bioetica",
          role: "Colaborador",
          company: "Bioética en la Red",
          period: "2020–[PLACEHOLDER: end year]",
          location: "Remoto",
          category: "product",
          badge: "Redacción y Ética",
          badgeColor: "#EC4899",
          achievements: [
            "Artículos sobre ética en IA, mejora cognitiva y psicología. [PLACEHOLDER: link to articles]",
          ],
          skills: ["Investigación", "Redacción", "Ética en IA"],
        },
      ],
    },
    skills: {
      headline: "Habilidades y herramientas",
      subheadline: "Lo que utilizo a diario en reclutamiento, producto e IA.",
      col1Title: "Reclutamiento",
      col1Subtitle: "Atracción de talento y alineación con clientes",
      col1Skills: [
        "Reclutamiento técnico integral",
        "Sourcing y búsqueda booleana",
        "Entrevistas conductuales",
        "JobAdder y Lever",
        "Reportes de pipeline",
        "Experiencia del candidato",
      ],
      col2Title: "Fundamentos técnicos",
      col2Subtitle: "Conceptos aplicados en la evaluación de perfiles",
      col2Skills: [
        "Ciclo de vida del software (SDLC)",
        "Algoritmos y estructuras de datos",
        "Plataformas cloud y de datos (para screening)",
      ],
      col3Title: "Producto e IA",
      col3Subtitle: "Prototipado, gamificación y flujos con IA",
      col3Skills: [
        "Diseño de gamificación",
        "Customer journeys y personas",
        "Scoping de producto",
        "Agentes de código con IA",
        "Automatización con Make",
        "Ética en IA",
      ],
      col4Title: "Colaboración",
      col4Subtitle: "Organización asíncrona y trabajo en equipo",
      col4Skills: [
        "Slack",
        "Asana y Trello",
        "Google Workspace",
        "Notion",
        "Escucha activa",
      ],
    },
    beyondWork: {
      eyebrow: "MÁS ALLÁ DEL TRABAJO",
      headline: "Más allá del trabajo",
      body: "Amante de los animales, casi siempre con un gato cerca o a caballo cuando salgo al aire libre. Gamer de toda la vida, especialmente de RPGs, de donde nació la idea del árbol de habilidades de Skillea.",
      photoCaption: "Compañero de escritorio — Control de calidad felino",
    },
    contact: {
      eyebrow: "CONTACTO",
      headline: "Hablemos.",
      body: "¿Estás contratando para un rol de tecnología, quieres una segunda opinión sobre tu proceso de selección o tienes curiosidad sobre Skillea? Escríbeme. Mi asesoría cubre diseño de entrevistas, revisión de procesos de contratación y evaluación de candidatos.",
      emailBtn: "Enviar correo",
      copyBtn: "Copiar",
      copiedBtn: "¡Copiado!",
      downloadCvBtn: "Descargar CV (PDF)",
      footerNote: "Remoto · Inglés y Español",
      allRightsReserved: "Ricardo (Rick) Pulgar Mendoza. Todos los derechos reservados.",
    },
  },
};
