import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Hero = () => (
  <Box
    id="hero"
    sx={(theme) => ({
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      px: 2,
      backgroundColor: theme.palette.background.paper,
    })}
  >
    <Typography
      variant="h2"
      component="h1"
      gutterBottom
      sx={{
        fontWeight: 900,
        fontSize: { xs: '2.5rem', md: '4rem' },
      }}
    >
      HEY, I'M LAUTARO
    </Typography>
    <Typography
      variant="h6"
      sx={{
        maxWidth: '700px',
        color: 'text.secondary',
        mt: 2,
      }}
    >
      I'm a full-stack developer crafting modern web experiences.
    </Typography>
    <Button
      variant="contained"
      color="secondary"
      href="#projects"
      sx={{ mt: 4, px: 5, py: 2 }}
    >
      PROJECTS
    </Button>
  </Box>
);

export default Hero;
