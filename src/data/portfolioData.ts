import { Project, Experience, Education, Skill, BlogPost } from '../types/portfolio';

export const personalInfo = {
  name: 'Prakash Reddy Pasham',
  title: 'Software Engineer and Data Science Student',
  tagline: 'Results-driven Software Engineer specializing in scalable backend systems and AI/ML solutions',
  email: 'prakash.reddy9766@gmail.com',
  phone: '+1 (716) 390-8830',
  location: 'Buffalo, NY',
  linkedin: 'https://www.linkedin.com/in/prakash-reddy-pasham',
  github: 'https://github.com/prakashreddy975',
  instagram: 'https://www.instagram.com/prakash_reddy_9710/',
  profileImage: 'https://public.youware.com/users-website-assets/prod/1ab70d67-1670-40cb-a993-a6a044f87701/47a7a7691d33463e871b1c6579ef2071',
  summary: 'Results-driven Software Engineer with 2 years of experience designing and scaling high-performance backend systems for 14M+ users. Expert in Java, Spring Boot, and Kafka, specializing in event-driven microservices architecture and system optimization that has cut infrastructure costs by 30%. Passionate about leveraging AI/ML to solve complex problems and deliver impactful software solutions.',
};

export const experiences: Experience[] = [
  {
    company: 'Paytm (One97 Communications Ltd)',
    position: 'Software Engineer',
    location: 'Noida, India',
    period: 'Jun 2022 – Jun 2024',
    highlights: [
      'Improved system performance and efficiency by integrating Aerospike caching, optimizing Kafka consumers, and enabling asynchronous processing — reducing infrastructure costs by 30% and increasing throughput.',
      'Developed and maintained Spring Boot microservices for billing and consent management, achieving 97.6% API success rate and enabling automated bill-fetch workflows for 14M+ users via event-driven architecture.',
      'Engineered secure, scalable systems by implementing AES-256 encryption across credit card and mobile (postpaid/prepaid) data pipelines (MySQL, Cassandra, Kafka), securing data for 10M+ users in alignment with regulatory standards.',
      'Built reusable infrastructure components, including a centralized encrypted logging module and fault-tolerant scripts that encrypted and migrated 15M+ legacy records with zero downtime.',
      'Established full-stack monitoring and alerting using Prometheus and Grafana, deploying real-time dashboards and automated alerts that reduced incident response time by 40% and enhanced production stability.',
      'Collaborated with cross-functional teams to troubleshoot production issues, enhance feature rollouts, and streamline CI/CD pipelines using tools like Git, JIRA, and internal deployment frameworks, resulting in faster delivery and reduced deployment errors.',
    ],
  },
];

export const education: Education[] = [
  {
    institution: 'University at Buffalo, The State University of New York',
    degree: 'Master of Professional Studies in Data Science and Applications',
    location: 'Buffalo, NY',
    period: 'Dec 2025',
    gpa: '3.96/4.0',
    courses: ['Machine Learning', 'Database Management System', 'Data Mining'],
  },
  {
    institution: 'Indian Institute of Technology Tirupati (IITTP)',
    degree: 'Bachelor of Technology in Electrical Engineering',
    location: 'Tirupati, India',
    period: 'Jul 2022',
    courses: ['Data Structures', 'Machine Learning for Image Processing', 'AI', 'Deep Learning', 'Signals and Systems'],
  },
];

export const skills: Skill[] = [
  {
    category: 'Languages',
    items: ['Python', 'C', 'C++', 'C#', 'Java', 'JavaScript', 'SQL', 'R', 'ReactJS'],
  },
  {
    category: 'Backend',
    items: ['Spring Boot', 'REST APIs', 'Microservices', 'Node.js'],
  },
  {
    category: 'Databases',
    items: ['MySQL', 'PostgreSQL', 'MongoDB', 'Cassandra'],
  },
  {
    category: 'AI & Machine Learning',
    items: ['TensorFlow', 'PyTorch', 'Keras', 'Scikit-learn', 'Pandas'],
  },
  {
    category: 'Cloud & DevOps',
    items: ['AWS (EC2, S3)', 'Docker', 'Apache Kafka', 'Git', 'JIRA', 'CI/CD'],
  },
  {
    category: 'Tools and Platforms',
    items: ['Git', 'Linux', 'Oracle APEX', 'JIRA', 'Agile Methodologies', 'Tableau'],
  },
];

