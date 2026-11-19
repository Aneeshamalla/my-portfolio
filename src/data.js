// All page content lives here, so text changes never touch the components.

export const links = {
  github: 'https://github.com/Aneeshamalla',
  linkedin: 'https://www.linkedin.com/in/anisha-malla-277182344/',
  email: 'ansamalley@gmail.com',
  phone: '9843013091',
  cv: '/AnishaMalla_CV.pdf',
}

export const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export const about = [
  "I'm a BCA graduate from Tribhuvan University and a full stack developer. I build frontends with React, Next.js and Tailwind CSS, and backends with Python (FastAPI), Node.js and MySQL.",
  "I recently completed a four-month Full Stack Developer internship at Tech Nirvana, where I worked on three websites. I've also built a RAG backend, a house booking system with ML price prediction and a doctor appointment system.",
  "I enjoy the backend side the most, and I'm currently looking for a full stack or backend developer role.",
]

export const experience = {
  role: 'Full Stack Developer Intern',
  org: 'Tech Nirvana · Bagdol, Lalitpur',
  start: { label: 'Jun 15', datetime: '2026-06-15' },
  end: { label: 'Oct 15, 2026', datetime: '2026-10-15' },
  work: [
    {
      type: 'Company website',
      name: 'Tech Nirvana website',
      desc: "Redesigned multiple pages of the company's official website, rebuilding the frontend with a modern, responsive layout.",
      stack: ['Next.js', 'Tailwind CSS'],
    },
    {
      type: 'Client website',
      name: 'Five Queens',
      desc: 'Built the complete frontend for a responsive website for a sound healing and energy alignment business.',
      stack: [],
    },
    {
      type: 'Client website',
      name: 'Nepal Volleyball Association',
      desc: 'Developed a fully dynamic website for the Nepal Volleyball Association.',
      stack: ['Next.js', 'React', 'JavaScript', 'Tailwind CSS'],
    },
  ],
}

export const featuredProject = {
  title: 'RAG Backend System',
  desc: 'A retrieval-augmented generation backend: upload PDF or TXT documents, then ask questions about them. It keeps chat memory in Redis and includes an LLM-based interview booking system.',
  bullets: [
    'Chunking, SentenceTransformer embeddings and vector search with Pinecone.',
    'Redis for chat memory; LLM-based interview booking.',
    'Fully containerized with Docker and Docker Compose.',
  ],
  tags: ['FastAPI', 'Redis', 'Pinecone', 'SentenceTransformer', 'Docker'],
  github: 'https://github.com/Aneeshamalla/rag-backend',
  pipeline: [
    { step: 'Ingest', note: 'PDF / TXT' },
    { step: 'Chunk', note: 'split text' },
    { step: 'Embed', note: 'SentenceTransformer' },
    { step: 'Store', note: 'Pinecone' },
    { step: 'Query', note: 'FastAPI + Redis' },
  ],
}

export const projects = [
  {
    title: 'House Booking & Price Prediction System',
    kind: 'Major project',
    desc: 'A web app for listing and booking houses, with user, owner and admin panels and full CRUD. A Random Forest Regression model gives real-time price predictions inside the app.',
    tags: ['Random Forest Regression', 'CRUD', 'Role-based panels'],
  },
  {
    title: 'House Price Prediction & Booking System',
    kind: 'Advanced project',
    desc: 'A predictive model for real estate pricing plus a complete booking workflow, served from a FastAPI backend. ML predictions show up in the React frontend as dynamic pricing insights.',
    tags: ['FastAPI', 'React', 'Machine Learning'],
  },
  {
    title: 'Doctor Appointment System',
    kind: 'Minor project',
    desc: 'Online appointment scheduling for doctors and patients, with user authentication, a booking workflow and an admin dashboard for schedules and records.',
    tags: ['Authentication', 'Booking workflow', 'Admin dashboard'],
  },
]

// The first group is the main focus and spans the full row
export const skills = [
  { name: 'Backend', items: ['Python', 'FastAPI', 'Node.js', 'REST APIs'] },
  { name: 'Frontend', items: ['React', 'Next.js', 'JavaScript', 'Tailwind CSS'] },
  { name: 'Database', items: ['MySQL', 'Redis', 'Pinecone'] },
  { name: 'Tools', items: ['Git', 'GitHub', 'Docker'] },
  { name: 'Languages', items: ['Python', 'JavaScript', 'Java'] },
]

export const education = {
  from: '2020',
  to: '2025',
  degree: 'Bachelor of Computer Application (BCA)',
  uni: 'Tribhuvan University (TU)',
  college: 'Advanced College of Engineering and Management, Kalanki, Kathmandu',
}
