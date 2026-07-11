// Fuente de verdad: CONTENIDO_WEB.md. No inventar datos, cifras ni fechas.
// El EN es traducción fiel del ES aprobado (mismas cifras/fechas/tecnologías).

export type Lang = 'es' | 'en';
export type L10n = Record<Lang, string>;

export const contact = {
  name: 'Nicolás Navares Sánchez',
  wordmark: 'NAVARES',
  email: 'njnavares@protonmail.com',
  linkedin: 'https://linkedin.com/in/nicolas-navares-cybersecurity',
  github: 'https://github.com/niconavares',
  credly: 'https://credly.com/users/nicolas-jose-navares-sanchez',
};

export const nav: { href: string; label: L10n }[] = [
  { href: '#work', label: { es: 'proyectos', en: 'work' } },
  { href: '#about', label: { es: 'sobre mí', en: 'about' } },
  { href: '#contact', label: { es: 'contacto', en: 'contact' } },
];

export const hero = {
  eyebrow: {
    es: '// ANALISTA SOC — BLUE TEAM',
    en: '// SOC ANALYST — BLUE TEAM',
  } as L10n,
  sub: {
    es: 'Santa Cruz de Tenerife · Remoto',
    en: 'Santa Cruz de Tenerife · Remote',
  } as L10n,
  // Status line en mono (datos reales del honeypot).
  status: {
    es: '> SOCEmpire · 1.000.000+ ataques capturados · 13.659 IPs únicas · 10+ CVEs en vivo',
    en: '> SOCEmpire · 1,000,000+ attacks captured · 13,659 unique IPs · 10+ live CVEs',
  } as L10n,
};

export const about: L10n = {
  es: `Analista de ciberseguridad orientado a Blue Team y operaciones SOC. Vengo de 4 años con negocio propio de informática y de 18 años en el sector tecnológico, y me he reconvertido a ciberseguridad con el Bootcamp Full Stack de KeepCoding (Ed. XI). Trabajo con enfoque hands-on: monto la infraestructura, la ataco y la defiendo yo mismo. Tengo un homelab SOC en producción con Splunk bajo arquitectura Zero Trust, y proyectos con datos reales — como SOCEmpire, un honeypot T-Pot que capturó más de un millón de ataques reales de Internet. Aporto además madurez profesional, diagnóstico y triaje de incidencias, y comunicación técnica con clientes de casi dos décadas de trato directo. Ahora mismo preparo la certificación BTL1.`,
  en: `Cybersecurity analyst focused on Blue Team and SOC operations. I come from 4 years running my own IT business and 18 years in the tech sector, and I have retrained into cybersecurity through KeepCoding's Full Stack Bootcamp (Ed. XI). I work hands-on: I build the infrastructure, then attack and defend it myself. I run a production SOC homelab with Splunk under a Zero Trust architecture, plus projects with real data — like SOCEmpire, a T-Pot honeypot that captured over a million real attacks from the Internet. I also bring professional maturity, incident diagnosis and triage, and nearly two decades of hands-on technical communication with customers. I am currently preparing the BTL1 certification.`,
};

export type SkillGroup = { title: L10n; tags: string[] };

export const skills: SkillGroup[] = [
  {
    title: { es: 'Blue Team / SOC', en: 'Blue Team / SOC' },
    tags: ['Splunk (SPL)', 'Elastic Stack (ELK)', 'Wazuh', 'Suricata IDS/IPS', 'pfSense', 'T-Pot/Cowrie/Dionaea', 'Tailscale', 'Zero Trust', 'UFW', 'Threat Hunting', 'Triaje', 'DFIR', 'Análisis de malware', 'MITRE ATT&CK', 'OSINT'],
  },
  {
    title: { es: 'Red Team / Pentest', en: 'Red Team / Pentest' },
    tags: ['Nmap', 'Masscan', 'Metasploit', 'Burp Suite', 'Nuclei', 'Havoc C2', 'Cobalt Strike (detección)', 'ShuffleDNS', 'HTTPx', 'Maltego'],
  },
  {
    title: { es: 'Sistemas / Cloud', en: 'Systems / Cloud' },
    tags: ['Linux (Debian/Kali/Ubuntu)', 'Windows Server', 'macOS', 'Docker', 'Proxmox', 'GCP', 'Nginx', 'Cloudflare'],
  },
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    tags: ['Python', 'Bash', 'JavaScript/Node', 'SQL', 'PowerShell (básico)'],
  },
];

export type ExperienceItem = { role: L10n; org: string; period: L10n; body: L10n };

