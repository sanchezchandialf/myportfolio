export type Project = {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
};

const projects: Project[] = [
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and TypeScript.',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/portfolio',
    demo: 'https://example.com/portfolio',
  },
  {
    title: 'Todo App',
    description: 'Simple todo application to track tasks.',
    image: 'https://via.placeholder.com/300x200',
    github: 'https://github.com/username/todo',
    demo: 'https://example.com/todo',
  },
];

export default projects;
