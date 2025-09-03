import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  isReversed?: boolean;
}

const ProjectCard = ({ title, description, image, url, isReversed = false }: ProjectCardProps) => (
  <Grid
    container
    spacing={2}
    direction={isReversed ? 'row-reverse' : 'row'}
    justifyContent="center"
    alignItems="center"
    component={motion.div}
    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    sx={{ my: 4 }}
  >
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src={image}
        alt={title}
        sx={{ width: '100%', borderRadius: 2 }}
      />
    </Grid>
    <Grid item xs={12} md={6}>
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" paragraph>
        {description}
      </Typography>
      <Button
        variant="contained"
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        VIEW PROJECT
      </Button>
    </Grid>
  </Grid>
);

export default ProjectCard;
