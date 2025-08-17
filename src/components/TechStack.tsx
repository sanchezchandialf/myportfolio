import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { IconType } from 'react-icons';
import {
  SiReact,
  SiTypescript,
  SiVite,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si';

const technologies: { name: string; icon: IconType }[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Vite', icon: SiVite },
  { name: 'Material UI', icon: SiMui },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub', icon: SiGithub },
];

const TechStack = () => (
  <Box id="tech-stack" sx={{ py: 4 }}>
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Habilidades
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {technologies.map(({ name, icon: Icon }) => (
          <Grid item key={name}>
            <Paper
              sx={{
                p: 2,
                bgcolor: 'primary.main',
                color: 'common.white',
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              <Icon size={24} />
              <Typography>{name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TechStack;
