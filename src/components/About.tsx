import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

const skills = [
  'React',
  'JavaScript',
  'TypeScript',
  '.NET',
  'C#',
  'Entity Framework',
  'SQL Server',
  'Git',
  'REST APIs',
  'Azure DevOps',
];

const About = () => (
  <Box id="about" sx={{ minHeight: '100vh', py: 10 }}>
    <Container maxWidth="lg">
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Typography
              component={motion.h2}
              variant="h4"
              gutterBottom
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Get to know me!
            </Typography>
            <Typography
              component={motion.p}
              variant="h6"
              color="text.secondary"
              gutterBottom
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              I'm a passionate .NET fullstack developer.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              With a strong foundation in C# and the .NET ecosystem, I build
              efficient backends and intuitive frontends using modern
              technologies.
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              I enjoy designing scalable solutions, integrating databases, and
              crafting responsive interfaces that provide seamless user
              experiences.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Stack direction="row" spacing={1} flexWrap="wrap">
              {skills.map((skill) => (
                <Chip key={skill} label={skill} sx={{ m: 0.5 }} />
              ))}
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
    <Box mt={5} />
  </Box>
);

export default About;
