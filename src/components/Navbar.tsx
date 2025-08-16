import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Navbar = () => (
  <AppBar
    position="sticky"
    color="transparent"
    elevation={0}
    sx={{ boxShadow: 'none' }}
  >
    <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Typography variant="h6" component="div">
        Mi Portfolio
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Typography
          component="a"
          href="#projects"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          Proyectos
        </Typography>
        <Typography
          component="a"
          href="#contact"
          sx={{ color: 'inherit', textDecoration: 'none' }}
        >
          Contacto
        </Typography>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
