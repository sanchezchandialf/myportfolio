import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Hero = () => (
  <Box id="hero" sx={{ textAlign: 'center', py: { xs: 4, md: 8 }, px: 2 }}>
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}
    >
      Welcome to my Portfolio
    </Typography>
    <Button variant="contained">Get Started</Button>
  </Box>
);

export default Hero;
