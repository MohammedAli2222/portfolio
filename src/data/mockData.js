import profilePic from './12.jpg';

// Mock data for portfolio

export const personalInfo = {
  name: "Mohammed Abdulrahman Ali",
  title: "Backend Developer",
  location: "Damascus, Syria",
  email: "semohammed3li@gmail.com",
  phone: "+963 981 617 644",
  github: "https://github.com/MohammedAli2222",
  profileImage: profilePic,
  bio: "Motivated backend developer with hands-on experience in building and optimizing server-side applications using technologies like Laravel, PHP, and SQL. Currently in my 5th year studying Software Engineering and Information Systems at Damascus University, combining robust academic fundamentals with practical problem-solving skills to deliver scalable software solutions."
};

export const skills = {
  backend: [
    { name: "Laravel", level: 90 },
    { name: "PHP", level: 85 },
    { name: "RESTful APIs", level: 90 },
    { name: "MySQL", level: 85 },
    { name: "SQL", level: 80 }
  ],
  tools: [
    { name: "Git & GitHub", level: 85 },
    { name: "Postman", level: 90 },
    { name: "MVC Architecture", level: 85 },
    { name: "Agile Methodology", level: 75 }
  ],
  other: [
    { name: "Java", level: 70 },
    { name: "HTML & CSS", level: 75 },
    { name: "Clean Code", level: 80 },
    { name: "HTTP Protocol", level: 85 },
    { name: "Python", level: 70 }
  ]
};

export const projects = [
  {
    id: 1,
    title: "Complaint Management System",
    description: "A web-based platform designed to streamline the process of submitting, tracking, and resolving complaints efficiently. Built to enhance communication between users and administration.",
    technologies: ["PHP", "MySQL", "HTML/CSS", "JavaScript"],
    features: [
      "Secure user authentication and role-based access control (Admin/User).",
      "Interactive dashboard for administrators to track and update complaint statuses in real-time.",
      "File upload functionality allowing users to attach evidence or documents.",
      "Automated notification system for status updates."
    ],
    duration: "Oct 2023 - Jan 2024",
    github: "https://github.com/MohammedAli2222/complaint-system",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop" // صورة تعكس تحليل البيانات وخدمة العملاء
  },
  {
    id: 2,
    title: "Advanced Banking System",
    description: "A desktop application simulating core banking operations, engineered using strict Object-Oriented Programming principles to ensure robust architecture and secure data handling.",
    technologies: ["Java", "OOP", "MySQL", "JDBC"],
    features: [
      "Comprehensive bank account management (creation, suspension, and deletion).",
      "Secure processing of financial transactions including deposits, withdrawals, and transfers.",
      "Detailed transaction history tracking with receipt generation.",
      "Intuitive graphical user interface (GUI) for easy navigation."
    ],
    duration: "Feb 2024 - Apr 2024",
    github: "https://github.com/MohammedAli2222/Advanced-Banking-System",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop" // صورة تعكس الأنظمة المالية والبنكية
  },
  {
    id: 3,
    title: "Smart Hospital ERP Module",
    description: "A tailored enterprise resource planning module built within the Odoo ecosystem to automate and optimize daily operations for healthcare facilities.",
    technologies: ["Python", "Odoo", "XML", "PostgreSQL"],
    features: [
      "Centralized patient record management and medical history tracking.",
      "Automated appointment scheduling system mapped to doctor availability.",
      "Integrated billing and invoicing for medical services and prescriptions.",
      "Custom reporting tools for hospital administration."
    ],
    duration: "May 2024 - Jul 2024",
    github: "https://github.com/MohammedAli2222/smart-hospital-odoo",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&h=600&fit=crop" // صورة تعكس التكنولوجيا الطبية والمستشفيات
  },
  {
    id: 4,
    title: "Dental Practical Management and Supplies Application (Graduation Project)",
    description: "A comprehensive digital system built with Client-Server architecture to automate the clinical workflow in the Faculty of Dentistry. It seamlessly connects students, instructors, receptionists, and medical store owners, streamlining patient treatment lifecycles and dental supplies procurement.",
    technologies: ["Laravel API", "MySQL", "Sanctum Auth", "RESTful APIs", "Firebase"],
    features: [
      "Strict Role-Based Access Control (RBAC) for diverse users (Students, Instructors, Reception, Store Owners, HODs).",
      "Clinical workflow automation: from patient reception and instructor diagnosis to final student treatment.",
      "Integrated medical marketplace for ordering and tracking new/used dental tools.",
      "Secure medical record management with background archiving for clinical and X-ray images.",
      "Real-time academic progress tracking and instructor evaluation system."
    ],
    duration: "Sep 2024 - Present",
    github: "https://github.com/MohammedAli2222/Graduation-Project",
    image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=800&h=600&fit=crop" // صورة تعكس عيادات ومعدات طب الأسنان
  }
];

export const education = {
  degree: "Bachelor's Degree in Software Engineering and Information Systems",
  institution: "Damascus University",
  duration: "2021 - Present (5th Year)",
  location: "Damascus, Syria"
};

export const languages = [
  { name: "Arabic", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" }
];

export const softSkills = [
  "Communication Skills",
  "Teamwork",
  "Work Under Pressure",
  "Problem Solving",
  "Time Management",
  "Quick Learning"
];