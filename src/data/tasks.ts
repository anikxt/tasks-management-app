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
  {
    id: 83746291,
    title: 'Design landing page',
    description:
      'Wireframe and mockup for the new marketing landing page, including mobile breakpoints.',
    dueDate: '2024-09-12',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    id: 91827364,
    title: 'Set up database',
    description:
      'Provision PostgreSQL instance, configure schemas for users, tasks, and activity logs.',
    dueDate: '2024-09-15',
    status: 'In Progress',
    priority: 'High',
  },
  {
    id: 74629183,
    title: 'Auth & permissions',
    description:
      'Implement JWT-based authentication and role-based access for admin vs. regular users.',
    dueDate: '2024-09-17',
    status: 'In Progress',
    priority: 'Medium',
  },
  {
    id: 62918374,
    title: 'Notifications service',
    description:
      'Build a background job for email and in-app notifications when tasks are assigned or updated.',
    dueDate: '2024-09-18',
    status: 'Completed',
    priority: 'Low',
  },
  {
    id: 58392017,
    title: 'Mobile responsiveness',
    description:
      'Ensure all pages render correctly on iOS & Android viewports down to 320px width.',
    dueDate: '2024-09-20',
    status: 'Completed',
    priority: 'Low',
  },
  {
    id: 39284756,
    title: 'Write unit tests',
    description:
      'Cover all data-access and utility functions with Jest, aim for 90% code coverage.',
    dueDate: '2024-09-25',
    status: 'Completed',
    priority: 'High',
  },
  {
    id: 27461530,
    title: 'User settings page',
    description:
      'Profile edit, password change, and notification preferences under one unified UI.',
    dueDate: '2024-09-27',
    status: 'In Progress',
    priority: 'High',
  },
];