// Trayectoria completa (fuente: CV SOC). Orden cronológico inverso.
export const experience: ExperienceItem[] = [
  {
    role: { es: 'Asesor Técnico · Soporte de Primera Línea', en: 'Technical Advisor · First-Line Support' },
    org: 'Banana Computer / K-tuin (Apple Premium Reseller)',
    period: { es: '2018 – Actualidad', en: '2018 – Present' },
    body: {
      es: 'Primer nivel de soporte técnico en entorno Apple Premium Reseller. Diagnóstico inicial de incidencias de hardware y software (macOS, iOS, iPadOS), resolución en tienda y derivación al SAT en casos complejos — flujo equivalente al triaje de un SOC N1. Asesoramiento, soporte postventa y gestión de garantías. Desde 2024, rol en logística a media jornada compatibilizado con la formación intensiva en ciberseguridad.',
      en: 'First-line technical support in an Apple Premium Reseller environment. Initial diagnosis of hardware and software incidents (macOS, iOS, iPadOS), in-store resolution and escalation to the service center for complex cases — a flow equivalent to SOC L1 triage. Advisory, after-sales support and warranty management. Since 2024, a part-time logistics role combined with intensive cybersecurity training.',
    },
  },
  {
    role: { es: 'Responsable de Tienda · Sección Informática (UN54)', en: 'Store Manager · IT Section (UN54)' },
    org: 'Worten España',
    period: { es: '2014 – 2018', en: '2014 – 2018' },
    body: {
      es: 'Gestión de equipo y tienda en la sección de informática. Control de KPIs, stock, gamas y centro de costes. Apoyo en la gestión de la web de Canarias y en nuevas aperturas. Análisis de productividad y campañas de marketing.',
      en: 'Team and store management in the IT section. Control of KPIs, stock, product ranges and cost center. Support for Canary Islands website management and new store openings. Productivity analysis and marketing campaigns.',
    },
  },
  {
    role: { es: 'Dependiente · Informática, Fotografía y Telefonía', en: 'Sales Assistant · IT, Photography & Telephony' },
    org: 'Media Markt · Santa Cruz de Tenerife',
    period: { es: '2013 – 2014', en: '2013 – 2014' },
    body: {
      es: 'Asesoramiento técnico al cliente en productos de informática, fotografía y telefonía móvil. Diagnóstico de necesidades y resolución de consultas técnicas.',
      en: 'Technical customer advice on IT, photography and mobile telephony products. Needs diagnosis and resolution of technical queries.',
    },
  },
  {
    role: { es: 'GPV Samsung Canarias', en: 'Samsung Canary Islands Field Sales Rep' },
    org: 'Samsung Electronics vía Randstad',
    period: { es: 'Feb – Sep 2013', en: 'Feb – Sep 2013' },
    body: {
      es: 'Gestor de punto de venta de Samsung en Canarias. Control de espacios, stock, pedidos, sell-out, formación de promotores y seguimiento de retail marketing en gama marrón, blanca e IT.',
      en: 'Samsung field sales representative in the Canary Islands. Space control, stock, orders, sell-out, promoter training and retail-marketing follow-up across consumer electronics, appliances and IT.',
    },
  },
  {
    role: { es: 'Gerente / Técnico Informático', en: 'Manager / IT Technician' },
    org: 'Puntocom Informática · Negocio propio',
    period: { es: '2006 – 2010', en: '2006 – 2010' },
    body: {
      es: 'Gestión integral de tienda propia de informática combinando responsabilidad de negocio con trabajo técnico directo: montaje y configuración de equipos desde cero, diagnóstico y reparación de hardware y software, instalación de redes y configuración de sistemas. Atención directa a particulares y pymes; gestión de pedidos, proveedores y stock. 4 años de experiencia técnica real, transferible al análisis y respuesta de incidentes.',
      en: 'End-to-end management of my own IT store, combining business responsibility with hands-on technical work: assembly and configuration of computers from scratch, hardware and software diagnosis and repair, network installation and system configuration. Direct support to individuals and SMEs; order, supplier and stock management. 4 years of real technical experience, transferable to incident analysis and response.',
    },
  },
  {
    role: { es: 'Otras experiencias comerciales en tecnología', en: 'Other retail-tech experience' },
    org: 'Vodafone · Media Markt · Samsung Electronics · Decathlon · DHL',
    period: { es: '2007 – 2013', en: '2007 – 2013' },
    body: {
      es: 'Vodafone (2010–2011): asesor en telefonía móvil, fija, ADSL y TV. Media Markt (dic 2012 – feb 2013): venta en TV, audio y HiFi. Samsung Electronics (jul – oct 2012): promotor de gama marrón. Decathlon (2009–2010): asesoramiento comercial. DHL (2008): logística y trazabilidad. Todas aportan comunicación técnica, gestión de incidencias y trabajo bajo presión.',
      en: 'Vodafone (2010–2011): advisor in mobile, landline, ADSL and TV. Media Markt (Dec 2012 – Feb 2013): sales in TV, audio and HiFi. Samsung Electronics (Jul – Oct 2012): consumer-electronics promoter. Decathlon (2009–2010): retail advice. DHL (2008): logistics and traceability. All contributed technical communication, incident management and work under pressure.',
    },
  },
];

