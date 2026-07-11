export const projects = [
  {
    id: 'ticket-trace',
    title: 'Ticket Trace Management System',
    description:
      'A full-stack IT support ticketing platform that lets teams log, assign, and track issues from submission to resolution, with role-based dashboards for agents and admins.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    tags: ['Java', 'Spring Boot', 'MySQL', 'React', 'Tailwind CSS'],
    features: [
      'Role-based access for admins, agents, and requesters',
      'Real-time ticket status tracking and history logs',
      'Automated email notifications on ticket updates',
      'Analytics dashboard with resolution-time metrics',
    ],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    id: 'food-ordering',
    title: 'Food Ordering System',
    description:
      'An online food ordering web app for restaurants, featuring live menu management, cart checkout, and order tracking for both customers and kitchen staff.',
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    tags: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'Bootstrap'],
    features: [
      'Dynamic menu with categories and search',
      'Cart, checkout, and order history for customers',
      'Kitchen-facing order queue with status updates',
      'Admin panel for menu and inventory management',
    ],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    id: 'e-wallet',
    title: 'E-Wallet System',
    description:
      'A secure digital wallet application supporting balance top-ups, peer-to-peer transfers, and transaction history with encrypted authentication.',
    image:
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop',
    tags: ['Java', 'Spring Boot', 'REST API', 'MySQL', 'JavaScript'],
    features: [
      'Secure user authentication and encrypted transactions',
      'Peer-to-peer fund transfers with instant confirmation',
      'Detailed transaction history and statement export',
      'REST API layer for third-party integrations',
    ],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
  {
    id: 'portfolio-site',
    title: 'Portfolio Website',
    description:
      'This very site — a performance-optimized, animated developer portfolio built with React, Tailwind CSS, and Framer Motion to present projects and experience.',
    image:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop',
    tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    features: [
      'Fully responsive, mobile-first layout',
      'Smooth scroll-triggered animations',
      'Accessible, keyboard-navigable components',
      'Optimized for fast load and high Lighthouse scores',
    ],
    github: 'https://github.com/',
    demo: 'https://example.com/',
  },
]
