export const PROFILE = {
  name: "Akshay Wadhi",
  title: "Full Stack Developer",
  location: "Wardha, Maharashtra",
  phone: "+91 9766575145",
  email: "akshaywadhi.dev@gmail.com",
  linkedin: "https://www.linkedin.com/in/akshaywadhi/",
  github: "https://github.com/akshaywadhi",
  portfolio: "https://akshaywadhi.in/",
  cvUrl:
    "https://github.com/akshaywadhi/test/raw/main/AkshayWadhi.pdf",
  summary:
    "Full Stack Developer with hands-on experience building secure, scalable multi-tenant web applications, REST APIs, and role-based authentication systems. Developed a production-level Institute Management SaaS with multi-tenancy, RBAC, and analytics dashboards. Trained 150+ students in MERN stack development.",
  typewriterRoles: [
    "Full Stack Developer",
    "MERN Stack Developer",
    "SaaS Builder",
  ],
  availability: "Open to opportunities",
  heroImage: "./assets/img/hero-akshay.webp",
  avatar: "./assets/img/hero-akshay.webp",
  initials: "AK",
};

export const STATS = [
  { value: "2+", label: "Years Building", icon: "schedule" },
  { value: "150+", label: "Students Mentored", icon: "groups" },
  { value: "10+", label: "Modules Shipped", icon: "deployed_code" },
  { value: "1", label: "Production SaaS", icon: "cloud_done" },
];

export const TECH_STACK = [
  "React", "Node.js", "MongoDB", "TypeScript", "Express",
  "JWT", "Mantine", "Recharts", "Redux", "Vite",
  "REST APIs", "RBAC", "Multi-tenancy", "Git",
];

export const NAV_ITEMS = [
  { label: "Home", key: "section4" },
  { label: "About", key: "section6" },
  { label: "Skills", key: "section1" },
  { label: "Projects", key: "section5" },
  { label: "Experience", key: "section2" },
  { label: "Education", key: "section7" },
  { label: "Contact", key: "section3" },
];

export const SKILLS = [
  {
    title: "Languages",
    icon: "./assets/img/front-end.webp",
    skills: [
      { skill: "JavaScript", percentage: "90%" },
      { skill: "TypeScript", percentage: "75%" },
      { skill: "HTML/CSS", percentage: "90%" },
      { skill: "SQL (MySQL)", percentage: "70%" },
    ],
  },
  {
    title: "Frontend",
    icon: "./assets/img/front-end.webp",
    skills: [
      { skill: "React.js", percentage: "90%" },
      { skill: "Redux Toolkit", percentage: "80%" },
      { skill: "React Router", percentage: "85%" },
      { skill: "Mantine UI", percentage: "85%" },
      { skill: "Recharts", percentage: "80%" },
      { skill: "Vite", percentage: "85%" },
    ],
  },
  {
    title: "Backend",
    icon: "./assets/img/backend.webp",
    skills: [
      { skill: "Node.js", percentage: "90%" },
      { skill: "Express.js", percentage: "88%" },
      { skill: "REST APIs", percentage: "90%" },
      { skill: "JWT & bcrypt", percentage: "85%" },
      { skill: "Multer & Nodemailer", percentage: "80%" },
    ],
  },
  {
    title: "Database & Tools",
    icon: "./assets/img/tools.webp",
    skills: [
      { skill: "MongoDB & Mongoose", percentage: "88%" },
      { skill: "Git & GitHub", percentage: "90%" },
      { skill: "Postman & Axios", percentage: "85%" },
      { skill: "ExcelJS & pdfmake", percentage: "80%" },
      { skill: "VS Code", percentage: "90%" },
    ],
  },
  {
    title: "Concepts",
    icon: "./assets/img/comm.webp",
    skills: [
      { skill: "Multi-tenancy & RBAC", percentage: "90%" },
      { skill: "CRUD APIs & File uploads", percentage: "88%" },
      { skill: "Dashboard analytics", percentage: "85%" },
      { skill: "Code review & Mentoring", percentage: "90%" },
    ],
  },
];

export const WORK_EXPERIENCE = [
  {
    title: "Software Developer Intern",
    company: "Asmawebs Pvt. Ltd.",
    date: "Jan 2026 – Present",
    responsibilities: [
      "Built a production multi-tenant Institute Management System with isolated data per institute.",
      "Implemented RBAC with dynamic menus driven by role/institute access tables; frontend ProtectedRoute guards URLs and backend enforces scope on all resources.",
      "Built role-based analytics dashboards with live charts (Recharts) for fee collection, enrollment, and attendance; implemented PDF (pdfmake) and Excel (ExcelJS) exports from the UI.",
      "Designed secure REST APIs with JWT authentication, bcrypt password hashing, Multer file uploads, and optimized Mongoose queries on MongoDB Atlas.",
    ],
  },
  {
    title: "MERN Stack Trainer",
    company: "Freelance",
    date: "Jan 2025 – Jun 2025",
    responsibilities: [
      "Trained 150+ students in full-stack MERN development through hands-on, project-based curriculum.",
      "Conducted weekly code reviews and debugging sessions; guided students in building and deploying real-world applications.",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Institute Management System",
    description:
      "Production multi-tenant SaaS for schools and colleges — admission, fees, payroll, attendance, and role-based analytics with live exports.",
    tech: ["React", "Node.js", "MongoDB", "JWT", "Mantine", "Recharts"],
    icon: "./assets/img/ems.webp",
    link: null,
    featured: true,
    highlights: ["Multi-tenancy", "RBAC", "PDF/Excel exports", "Live dashboards"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "High-performance developer portfolio with bento layout, scroll-driven UI, and optimized React architecture.",
    tech: ["React", "Vite", "CSS", "Web3Forms"],
    icon: "./assets/img/hero-akshay.webp",
    link: "https://akshaywadhi.in/",
    featured: false,
    highlights: ["Responsive", "Accessible", "Fast load"],
  },
];

export const EDUCATION = [
  {
    institution: "Cosmos Digital",
    location: "Wardha, Maharashtra",
    degree: "MERN Stack Development Certification",
    date: "Oct 2023 – Aug 2024",
  },
  {
    institution: "RTMNU Nagpur",
    location: "Maharashtra",
    degree: "Bachelor of Commerce and Computer Application",
    date: "Aug 2019 – Aug 2022",
  },
];
