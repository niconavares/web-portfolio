// Fuente de verdad: CONTENIDO_WEB.md §4. Orden fijo: SOCEmpire SIEMPRE primero.
// Enlaces GitHub curados vía `gh repo list` + lectura de READMEs.
import type { L10n } from './site';

export type Shot = { src: string; caption: L10n };

export type Project = {
  index: string;
  name: string;
  tagline: L10n;
  meta: L10n;          // línea de contexto (fecha/tipo)
  bullets: L10n[];     // párrafos de la tarjeta
  stack: string[];     // tags mono
  github?: string;     // undefined = sin tarjeta enlazada
  flagship?: boolean;
  // Pruebas visuales. Las que falten en /public se ocultan solas (onerror).
  shots?: Shot[];
};

export const projects: Project[] = [
  {
    index: '01',
    name: 'SOCEmpire',
    flagship: true,
    tagline: {
      es: 'Honeypot T-Pot en GCP con +1M de ataques reales',
      en: 'T-Pot honeypot on GCP with 1M+ real attacks',
    },
    meta: {
      es: 'Proyecto Final KeepCoding · Junio 2026',
      en: 'KeepCoding Final Project · June 2026',
    },
    bullets: [
      {
        es: 'Despliegue completo de honeypot multi-servicio T-Pot 24.04 en Google Cloud (VM Debian 12, 35 contenedores Docker) expuesto a Internet 16 días. Responsable de despliegue cloud, configuración, análisis forense, informe (34 pág.) y presentación (36 diapositivas).',
        en: 'Full deployment of a multi-service T-Pot 24.04 honeypot on Google Cloud (Debian 12 VM, 35 Docker containers) exposed to the Internet for 16 days. Responsible for cloud deployment, configuration, forensic analysis, a 34-page report and a 36-slide presentation.',
      },
      {
        es: '1.000.000+ ataques capturados · 13.659 IPs únicas · 85 logins SSH exitosos · 10+ CVEs en tiempo real. Análisis forense del malware Redtail/XMRig (VirusTotal 76/100 MALICIOUS + Joe Sandbox, regla YARA JoeSecurity_Xmrig). Detección de tráfico Cobalt Strike (puerto 50050) asociado a APT29/APT41/Lazarus/LockBit.',
        en: '1,000,000+ attacks captured · 13,659 unique IPs · 85 successful SSH logins · 10+ CVEs in real time. Forensic analysis of the Redtail/XMRig malware (VirusTotal 76/100 MALICIOUS + Joe Sandbox, YARA rule JoeSecurity_Xmrig). Detection of Cobalt Strike traffic (port 50050) linked to APT29/APT41/Lazarus/LockBit.',
      },
      {
        es: 'Mapeo completo a MITRE ATT&CK (T1078, T1059, T1053, T1027, T1082, T1496) e investigación OSINT de IPs con AbuseIPDB y VirusTotal.',
        en: 'Full mapping to MITRE ATT&CK (T1078, T1059, T1053, T1027, T1082, T1496) and OSINT investigation of IPs with AbuseIPDB and VirusTotal.',
      },
    ],
    stack: ['T-Pot 24.04', 'Docker', 'Elasticsearch/Logstash/Kibana', 'Suricata', 'Cowrie', 'Dionaea', 'Heralding', 'GCP'],
    github: 'https://github.com/niconavares/Proyecto-Final-Bootcamp-KEEPCODING',
    shots: [
      { src: '/assets/proyectos/socempire-1.png', caption: { es: 'Mapa de ataques mundial en tiempo real (T-Pot)', en: 'Real-time global attack map (T-Pot)' } },
      { src: '/assets/proyectos/socempire-2.png', caption: { es: 'Dashboard T-Pot: 1M+ ataques, países y reputación de IPs', en: 'T-Pot dashboard: 1M+ attacks, countries and IP reputation' } },
      { src: '/assets/proyectos/socempire-3.png', caption: { es: 'Redtail/XMRig — Joe Sandbox: MALICIOUS 76/100, YARA Xmrig', en: 'Redtail/XMRig — Joe Sandbox: MALICIOUS 76/100, YARA Xmrig' } },
      { src: '/assets/proyectos/socempire-4.png', caption: { es: 'Credenciales probadas por los atacantes (tagclouds de usuario/contraseña)', en: 'Credentials tried by attackers (username/password tag clouds)' } },
    ],
  },
  {
    index: '02',
    name: 'Homelab SOC',
    tagline: {
      es: 'Splunk Enterprise + Zero Trust',
      en: 'Splunk Enterprise + Zero Trust',
    },
    meta: {
      es: 'Proyecto personal · 2026 – Actualidad',
      en: 'Personal project · 2026 – Present',
    },
    bullets: [
      {
        es: 'SOC personal con Splunk Enterprise (Docker) como SIEM, Universal Forwarder en endpoints, Tailscale como VPN cifrada y UFW como sensor de detección. Arquitectura Zero Trust sin exposición pública.',
        en: 'Personal SOC with Splunk Enterprise (Docker) as SIEM, Universal Forwarder on endpoints, Tailscale as an encrypted VPN and UFW as a detection sensor. Zero Trust architecture with no public exposure.',
      },
      {
        es: 'Pipeline validado con ejercicios Purple Team: escaneos Nmap desde Kali detectados en tiempo real. Alertas SPL operativas (escaneo de puertos, fuerza bruta SSH) y dashboard SOC con métricas por IP, puertos y timeline.',
        en: 'Pipeline validated with Purple Team exercises: Nmap scans from Kali detected in real time. Operational SPL alerts (port scanning, SSH brute force) and a SOC dashboard with metrics by IP, ports and timeline.',
      },
    ],
    stack: ['Splunk Enterprise', 'SPL', 'Splunk UF', 'Tailscale', 'UFW', 'Docker'],
    // Sin repo público asociado en CONTENIDO_WEB.
    shots: [
      { src: '/assets/proyectos/homelab-1.png', caption: { es: 'Dashboard SOC en Splunk (métricas por IP, puertos, timeline)', en: 'SOC dashboard in Splunk (metrics by IP, ports, timeline)' } },
      { src: '/assets/proyectos/homelab-2.png', caption: { es: 'Alerta SPL disparada (escaneo Nmap detectado)', en: 'SPL alert triggered (Nmap scan detected)' } },
    ],
  },
  {
    index: '03',
    name: 'Infraestructura SIEM Empresarial',
    tagline: {
      es: 'Blue Team',
      en: 'Blue Team',
    },
    meta: {
      es: 'Proyecto KeepCoding · Enero 2026',
      en: 'KeepCoding Project · January 2026',
    },
    bullets: [
      {
        es: 'Red corporativa segmentada en 3 zonas sobre pfSense 2.7.2 (LAN, DMZ, DMZ2). Elastic Stack con Elastic Agent en endpoints Windows, honeypot Cowrie capturando intrusiones SSH reales y Suricata IDS/IPS. Dashboards en Kibana con correlación multifuente.',
        en: 'Corporate network segmented into 3 zones on pfSense 2.7.2 (LAN, DMZ, DMZ2). Elastic Stack with Elastic Agent on Windows endpoints, Cowrie honeypot capturing real SSH intrusions and Suricata IDS/IPS. Kibana dashboards with multi-source correlation.',
      },
    ],
    stack: ['pfSense', 'Elastic Stack', 'Elastic Agent', 'Cowrie', 'Suricata', 'Kibana'],
    github: 'https://github.com/niconavares/Blue-Team',
    shots: [
      { src: '/assets/proyectos/siem-cowrie.png', caption: { es: 'Intrusión SSH real capturada por Cowrie en Kibana', en: 'Real SSH intrusion captured by Cowrie in Kibana' } },
      { src: '/assets/proyectos/siem-suricata.png', caption: { es: 'Eventos de Suricata IDS/IPS ingeridos en el SIEM (4.642 docs)', en: 'Suricata IDS/IPS events ingested into the SIEM (4,642 docs)' } },
      { src: '/assets/proyectos/siem-3.png', caption: { es: 'Logs de endpoint Windows (Elastic Agent) correlacionados en el SIEM', en: 'Windows endpoint logs (Elastic Agent) correlated in the SIEM' } },
    ],
  },
  {
    index: '04',
    name: 'Análisis Forense · DFIR',
    tagline: {
      es: 'Forense de disco y memoria + respuesta a incidentes',
      en: 'Disk & memory forensics + incident response',
    },
    meta: {
      es: 'Proyecto KeepCoding · Mayo 2026',
      en: 'KeepCoding Project · May 2026',
    },
    bullets: [
      {
        es: 'Investigación forense de un incidente sobre una imagen de disco Windows (Win10_PC001.vmdk): identificación del equipo comprometido vía registro (hive SYSTEM), herramientas del atacante (nbtscan, xCmd, WMIBackdoor.ps1), recuperación de ficheros de la papelera y extracción/crackeo de credenciales de los hives SAM/SYSTEM con Mimikatz. Línea temporal del ataque con Prefetch y verificación de hash SHA-256. CTF de 28 retos completado.',
        en: 'Forensic investigation of an incident on a Windows disk image (Win10_PC001.vmdk): identifying the compromised host via the registry (SYSTEM hive), attacker tools (nbtscan, xCmd, WMIBackdoor.ps1), recovering files from the Recycle Bin and extracting/cracking credentials from the SAM/SYSTEM hives with Mimikatz. Attack timeline via Prefetch and SHA-256 hash verification. 28-challenge CTF completed.',
      },
      {
        es: 'Adquisición y análisis de memoria RAM con winpmem y Volatility 3: procesos (pslist/pstree), conexiones de red (netscan) y código inyectado (malfind). Detección de un proceso malicioso (svchost.exe lanzado desde explorer.exe) y su conexión C2, con extracción del binario (dumpfiles) y su hash. Análisis de metadatos EXIF de la evidencia.',
        en: 'RAM acquisition and analysis with winpmem and Volatility 3: processes (pslist/pstree), network connections (netscan) and injected code (malfind). Detection of a malicious process (svchost.exe spawned from explorer.exe) and its C2 connection, extracting the binary (dumpfiles) and its hash. EXIF metadata analysis of the evidence.',
      },
    ],
    stack: ['FTK Imager', 'Volatility 3', 'Mimikatz', 'winpmem', 'exiftool', 'Registro Windows', 'Prefetch'],
    github: 'https://github.com/niconavares/DFIR',
    shots: [
      { src: '/assets/proyectos/dfir-1.png', caption: { es: 'Análisis del disco Win10_PC001.vmdk en FTK Imager (herramientas del atacante)', en: 'Analysis of the Win10_PC001.vmdk disk in FTK Imager (attacker tools)' } },
      { src: '/assets/proyectos/dfir-2.png', caption: { es: 'Análisis de metadatos EXIF de la evidencia (exiftool)', en: 'EXIF metadata analysis of the evidence (exiftool)' } },
    ],
  },
  {
    index: '05',
    name: 'Análisis de Malware · Detección YARA',
    tagline: {
      es: 'Detección estática + análisis de ransomware en sandbox',
      en: 'Static detection + ransomware sandbox analysis',
    },
    meta: {
      es: 'Proyecto KeepCoding · Mayo 2026',
      en: 'KeepCoding Project · May 2026',
    },
    bullets: [
      {
        es: 'Sistema de detección estática que compila 1.641 reglas YARA de 5 fuentes de inteligencia (CAPEv2, Reversing Labs, Yara-Rules Project, BartBlaze, Elastic Security) mediante un script en Python, y las ejecuta sobre 101 muestras reales de MalwareBazaar. Resultado: 98/101 detectadas (97,03%), clasificando familias concretas — WannaCry, AsyncRAT, NjRAT, RedLine, IcedID, XWorm, DCRat, Stealc y Cobalt Strike.',
        en: 'Static detection system that compiles 1,641 YARA rules from 5 threat-intel sources (CAPEv2, Reversing Labs, Yara-Rules Project, BartBlaze, Elastic Security) via a Python script, and runs them against 101 real MalwareBazaar samples. Result: 98/101 detected (97.03%), classifying specific families — WannaCry, AsyncRAT, NjRAT, RedLine, IcedID, XWorm, DCRat, Stealc and Cobalt Strike.',
      },
      {
        es: 'Complementado con análisis dinámico de una muestra de ransomware en sandbox profesional (CAPEv2), documentando comportamiento e IOCs.',
        en: 'Complemented with dynamic analysis of a ransomware sample in a professional sandbox (CAPEv2), documenting behavior and IOCs.',
      },
    ],
    stack: ['YARA', 'Python', 'MalwareBazaar', 'CAPEv2', 'MISP', 'Threat Intel', 'IOCs'],
    github: 'https://github.com/niconavares/Analisis-de-Malware',
  },
  {
    index: '06',
    name: 'Operación Shadow Surge',
    tagline: {
      es: 'Red Team con evasión de EDR',
      en: 'Red Team with EDR evasion',
    },
    meta: {
      es: 'Proyecto KeepCoding · Abril 2026',
      en: 'KeepCoding Project · April 2026',
    },
    bullets: [
      {
        es: 'Simulación de intrusión contra Windows 10 con Microsoft Defender activo (Proxmox VE). Havoc C2 v0.7 compilado desde fuente, inyección de shellcode en app Electron (Discord) reempaquetando app.asar. Resultado: sesión interactiva con privilegios Admin y cero alertas.',
        en: 'Intrusion simulation against Windows 10 with Microsoft Defender active (Proxmox VE). Havoc C2 v0.7 compiled from source, shellcode injection into an Electron app (Discord) by repackaging app.asar. Result: interactive session with Admin privileges and zero alerts.',
      },
    ],
    stack: ['Havoc C2', 'Proxmox VE', 'shellcode injection', 'Impacket', 'Proxychains'],
    github: 'https://github.com/niconavares/Red-Team',
    shots: [
      { src: '/assets/proyectos/shadowsurge-1.png', caption: { es: 'GUI de Havoc C2 v0.7: agente activo (healthy) sobre Discord.exe en Windows 10', en: 'Havoc C2 v0.7 GUI: active agent (healthy) on Discord.exe, Windows 10' } },
      { src: '/assets/proyectos/shadowsurge-2.png', caption: { es: 'Shellcode de la sesión inspeccionado en HxD (víctima Windows 10)', en: 'Session shellcode inspected in HxD (Windows 10 victim)' } },
      { src: '/assets/proyectos/shadowsurge-3.png', caption: { es: 'Reempaquetado de app.asar: inyección en la app Electron (Discord)', en: 'Repackaging app.asar: injection into the Electron app (Discord)' } },
    ],
  },
  {
    index: '07',
    name: 'Pentesting · Metasploitable 2',
    tagline: {
      es: 'Auditoría caja negra — 13 vulnerabilidades, acceso root',
      en: 'Black-box audit — 13 vulnerabilities, root access',
    },
    meta: {
      es: 'Proyecto KeepCoding · Febrero 2026',
      en: 'KeepCoding Project · February 2026',
    },
    bullets: [
      {
        es: 'Auditoría de seguridad de caja negra sobre Metasploitable 2 siguiendo OWASP, PTES y OSSTMM. Se identificaron y explotaron 13 vulnerabilidades (8 críticas, CVSS 9.0–10.0), obteniendo acceso root por 6 vectores distintos (vsFTPd 2.3.4 backdoor, Samba, Java-RMI 1099, NFS, entre otros).',
        en: 'Black-box security audit of Metasploitable 2 following OWASP, PTES and OSSTMM. 13 vulnerabilities identified and exploited (8 critical, CVSS 9.0–10.0), obtaining root access through 6 different vectors (vsFTPd 2.3.4 backdoor, Samba, Java-RMI 1099, NFS, and more).',
      },
      {
        es: 'Reconocimiento con Nmap y Nikto, explotación con Metasploit y sesiones meterpreter, y documentación del impacto en el negocio y la remediación en un informe profesional.',
        en: 'Reconnaissance with Nmap and Nikto, exploitation with Metasploit and meterpreter sessions, and documentation of business impact and remediation in a professional report.',
      },
    ],
    stack: ['Nmap', 'Metasploit', 'Nikto', 'Hydra', 'enum4linux', 'Meterpreter', 'OWASP/PTES'],
    github: 'https://github.com/niconavares/Pentesting',
    shots: [
      { src: '/assets/proyectos/pentesting-1.png', caption: { es: 'Escaneo de puertos y servicios con Nmap', en: 'Port and service scanning with Nmap' } },
      { src: '/assets/proyectos/pentesting-2.png', caption: { es: 'Explotación con Metasploit (módulo mysql_login)', en: 'Exploitation with Metasploit (mysql_login module)' } },
      { src: '/assets/proyectos/pentesting-3.png', caption: { es: 'Acceso root conseguido (uid=0) vía backdoor de vsFTPd 2.3.4', en: 'Root access obtained (uid=0) via vsFTPd 2.3.4 backdoor' } },
    ],
  },
  {
    index: '08',
    name: 'Auditoría Bug Bounty · UPS (HackerOne)',
    tagline: {
      es: 'Reconocimiento y análisis de vulnerabilidades',
      en: 'Reconnaissance and vulnerability analysis',
    },
    meta: {
      es: 'Programa Bug Bounty · Feb – Mar 2026',
      en: 'Bug Bounty Program · Feb – Mar 2026',
    },
    bullets: [
      {
        es: 'Reconocimiento sobre *.ups.com: 2.568 subdominios, 76 activos, 730 hallazgos con Nuclei. Críticos: subdomain takeover en albus.ups.com, Telerik RCE (CVE-2017-9248, CVE-2019-18935), 3 API keys expuestas, JWK JSON Leak. Informe profesional de 25 páginas.',
        en: 'Reconnaissance on *.ups.com: 2,568 subdomains, 76 active, 730 findings with Nuclei. Critical: subdomain takeover on albus.ups.com, Telerik RCE (CVE-2017-9248, CVE-2019-18935), 3 exposed API keys, JWK JSON Leak. Professional 25-page report.',
      },
    ],
    stack: ['ShuffleDNS', 'HTTPx', 'Nuclei', 'Masscan', 'Nmap', 'Subzy', 'Maltego', 'SpiderFoot'],
    github: 'https://github.com/niconavares/Recopilacion-de-Informacion',
    shots: [
      { src: '/assets/proyectos/ups-1.png', caption: { es: 'Mosaico gowitness: hosts vivos capturados en el recon de *.ups.com', en: 'gowitness montage: live hosts captured during *.ups.com recon' } },
    ],
  },
];

