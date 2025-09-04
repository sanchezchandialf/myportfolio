import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const theme = useTheme();

  return (
      <Box
        id="projects"
        sx={{
          py: 5,
          backgroundColor:
            theme.palette.mode === 'dark'
              ? theme.palette.background.default
              : '#f7f9fc',
          color: theme.palette.mode === 'dark' ? '#f1f1f1' : 'inherit',
        }}
      >
        <Container maxWidth="lg">
          <Box mb={4} display="flex" justifyContent="center">
            <Typography
              component={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              align="center"
            >
              ↓ Keep Scrolling ↓
            </Typography>
          </Box>
          {projects.map((project, index) => (
            <Box key={project.title} mb={4}>
              <ProjectCard {...project} isReversed={index % 2 === 1} />
              {index !== projects.length - 1 && <Divider />}
            </Box>
          ))}
        </Container>
      </Box>
  );
};

export default Projects;
