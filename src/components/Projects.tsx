import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <Box id="projects" sx={{ py: 10 }}>
    <Container maxWidth="lg">
      {projects.map((project, index) => (
        <ProjectCard
          key={project.title}
          {...project}
          isReversed={index % 2 === 1}
        />
      ))}
    </Container>
  </Box>
);

export default Projects;
