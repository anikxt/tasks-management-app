export type Status = 'Completed' | 'In Progress';

export type Priority = 'High' | 'Medium' | 'Low';

export type Task = {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  status: Status;
  priority: Priority;
};

export const tasks: Task[] = [
  // ... original 7 tasks ...
  {
    id: 46573829,
    title: 'API endpoints',
    description:
      'Create RESTful endpoints for task CRUD operations with proper versioning',
    dueDate: '2024-10-01',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 65748392,
    title: 'Deployment pipeline',
    description:
      'Configure CI/CD pipeline with GitHub Actions for automatic staging deployment',
    dueDate: '2024-10-03',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 12398745,
    title: 'Analytics dashboard',
    description:
      'Build user activity tracking interface with charts and export functionality',
    dueDate: '2024-10-05',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 89012345,
    title: 'UI component library',
    description:
      'Create reusable React components for buttons, modals, and form elements',
    dueDate: '2024-10-07',
    status: 'Completed',
    priority: 'Low',
  },
  {
    id: 23456789,
    title: 'Performance audit',
    description: 'Run Lighthouse tests and optimize critical rendering path',
    dueDate: '2024-10-09',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 67891234,
    title: 'Social login',
    description:
      'Integrate OAuth2 providers (Google, GitHub) for alternative authentication',
    dueDate: '2024-10-11',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 45678901,
    title: 'API documentation',
    description:
      'Generate Swagger/OpenAPI specs and setup Redoc for developer portal',
    dueDate: '2024-10-13',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 78901234,
    title: 'Security audit',
    description: 'Perform vulnerability scanning and implement CSP headers',
    dueDate: '2024-10-15',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 34567890,
    title: 'Error tracking',
    description:
      'Integrate Sentry for real-time error monitoring and reporting',
    dueDate: '2024-10-17',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 90123456,
    title: 'Search functionality',
    description:
      'Implement Elasticsearch integration for task searching and filtering',
    dueDate: '2024-10-19',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 56789012,
    title: 'Localization',
    description:
      'Add i18n support for English, Spanish, and French translations',
    dueDate: '2024-10-21',
    status: 'Completed',
    priority: 'Low',
  },
  {
    id: 43210987,
    title: 'Onboarding flow',
    description: 'Create interactive tutorial for first-time users',
    dueDate: '2024-10-23',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 21098765,
    title: 'Caching layer',
    description: 'Implement Redis caching for frequent database queries',
    dueDate: '2024-10-25',
    status: 'Completed',
    priority: 'High',
  },
  {
    id: 87654321,
    title: 'Code refactoring',
    description: 'Optimize legacy codebase for better maintainability',
    dueDate: '2024-10-27',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 13579246,
    title: 'Monitoring',
    description: 'Set up Prometheus and Grafana for system metrics dashboard',
    dueDate: '2024-10-29',
    status: 'Completed',
    priority: 'High',
  },
  {
    id: 24680175,
    title: 'Payment integration',
    description: 'Implement Stripe API for premium feature subscriptions',
    dueDate: '2024-10-31',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 35793468,
    title: 'Accessibility audit',
    description: 'Ensure WCAG 2.1 AA compliance for all main user flows',
    dueDate: '2024-11-02',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 46808357,
    title: 'Git hooks',
    description: 'Setup pre-commit linting and test-running hooks',
    dueDate: '2024-11-04',
    status: 'In Progress',
    priority: 'Low',
  },
  {
    id: 57924680,
    title: 'Reporting system',
    description: 'Build PDF generation for monthly activity reports',
    dueDate: '2024-11-06',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 68013579,
    title: 'Backup strategy',
    description: 'Implement automated daily database backups to S3',
    dueDate: '2024-11-08',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 79246801,
    title: 'Websockets',
    description: 'Add real-time collaboration features using Socket.io',
    dueDate: '2024-11-10',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 80135792,
    title: 'Dependency updates',
    description: 'Review and update all third-party libraries',
    dueDate: '2024-11-12',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 91357924,
    title: 'Logging system',
    description: 'Implement structured logging with Winston and ELK stack',
    dueDate: '2024-11-14',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 24688013,
    title: 'SEO optimization',
    description: 'Improve meta tags, structured data, and sitemap generation',
    dueDate: '2024-11-16',
    status: 'In Progress',
    priority: 'Low',
  },
  {
    id: 13579240,
    title: 'Data export',
    description: 'Create CSV/JSON export functionality for user data',
    dueDate: '2024-11-18',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 24680135,
    title: 'Beta testing',
    description: 'Coordinate user testing program and feedback collection',
    dueDate: '2024-11-20',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 35792468,
    title: 'Compliance',
    description: 'Ensure GDPR and CCPA compliance for data handling',
    dueDate: '2024-11-22',
    status: 'Completed',
    priority: 'High',
  },
  {
    id: 46801357,
    title: 'User feedback',
    description: 'Implement in-app feedback widget and NPS scoring',
    dueDate: '2024-11-24',
    status: 'In Progress',
    priority: 'Medium',
  },
];
