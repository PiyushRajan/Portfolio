import type { Project } from "@/app/components/homepage/projects";

export const projectsData: Project[] = [
    {
        id: 1,
        name: 'Erudite Platform',
        description: "Designed and developed the Erudite Onboarding Platform to streamline tutor and teacher onboarding through a structured, interactive learning experience. Implemented secure magic-link authentication with role-based access control to differentiate between Tutor and Teacher workflows. Built structured text and video-based course modules integrated with interactive MCQ assessments that provide instant feedback to enhance engagement and knowledge retention. Developed a real-time progress tracking sidebar to improve user visibility and motivation throughout the onboarding journey. Additionally, created an admin dashboard to monitor user engagement, track completion rates, and manage onboarding performance efficiently, while ensuring a responsive and seamless user experience across devices.",
        tools: ['React', 'Typescript', 'Chakra UI','Redux Toolkit', 'MongoDB','Node.js','Git'],
        role: '',
        
        code: '',
        demo: '',
    },
    {
        id: 2,
        name: 'Bakery Shop E-Commerce Web Application',
        description: 'Developed a e-commerce Bakery Shop web application with seamless RESTful API integration for product listing, user authentication, and order management. Implemented dynamic product search and category-based filtering to enhance user experience and enable efficient product discovery. Built secure authentication workflows and ensured robust form validation for user registration and checkout processes to maintain data integrity and prevent errors. Designed a responsive and intuitive UI to provide a smooth shopping experience across devices, while optimizing performance and ensuring scalable backend communication.',
        tools: ['NextJS', 'TypeScript', 'TailwindCSS','Redux Toolkit' ,'MongoDB', 'Node.js','Git'],
        role: '',
        
        code: '',
        demo: '',
    },
    {
        id: 3,
        name: 'Fruit of the Loom',
        description: "Developed and maintained the Fruit of the Loom (FOTL) e-commerce frontend using Next.js, focusing on building a reusable and scalable component architecture to support long-term maintainability and feature expansion. Resolved critical production bugs to ensure application stability and improve user experience. Implemented performance optimization techniques such as code splitting and lazy loading, resulting in a 30% improvement in load times and significantly reducing regression issues in production.",
        tools: ['NextJS', 'TypeScript', 'TailwindCSS','Redux Toolkit' ,'MongoDB', 'Node.js','Git'],
        role: '',
        code: '',
        demo: '',
    },
];
