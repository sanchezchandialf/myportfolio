import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

const About = () => (
  <Box id="about" sx={{ py: 4 }}>
    <Container maxWidth="sm">
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Sobre mí
      </Typography>
      <Typography variant="body1" align="center">
        Soy un desarrollador web apasionado por crear experiencias digitales
        simples y efectivas.
      </Typography>
    </Container>
  </Box>
);

export default About;