export const projects: Project[] = [
  {
    id: 'ecommerce-fraud',
    title: 'E-Commerce Fraud Detection System',
    description: 'Event-driven microservices application for processing high-volume orders while preventing real-time fraud',
    technologies: ['Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Cassandra', 'Microservices'],
    highlights: [
      'Architected full-stack, event-driven microservices application',
      'Developed decoupled system for ordering, payment, and inventory',
      'Implemented fraud service that automatically flags suspicious activity',
      'Enhanced system resilience and security',
    ],
    period: 'Jan 2025 – Present',
    github: 'https://github.com/prakashreddy975/MyEcommerce' 
  },
  {
    id: 'mediaid',
    title: 'MediAid: Medical Document Processing and Retrieval',
    description: 'AI-powered system to process medical documents and facilitate a Retrieval-Augmented Generation (RAG) system for queries',
    technologies: ['Python', 'Jupyter', 'Sentence Transformers', 'RAG', 'NLP'],
    highlights: [
      'Extracts and cleans text from PDF medical documents',
      'Utilizes a Sentence Transformer model for semantic embedding of medical text',
      'Enables semantic search to find clinically relevant information',
      'Designed as a foundational component for a medical RAG system',
    ],
    period: 'May 2025 – Jun 2025',
    github: 'https://github.com/prakashreddy975/MediAid' 
  },
  {
    "id": "workforceanalytics",
    "title": "Workforce Analytics",
    "description": "Analyzed a comprehensive employee dataset to identify key trends in performance, retention, and workforce composition, providing actionable insights for organizational decision-making.",
    "technologies": ["Python", "SQL", "SQLite", "Pandas", "Seaborn", "Matplotlib", "Streamlit"],
    "highlights": [
      "Performed data wrangling, including imputing missing values with the median and handling outliers using the IQR method.",
      "Engineered new features such as 'Age Group' and 'Bonus Percentage' to enhance analytical depth.",
      "Designed and implemented a relational database in SQLite, normalizing the schema to 3NF to ensure data integrity.",
      "Developed an interactive dashboard with Streamlit, featuring dynamic filters and visualizations to present key findings on workforce dynamics."
    ],
    period: 'Aug 2024 – Dec 2024',
    github: 'https://github.com/prakashreddy975/EAS_Project' 
  },
  {
    id: 'pool-management',
    title: 'Swimming Pool Management System (DBMS)',
    description: 'Full-stack management application to eliminate scheduling conflicts and streamline operations',
    technologies: ['Oracle APEX', 'SQL', 'Database Design', 'Web Development'],
    highlights: [
      'Designed comprehensive relational database',
      'Developed user-friendly web interface',
      'Centralized all operational data',
      'Eliminated booking errors and streamlined workflow',
    ],
    period: 'Aug 2024 – Dec 2024',
  },
  {
    id: 'age-of-info',
    title: 'Age of Information in Networks',
    description: 'Research on data freshness in real-time IoT systems to ensure optimal data transmission',
    technologies: ['Python', 'Network Simulation', 'IoT', 'Research'],
    highlights: [
      'Investigated "Age of Information" (AoI) metric for data freshness',
      'Developed Python-based simulation for network access methods',
      'Identified optimal transmission strategies',
      'Achieved 15% reduction in data latency and 10% improvement in network efficiency',
    ],
    period: 'Jul 2021 – Jul 2022',
  },
  {
    id: 'satellite-classification',
    title: 'Satellite Image Classification Using Deep Learning',
    description: 'Deep learning pipeline to automate classification of satellite imagery for land use analysis',
    technologies: ['TensorFlow', 'Keras', 'Deep Learning', 'Computer Vision', 'Python'],
    highlights: [
      'Designed and trained Unet++ semantic segmentation model',
      'Implemented robust image preprocessing and data augmentation',
      'Achieved 92% classification accuracy',
      'Provided scalable tool for automated environmental monitoring',
    ],
    period: 'May 2021 – Aug 2021',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 'microservices-kafka',
    title: 'Building Event-Driven Microservices with Kafka',
    excerpt: 'Learn how to design and implement scalable event-driven microservices using Apache Kafka for high-throughput systems.',
    date: '2025-09-10',
    readTime: '2 min read',
    tags: ['Microservices', 'Kafka', 'Backend', 'Architecture'],
    blog_content:`

    <p>In today's digital landscape, applications are expected to be responsive, resilient, and scalable. Traditional monolithic architectures often struggle under the load of millions of users, leading to performance bottlenecks and deployment nightmares. The solution? A shift in paradigm towards <strong>Event-Driven Architecture (EDA)</strong>.</p>
    <br>
    <p>During my time as a Software Engineer at Paytm, I had the firsthand experience of developing and scaling systems for over 14 million users. This journey taught me the immense power of EDA. In this post, I'll walk you through the core concepts and how you can implement them using two powerhouse technologies: <strong>Spring Boot</strong> and <strong>Apache Kafka</strong>.</p>
    <br>
    <h3><strong>What is Event-Driven Architecture?</strong></h3>
    <p>At its core, EDA is a model where services communicate by producing and consuming <strong>events</strong>. An event is a significant change in state—an order placed, a payment processed, a user profile updated.</p>
    <p>Instead of one service directly calling another (a synchronous, tightly-coupled approach), services in an EDA are decoupled. A service produces an event and sends it to an event broker, like Kafka. Other services can then subscribe to these events and react accordingly, all without knowing anything about the producer. This decoupling is the magic ingredient.</p>
    <br>

    <h3><strong>The Key Players: Spring Boot and Apache Kafka</strong></h3>
    <h4>1. Spring Boot: The Bedrock for Microservices</h4>
    <p>For building the services themselves, Spring Boot is an unparalleled choice in the Java ecosystem. Its convention-over-configuration approach allows for the rapid development of robust, production-ready microservices.</p>
    <h4>2. Apache Kafka: The Indestructible Nervous System</h4>
    <p>Kafka is more than just a message queue; it's a distributed event streaming platform. Think of it as a highly durable, fault-tolerant log where events are stored, capable of handling trillions of events per day with low latency.</p>
    <br>

    <h3>A Practical Example: <strong>Automated Bill-Fetch Workflows</strong></h3>
    <p>Let's imagine a billing system similar to the one I worked on. When a user's monthly bill is generated, the <strong>Billing Service</strong> doesn't directly call other services. Instead, it produces a \`BillGeneratedEvent\`.</p>
    <ol>
      <li><strong>Producer (Billing Service):</strong> A Spring Boot application publishes the event to a Kafka topic called \`billing-events\`.</li>
      <li><strong>Event Broker (Kafka):</strong> Kafka receives this event and stores it durably.</li>
      <li><strong>Consumers (Subscribers):</strong>
        <ul>
          <li>The <strong>Notification Service</strong> consumes the event and sends an email to the user.</li>
          <li>The <strong>Analytics Service</strong> consumes it to update financial dashboards.</li>
          <li>An <strong>Archiving Service</strong> consumes it to store a record for compliance.</li>
        </ul>
      </li>
    </ol>
    <p>All these consumers operate independently. This architecture was key to achieving a 97.6% API success rate and enabling automated workflows for our massive user base, demonstrating the power of resilience and scalability in a real-world scenario.</p>
  `
  },
  {
    id: 'spring-boot-optimization',
    title: 'Optimizing Spring Boot Applications for Production',
    excerpt: 'Practical tips and techniques for optimizing Spring Boot applications to handle millions of requests efficiently.',
    date: '2025-08-26',
    readTime: '2 min read',
    tags: ['Spring Boot', 'Java', 'Performance', 'Optimization'],
    blog_content: `
      <p>Building a Spring Boot application that works is one thing. Building one that remains fast, resilient, and cost-effective under the pressure of 14 million users is another challenge entirely. At Paytm, we faced this exact scenario. By focusing on targeted performance optimizations, we were not only able to increase throughput but also achieve a significant <strong>30% reduction in infrastructure costs</strong>.</p>
      <br>
      <p>Performance optimization isn't a single magic bullet; it's a series of strategic improvements. Here are three of the most impactful techniques we used.</p>
      
      <br>
      <h3>1. Supercharge Response Times with Caching (Aerospike)</h3>
      <p>Database calls are often the biggest bottleneck. An effective caching strategy is the first line of defense. For high-throughput, low-latency requirements, an in-memory database like <strong>Aerospike</strong> is a game-changer. By integrating Aerospike, we dramatically reduced the load on our primary databases for read-heavy operations, leading to faster API response times and a more stable system overall.</p>
      
      <br>
      <h3>2. Decouple Workflows with Asynchronous Processing</h3>
      <p>Not every task needs to happen instantly. Spring Boot makes background processing incredibly simple with the <strong>\`@Async\`</strong> annotation. By annotating a method with \`@Async\`, you tell Spring to execute it in a separate thread. The initial request thread is freed up immediately to handle other incoming requests. By offloading non-critical tasks like sending notifications to background threads, we increased our main application's throughput and improved the perceived performance for the end-user.</p>
      
      <br>
      <h3>3. Tame Your Event Streams: Optimize Kafka Consumers</h3>
      <p>In an event-driven architecture, an inefficiently configured Kafka consumer can become a bottleneck. Key optimization strategies include:</p>
      <ul>
        <li><strong>Batch Processing:</strong> Configure your listener to consume a batch of messages at once to reduce overhead.</li>
        <li><strong>Concurrency:</strong> Increase consumer threads to allow for parallel processing of messages.</li>
        <li><strong>Manual Commits:</strong> For critical operations, switch to manual commits to ensure an event is only marked as processed after the entire business transaction is successfully completed, preventing data loss.</li>
      </ul>
      
      <h3>Conclusion</h3>
      <p>Optimizing a production system is a continuous process, but focusing on these three areas—caching, asynchronous processing, and event consumer tuning—provides the biggest return on investment. For our systems at Paytm, these weren't just theoretical improvements; they were the key strategies that allowed us to scale gracefully while making our infrastructure more efficient and cost-effective.</p>
    `
  },
  {
    id: 'deep-learning-satellite',
    title: 'Deep Learning for Satellite Image Classification',
    excerpt: 'A comprehensive guide to building semantic segmentation models for satellite imagery using TensorFlow and Keras.',
    date: '2025-07-05',
    readTime: '2 min read',
    tags: ['Deep Learning', 'Computer Vision', 'TensorFlow', 'AI'],
    blog_content: `
      <p>Manual analysis of satellite imagery for land use classification is a slow, error-prone, and expensive process. To address this, I engineered a deep learning pipeline to automate the task, providing a scalable and highly accurate tool for environmental monitoring.</p>
      <br>

      <h3>The Challenge: <strong>From Pixels to Insights</strong></h3>
      <p>The goal was to take a raw satellite image and automatically classify each pixel into categories like 'forest', 'water', 'urban', or 'agriculture'. This task is a form of <strong>semantic segmentation</strong>.</p>
      <br>

      <h3>The Solution: <strong>A Unet++ Deep Learning Pipeline</strong></h3>
      <p>I chose the <strong>Unet++</strong> architecture, an advanced image segmentation model known for its precise object delineation. The entire pipeline was built using Python with <strong>TensorFlow</strong> and <strong>Keras</strong>.</p>
      <br>

      <h4>1. <strong>Image Preprocessing</strong></h4>
      <p>Raw satellite images are massive and often contain noise. The first step involved normalizing pixel values, resizing images to a standard dimension, and splitting them into training and validation sets.</p>
      <br>

      <h4>2. <strong>Data Augmentation</strong></h4>
      <p>To make the model more robust and prevent overfitting, I implemented several data augmentation techniques. This involves creating new training data by applying random transformations to the existing images, such as rotations, flips, and brightness adjustments. This teaches the model to recognize features regardless of their orientation or lighting conditions.</p>
      <br>

      <h4>3. <strong>Model Training</strong></h4>
      <p>The Unet++ model was trained on the preprocessed and augmented dataset. We monitored the validation accuracy and loss throughout the training process to ensure the model was learning effectively without memorizing the training data.</p>
      <br>

      <h3>The Result: <strong>92% Accuracy</strong></h3>
      <p>The final trained model achieved a <strong>92% classification accuracy</strong> on unseen test data. This high level of accuracy demonstrates the power of deep learning to automate complex analytical tasks that were once exclusively manual. The resulting system provides a powerful, scalable tool for everything from urban planning to tracking deforestation.</p>
    `
  },
  {
    id: 'data-encryption-security',
    title: 'Implementing AES-256 Encryption in Distributed Systems',
    excerpt: 'Best practices for securing sensitive data at scale using AES-256 encryption in microservices architectures.',
    date: '2025-04-10',
    readTime: '2 min read',
    tags: ['Security', 'Encryption', 'Backend', 'Best Practices'],
    blog_content:  `
    <p>In any system handling user information, particularly financial data, security is not a feature—it's a foundational requirement. When engineering systems for over 10 million users at Paytm, implementing robust, end-to-end encryption was a top priority to protect user data and align with regulatory standards.</p>
    <br>

    <h3><strong>The Standard: AES-256 Encryption</strong></h3>
    <p><strong>Advanced Encryption Standard (AES) with a 256-bit key</strong> is the gold standard for symmetric encryption. It's considered computationally secure against brute-force attacks, making it the choice for governments and security-conscious organizations worldwide.</p>
    <br>

    <h3><strong>Securing Data Across the Entire Pipeline</strong></h3>
    <p>Encrypting data isn't just about the database. In a distributed, event-driven system, data travels through multiple points, and each must be secured. Our approach involved encrypting sensitive data (like credit card details and mobile numbers) at every stage of its lifecycle.</p>
    <br>

    <h4>1.<strong>Data at Rest (Databases)</strong></h4>
    <p>For our primary databases, including <strong>MySQL</strong> and <strong>Cassandra (NoSQL)</strong>, we implemented application-level encryption. Before any sensitive data was written to the database, it was encrypted using a centralized encryption service. This ensures that even if the database itself were compromised, the data would remain unreadable gibberish.</p>
    <br>

    <h4>2. <strong>Data in Transit (Event Streams)</strong></h4>
    <p>Data flowing through <strong>Apache Kafka</strong> topics was also encrypted. The message payload itself was encrypted before being produced to Kafka. Consuming services would then decrypt the message after receiving it. This protects the data as it moves between microservices.</p>
    <br>

    <h3><strong>Building Reusable Security Components</strong></h3>
    <p>To ensure consistency and reduce development overhead, we built a <strong>centralized encrypted logging module</strong>. This reusable component allowed any service to log information securely without developers having to re-implement encryption logic. It provided a standardized way to handle sensitive data in logs, which is crucial for both debugging and security audits.</p>
    <br>
    <p>By implementing AES-26 encryption across the entire data pipeline, we engineered a secure and scalable system capable of protecting the sensitive information of millions of users, building trust and ensuring compliance.</p>
  `
  },
  {
    id: 'monitoring-prometheus',
    title: 'Full-Stack Monitoring with Prometheus and Grafana',
    excerpt: 'Setting up comprehensive monitoring and alerting systems for production microservices using Prometheus and Grafana.',
    date: '2025-03-20',
    readTime: '2 min read',
    tags: ['DevOps', 'Monitoring', 'Prometheus', 'Grafana'],
    blog_content: `
      <p>In a complex microservices environment, you can't fix what you can't see. When services fail, the ability to rapidly detect, diagnose, and resolve the issue is critical. At Paytm, we established a full-stack monitoring and alerting system using <strong>Prometheus</strong> and <strong>Grafana</strong>, which enhanced our production stability and <strong>reduced incident response time by 40%</strong>.</p>
      <br>

      <h3><strong>The Tools of the Trade</strong></h3>
      <h4>1.<strong> Prometheus: The Data Collector</strong></h4>
      <p>Prometheus is an open-source monitoring system with a time-series database. It works on a "pull" model, meaning it periodically scrapes metrics (like API success rates, request latency, CPU usage) from configured endpoints on your microservices. Spring Boot applications can easily expose these metrics using the Actuator and Micrometer libraries.</p>
      <br>

      <h4>2. <strong>Grafana: The Visualization Engine</strong></h4>
      <p>Grafana is the visualization layer that sits on top of Prometheus. It allows you to query the data stored in Prometheus and build powerful, real-time dashboards. You can create graphs, gauges, and tables to get an at-a-glance view of your entire system's health.</p>
      <br>

      <h3>What to Monitor: <strong>The Four Golden Signals</strong></h3>
      <p>A great starting point for any monitoring system is Google's "Four Golden Signals":</p>
      <ul>
        <li><strong>Latency:</strong> The time it takes to serve a request.</li>
        <li><strong>Traffic:</strong> How much demand is being placed on your system (e.g., requests per second).</li>
        <li><strong>Errors:</strong> The rate of requests that are failing.</li>
        <li><strong>Saturation:</strong> How "full" your service is (e.g., CPU, memory utilization).</li>
      </ul>
      <br>

      <h3><strong>From Dashboards to Actionable Alerts</strong></h3>
      <p>Dashboards are great for observing trends, but you also need to be notified immediately when something goes wrong. We configured <strong>automated alerts</strong> in Grafana based on predefined thresholds. For example:</p>
      <ul>
        <li>If the API error rate exceeds 2% for more than 5 minutes, send an alert to the on-call engineering team's PagerDuty.</li>
        <li>If a service's CPU utilization is above 90% for 10 minutes, trigger a notification.</li>
      </ul>
      <p>By establishing this robust monitoring and alerting pipeline, we moved from a reactive to a proactive approach to system health. We could often detect issues before they impacted users, leading to a more stable platform and a more efficient on-call process.</p>
    `
  },
  {
    id: 'database-migration',
    title: 'Zero-Downtime Database Migration Strategies',
    excerpt: 'Strategies and techniques for migrating millions of records with zero downtime in production environments.',
    date: '2025-03-20',
    readTime: '2 min read',
    tags: ['Database', 'Migration', 'DevOps', 'Best Practices'],
    blog_content: `
      <p>"We need to migrate the database." These are some of the most feared words for any engineer working on a live, high-traffic application. A poorly executed migration can lead to data loss, corruption, and significant downtime. At Paytm, we faced the challenge of encrypting and migrating over <strong>15 million legacy records</strong> without any service interruption.</p>
      <br>
      <p>Achieving a zero-downtime migration requires careful planning and a robust strategy. Here’s a high-level overview of the approach.</p>
      
      <br>
      <h3>The Strategy: <strong>Parallel and Phased Migration</strong></h3>
      <p>The core principle of a zero-downtime migration is to never take the old system offline until the new system is fully verified and ready to take over. This is often achieved by running both systems in parallel for a period.</p>
      <br>

      <h4>Phase 1: <strong>Build the New and Sync the Data</strong></h4>
      <ol>
        <li><strong>Set up the new database/table schema.</strong> This is the target state you want to migrate to.</li>
        <li><strong>Develop a fault-tolerant migration script.</strong> This script is the heart of the operation. It needs to be idempotent (can be run multiple times without causing issues) and resumable (can pick up where it left off if it fails).</li>
        <li><strong>Start a "dual-write" process.</strong> Modify the application so that any new data or updates are written to <em>both</em> the old and the new database simultaneously. This ensures that while the legacy data is being migrated, you aren't falling behind on new data.</li>
      </ol>
      <br>

      <h4>Phase 2: <strong>The Bulk Migration</strong></h4>
      <ol>
        <li><strong>Run the migration script in the background.</strong> The script reads data from the old database, transforms it (in our case, encrypts it), and writes it to the new database. This is done in manageable chunks to avoid overwhelming the system.</li>
        <li><strong>Continuous Verification.</strong> Throughout the process, run verification jobs that compare data between the old and new systems to ensure consistency and integrity.</li>
      </ol>
      <br>

      <h4>Phase 3: <strong>The Switchover</strong></h4>
      <ol>
        <li><strong>Shift reads to the new database.</strong> Once the bulk migration is complete and the dual-write process has been stable, you can start directing read traffic from your application to the new database. Monitor performance and error rates closely.</li>
        <li><strong>The Final Cut.</strong> After a period of stability, you can confidently turn off the dual-write process and decommission the old database. The migration is complete—with zero downtime.</li>
      </ol>
      <br>
      <p>This phased approach mitigates risk at every step. While complex, it's an essential strategy for evolving the architecture of critical systems without impacting the end-user experience.</p>
    `
  },
];
