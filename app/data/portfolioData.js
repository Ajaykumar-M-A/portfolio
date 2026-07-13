export const navLinks = ['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact']

export const skills = [
  {
    category: 'Frontend',
    icon: 'UI',
    iconClass: 'frontend',
    tagClass: 'purple',
    tags: ['React.js', 'Next.js', 'JavaScript ES6+', 'Redux Toolkit', 'RTK Query', 'HTML5', 'CSS3', 'Responsive UI'],
  },
  {
    category: 'Backend',
    icon: 'API',
    iconClass: 'backend',
    tagClass: 'pink',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'JWT Auth', 'Role Based Access', 'Python', 'Django REST Framework'],
  },
  {
    category: 'Mobile',
    icon: 'APP',
    iconClass: 'mobile',
    tagClass: 'green',
    tags: ['React Native', 'Expo', 'Android Deployment', 'Background Services', 'Geolocation', 'Mobile UX'],
  },
  {
    category: 'Database & DevOps',
    icon: 'OPS',
    iconClass: 'devops',
    tagClass: 'cyan',
    tags: ['MongoDB', 'Linux VPS', 'Nginx', 'PM2', 'Git', 'GitHub', 'Postman', 'Razorpay'],
  },
]

export const experiences = [
  {
    title: 'Full Stack Developer',
    company: 'Tungston Labs',
    period: 'Feb 2025 - Present',
    location: 'Kochi, Kerala',
    badge: 'Current',
    bullets: [
      'Built production-grade MERN applications with secure authentication, clean API contracts, and responsive frontends.',
      'Designed REST APIs and improved backend data handling for smoother web and mobile workflows.',
      'Implemented Redux Toolkit and RTK Query patterns to keep complex application state predictable.',
      'Delivered React Native features involving real-time flows, background services, and location-aware experiences.',
      'Integrated Razorpay payments and deployed applications on Linux VPS infrastructure with Nginx and PM2.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'LogixSpace Technologies Pvt Ltd',
    period: 'Nov 2023 - Sep 2024',
    location: 'Kochi, Kerala',
    badge: 'Internship',
    bullets: [
      'Contributed to a production-ready mobile application for student activity management.',
      'Built and tested backend APIs, frontend components, and debugging improvements across features.',
      'Collaborated on performance fixes and feature enhancements in an agile development environment.',
    ],
  },
]

export const projects = [
  {
    title: 'Customer Management',
    label: 'Featured Project',
    desc: 'A customer operations platform for handling leads, profiles, follow-ups, status changes, and team visibility from one responsive dashboard.',
    problem: 'Teams needed a clear workflow to track customers, reduce manual follow-up gaps, and keep data easy to search.',
    impact: 'Centralized customer records, improved handoff clarity, and made daily actions faster for admins and staff.',
    icon: 'CM',
    iconClass: 'gradient-1',
    githubUrl: 'https://github.com/Ajaykumar-M-A',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'Redux Toolkit'],
    metrics: ['Role-based flows', 'Search-ready records', 'Responsive dashboard'],
  },
  {
    title: 'Turf Arena',
    label: 'Featured Project',
    desc: 'A sports venue booking experience for turf discovery, slot management, booking status, and smooth mobile-first scheduling.',
    problem: 'Players and venue owners needed a faster way to view availability, manage bookings, and avoid slot confusion.',
    impact: 'Created a booking-focused interface with clear availability, cleaner user journeys, and admin-friendly management.',
    icon: 'TA',
    iconClass: 'gradient-2',
    githubUrl: 'https://github.com/Ajaykumar-M-A',
    tech: ['React.js', 'Node.js', 'MongoDB', 'Razorpay', 'REST API', 'Mobile UX'],
    metrics: ['Slot booking logic', 'Payment-ready flow', 'Mobile-first UI'],
  },
  {
    title: 'Student Activity App',
    label: 'Mobile System',
    desc: 'A student activity management application with backend APIs, attendance-style workflows, and mobile usability.',
    problem: 'Academic teams needed structured activity tracking with a practical mobile experience.',
    impact: 'Supported cleaner student records, easier activity updates, and maintainable API-backed workflows.',
    icon: 'SA',
    iconClass: 'gradient-3',
    githubUrl: 'https://github.com/Ajaykumar-M-A/Student_app',
    tech: ['Python', 'Django', 'REST API', 'SQLite'],
    metrics: ['API backed', 'Academic workflows', 'Maintainable modules'],
  },
  {
    title: 'Safari Web Experience',
    label: 'Creative UI',
    desc: 'A responsive HTML, CSS, and JavaScript project focused on immersive visuals and interactive layout patterns.',
    problem: 'The goal was to demonstrate creative frontend craft outside dashboard-heavy application work.',
    impact: 'Shows visual experimentation, layout control, and responsive design instincts.',
    icon: 'SW',
    iconClass: 'gradient-4',
    githubUrl: 'https://github.com/Ajaykumar-M-A/Safari',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
    metrics: ['Interactive UI', 'Pure web stack', 'Visual polish'],
  },
]

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Marian College Kuttikkanam Autonomous',
    university: 'Mahatma Gandhi University',
    period: '09/2022 - 03/2024',
    location: 'Idukki, Kerala',
    icon: 'MCA',
  },
  {
    degree: 'Bachelor of Science (Physics)',
    institution: 'Mahatma Gandhi University',
    university: 'Kottayam, Kerala',
    period: '07/2016 - 03/2019',
    location: 'Kottayam, Kerala',
    icon: 'BSc',
  },
]

export const certifications = [
  { name: 'Red Hat Enterprise Linux 8 (RHEL 8) - Linux System Administration', icon: 'RH' },
  { name: 'Deep Learning using TensorFlow', icon: 'AI' },
  { name: 'Python for Data Science (NPTEL)', icon: 'PY' },
]

export const focusAreas = [
  { name: 'Frontend', value: 'Clean interfaces', tone: 'Fast, responsive screens that make daily work easier.' },
  { name: 'Backend', value: 'Reliable APIs', tone: 'Secure logic, clear data flow, and services built to last.' },
  { name: 'Mobile', value: 'Practical apps', tone: 'React Native workflows shaped around real users on the move.' },
]

export const fallingWords = ['React', 'Node', 'MongoDB', 'APIs', 'Auth', 'Booking', 'Dashboards', 'Mobile']
