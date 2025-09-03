import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <Box id="projects" sx={{ py: 8, bgcolor: '#f7f9fc' }}>
    <Container maxWidth="lg">
      {projects.map((project, index) => (
        <Box key={project.title} mb={10}>
          <ProjectCard
            {...project}
            isReversed={index % 2 === 1}
          />
          {index !== projects.length - 1 && <Divider />}
        </Box>
      ))}
    </Container>
  </Box>
);

export default Projects;
