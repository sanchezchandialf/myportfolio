import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Hero = () => (
  <Box sx={{ textAlign: 'center', py: 8 }}>
    <Typography variant="h2" component="h1" gutterBottom>
      Welcome to my Portfolio
    </Typography>
    <Button variant="contained">Get Started</Button>
  </Box>
);

export default Hero;
