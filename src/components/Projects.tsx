import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const theme = useTheme();

  return (
    <Box
      id="projects"
      sx={{
        py: 8,
        backgroundColor:
          theme.palette.mode === 'dark' ? '#121212' : '#f7f9fc',
        color: theme.palette.mode === 'dark' ? '#f1f1f1' : 'inherit',
      }}
    >
      <Container maxWidth="lg">
        {projects.map((project, index) => (
          <Box key={project.title} mb={6}>
            <ProjectCard {...project} isReversed={index % 2 === 1} />
            {index !== projects.length - 1 && <Divider />}
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default Projects;