export const education = {
  bootcamp: {
    title: 'Bootcamp Full Stack Cybersecurity · Ed. XI — KeepCoding',
    period: 'Nov 2025 – Jul 2026',
    modules: {
      es: 'Módulos: Ciberseguridad 101 · Criptografía · Blue Team · Pentesting · OSINT · IA y Ciberseguridad · Red Team · Análisis de Malware · DFIR · DevSecOps',
      en: 'Modules: Cybersecurity 101 · Cryptography · Blue Team · Pentesting · OSINT · AI & Cybersecurity · Red Team · Malware Analysis · DFIR · DevSecOps',
    } as L10n,
  },
  previousTraining: {
    title: 'Formación técnica previa',
    titleEn: 'Previous technical training',
    period: '2008 – 2023',
    detail: {
      es: 'Cisco Networking Academy · CEAD · Google · Moba — Instalación y Mantenimiento de PC y Redes (CEAD, 500h), Google IT Support Professional (Coursera, 260h), Gestión de la Seguridad Informática en la Empresa (Moba, 100h).',
      en: 'Cisco Networking Academy · CEAD · Google · Moba — PC & Network Installation and Maintenance (CEAD, 500h), Google IT Support Professional (Coursera, 260h), Enterprise IT Security Management (Moba, 100h).',
    } as L10n,
  },
  certs: [
    {
      name: 'Security Blue Team — BTJA (Blue Team Junior Analyst)',
      status: { es: 'Completado Jun 2026 (Cert ID 882989677)', en: 'Completed Jun 2026 (Cert ID 882989677)' } as L10n,
      detail: { es: 'OSINT, forense digital, gestión de vulnerabilidades, threat hunting, análisis de red', en: 'OSINT, digital forensics, vulnerability management, threat hunting, network analysis' } as L10n,
      done: true,
    },
    {
      name: 'Google Cybersecurity Professional Certificate',
      status: { es: 'Completado · Google (Coursera)', en: 'Completed · Google (Coursera)' } as L10n,
      detail: { es: 'SIEM, Python, Linux, SQL, gestión de riesgos, IDS y respuesta a incidentes', en: 'SIEM, Python, Linux, SQL, risk management, IDS and incident response' } as L10n,
      done: true,
    },
    {
      name: 'IBM Cybersecurity Certificate',
      status: { es: 'Completado · IBM SkillsBuild', en: 'Completed · IBM SkillsBuild' } as L10n,
      detail: { es: 'Seguridad de redes y sistemas, respuesta a incidentes y forense, operaciones de seguridad, gestión de vulnerabilidades, GRC', en: 'System & network security, incident response & forensics, security operations, vulnerability management, GRC' } as L10n,
      done: true,
    },
    {
      name: 'BTL1 (Blue Team Level 1) — Security Blue Team',
      status: { es: 'En preparación (próximamente)', en: 'In preparation (coming soon)' } as L10n,
      detail: { es: '', en: '' } as L10n,
      done: false,
    },
  ],
  badges: {
    intro: {
      es: 'Badges verificables en Credly:',
      en: 'Verifiable badges on Credly:',
    } as L10n,
    groups: [
      { org: 'IBM SkillsBuild', items: 'System & Network Security · Cloud Security · Incident Response & Systems Forensics · Security Operations and Management · Vulnerability Management · Governance, Risk, Compliance & Data Privacy' },
      { org: 'Google (Coursera)', items: 'IT Support Professional Certificate' },
      { org: 'Cisco', items: 'Introduction to Cybersecurity · Networking Basics · Networking Devices and Initial Configuration' },
    ],
  },
};

export const contactCta = {
  headline: {
    es: 'Disponible para SOC L1 / Blue Team.',
    en: 'Available for SOC L1 / Blue Team.',
  } as L10n,
  sub: {
    es: 'Remoto desde Tenerife · turnos 24/7 · incorporación inmediata.',
    en: 'Remote from Tenerife · 24/7 shifts · immediate availability.',
  } as L10n,
  available: {
    es: 'Disponible para SOC L1',
    en: 'Available for SOC L1',
  } as L10n,
};

export const ui = {
  sections: {
    about: { es: 'Sobre mí', en: 'About' } as L10n,
    work: { es: 'Proyectos destacados', en: 'Selected work' } as L10n,
    skills: { es: 'Skills', en: 'Skills' } as L10n,
    experience: { es: 'Experiencia', en: 'Experience' } as L10n,
    education: { es: 'Formación y certificaciones', en: 'Education & certifications' } as L10n,
    contact: { es: 'Contacto', en: 'Contact' } as L10n,
  },
  moreRepos: {
    es: 'Más proyectos e infraestructura en',
    en: 'More projects and infrastructure on',
  } as L10n,
  otherProjects: {
    es: 'Otros proyectos',
    en: 'Other projects',
  } as L10n,
  viewRepo: { es: 'GitHub', en: 'GitHub' } as L10n,
};
