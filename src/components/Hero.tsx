import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Hero = () => (
  <Box
    id="hero"
    sx={(theme) => ({
      textAlign: 'center',
      py: { xs: 4, md: 8 },
      px: 2,
      backgroundColor: theme.palette.background.paper,
    })}
  >
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      sx={{ fontSize: { xs: '2rem', md: '3.5rem' } }}
    >
      Welcome to my Portfolio
    </Typography>
    <Stack direction="row" spacing={2} justifyContent="center" sx={{ mt: 2 }}>
      <Button variant="contained" href="#projects">
        Ver proyectos
      </Button>
      <Button
        variant="outlined"
        color="primary"
        href="/cv.pdf"
        target="_blank"
        rel="noopener"
      >
        Descargar CV
      </Button>
    </Stack>
  </Box>
);

export default Hero;
