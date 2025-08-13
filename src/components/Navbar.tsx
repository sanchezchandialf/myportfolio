import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
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
        <Link href="#proyectos" color="inherit" underline="none">
          Proyectos
        </Link>
        <Link href="#contacto" color="inherit" underline="none">
          Contacto
        </Link>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Navbar;
