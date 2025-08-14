import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import projects from '../data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => (
  <Box sx={{ p: 4 }}>
    <Grid container spacing={2} justifyContent="center">
      {projects.map((project) => (
        <Grid item key={project.title} xs={12} sm={6} md={4}>
          <ProjectCard {...project} />
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Projects;
