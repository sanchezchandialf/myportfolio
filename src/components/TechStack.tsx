import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const technologies = [
  'React',
  'TypeScript',
  'Vite',
  'Material UI',
  'Node.js',
  'Express',
  'MongoDB',
  'Git',
  'GitHub',
];

const TechStack = () => (
  <Box id="tech-stack" sx={{ py: 4 }}>
    <Container maxWidth="md">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Habilidades
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {technologies.map((tech) => (
          <Grid item key={tech}>
            <Paper sx={{ p: 2, bgcolor: 'primary.main', color: 'common.white', textAlign: 'center' }}>
              {tech}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default TechStack;
