import type { Experience, ProfileCard, SocialLink, TechCategory } from '@/types';

export const techStack: TechCategory[] = [
  {
    title: 'Languages',
    items: [
      { name: 'Java' },
      { name: 'TypeScript' },
      { name: 'JavaScript' },
      { name: 'Go' },
      { name: 'Python' },
      { name: 'SQL' }, // New: Essential for your DB list
    ],
  },
  {
    title: 'Backend Frameworks',
    items: [
      { name: 'Spring Boot' },
      { name: 'Hibernate' },
      { name: 'NestJS' },
      { name: 'Express.js' },
      { name: 'Serverless Framework' },
      { name: 'JUnit / Mockito' }, // New: Shows coding quality
      { name: 'Node.js' }, // New: Good to list explicitly
    ],
  },
  {
    title: 'Cloud & DevOps',
    items: [
      { name: 'AWS Lambda' },
      { name: 'Step Functions' },
      { name: 'EventBridge' },
      { name: 'S3' },
      { name: 'SQS' },
      { name: 'SNS' },
      { name: 'ECS Fargate' },
      { name: 'Kinesis' },
      { name: 'CloudWatch' }, // New: Essential for monitoring AWS
      { name: 'IAM' }, // New: Shows security awareness
      { name: 'Docker' },
      { name: 'Terraform' },
      { name: 'GitLab CI/CD' },
      { name: 'LocalStack' }, // New: Great for testing AWS locally
    ],
  },
  {
    title: 'Databases & Messaging',
    items: [
      { name: 'PostgreSQL' },
      { name: 'MySQL' },
      { name: 'MongoDB' },
      { name: 'DynamoDB' },
      { name: 'Redis' },
      { name: 'RabbitMQ' },
      { name: 'Elasticsearch' }, // New: Pairs well with Kinesis/Log processing
    ],
  },
  {
    title: 'Engineering Culture', // Renamed from "Other" for more impact
    items: [
      { name: 'REST / GraphQL' }, // New: API standards
      { name: 'Microservices' }, // New: Architectural pattern
      { name: 'Event-Driven Design' }, // New: Crucial for your Kinesis exp
      { name: 'Unit & Integration Testing' }, // New: Shows code reliability
      { name: 'Grafana' },
      { name: 'Prometheus' },
      { name: 'Swagger API' },
      { name: 'Git' },
      { name: 'Agile / Scrum' }, // New: Workflow
    ],
  },
];

export const experiences: Experience[] = [
  {
    company: 'Elevation Services',
    role: 'Fullstack Software Developer',
    type: 'Full-time',
    duration: 'June 2024 — Present',
    current: true,
    achievements: [
      'Implemented serverless, event-driven backend services on AWS (Lambda, Step Functions, EventBridge) to orchestrate complex ETL workflows for a major UK retailer, processing 50k+ product updates daily.',
      'Developed robust Java Spring Boot microservices using Nomad to manage core e-commerce domains (Products, Taxonomy, Inventory, Supplier & Location), leveraging Hibernate for efficient ORM and transactional integrity.',
      'Developed a centralized event-processing hub using Java Spring Boot, Nomad clusters and AWS Kinesis. Implemented multithreaded consumers to transform and route high-volume microservice events, significantly improving data consistency across the ecosystem',
      'Implemented Step Function to migrate 25 million stock records from legacy sytems to new microservices, ensuring zero downtime and data integrity during the transition.',
      'Designed and implemented resilient fault-tolerance strategies using Dead Letter Queues (DLQ) and exponential backoff retry mechanisms, ensuring 99.9% data reliability for high-volume supplier feeds.',
      'Extended the Backstage developer portal by writing custom backend plugins in Node.js, automating repository scaffolding and standardizing CI/CD configurations across engineering teams.',
    ],
    skills: ['AWS', 'Java', 'Spring Boot', 'Node.js', 'serverless', 'Backstage', 'React'],
  },
  {
    company: 'Gateway',
    role: 'Software Engineer Intern (Java)',
    type: 'Internship',
    duration: 'Nov 2023 - April 2024',
    achievements: [
      'Designed and developed an automated video generation pipeline using Java, Spring Boot, and FFmpeg to produce high-quality videos at 60 FPS.',
      'Implemented image processing workflows to optimize visual quality and performance during video rendering.',
      'Built a scheduler-driven automation system to publish generated videos to the designated portal every Monday at 12 AM without manual intervention.',
      'Ensured reliable and consistent content delivery through end-to-end automation of video generation and publishing.'
    ],
    skills: ['Java', 'Spring Boot', 'FFmpeg', 'Image Processing', 'Automation', 'Backend Development', 'Scheduling Systems']
  },
  {
    company: 'TatvaSoft',
    role: 'Software Developer Intern',
    type: 'Full-time',
    duration: 'May 2023 — June 2023',
    achievements: [
      'Developed a library management application using the MERN stack with an intuitive Material UI interface, global state management, and REST APIs to handle book inventory, user accounts, and transactions. Improved usability and streamlined operations for library staff and users.',
      'Built and deployed a full-stack internal resource management tool, handling database design in MongoDB and backend logic with Express.js.',
    ],
    skills: ['NestJS', 'TypeScript', 'Redis', 'MongoDB', 'Express.js'],
  },
];

export const profiles: ProfileCard[] = [
  {
    platform: 'GitHub',
    username: 'Theprathamshah',
    link: 'https://github.com/Theprathamshah',
    description: 'Code enthusiast',
  },
  {
    platform: 'LeetCode',
    username: 'itspratham2911',
    link: 'https://leetcode.com/u/itspratham2911/',
    description: '485+ problems solved focusing on Data Structures & Algorithms, and System Design.',
  },
  {
    platform: 'Chess.com',
    username: 'IndicHorseman',
    link: 'https://www.chess.com/member/IndicHorseman',
    description: 'Chess ♟️ — Analytical thinking outside code',
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/Theprathamshah',
    icon: 'github',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/pratham-shah-7924871b9/',
    icon: 'linkedin',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/itspratham2911/',
    icon: 'leetcode',
  },
];