export type OtherProject = { name: string; desc: L10n; github: string };

export const otherProjects: OtherProject[] = [
  {
    name: 'VULNES',
    desc: {
      es: 'Plataforma web de CVEs en español con IA local (Ollama + gemma2:2b) · Next.js + Supabase',
      en: 'Spanish-language CVE web platform with local AI (Ollama + gemma2:2b) · Next.js + Supabase',
    },
    github: 'https://github.com/niconavares/vulnes',
  },
  {
    name: 'VANTAGE',
    desc: {
      es: 'Plataforma full-stack de auditoría de redes con IA (Django + Vue.js + Claude API)',
      en: 'Full-stack network audit platform with AI (Django + Vue.js + Claude API)',
    },
    github: 'https://github.com/niconavares/vantage',
  },
  {
    name: 'AuditPro',
    desc: {
      es: 'Auditoría automática de webs para pymes (Node.js + React Native)',
      en: 'Automated website auditing for SMEs (Node.js + React Native)',
    },
    github: 'https://github.com/niconavares/AuditPro',
  },
  {
    name: 'Bug Bounty Machine',
    desc: {
      es: 'Pipeline de recon automatizado en 6 fases',
      en: 'Automated recon pipeline in 6 phases',
    },
    github: 'https://github.com/niconavares/recon-dashboard',
  },
];
