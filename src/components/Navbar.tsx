import { useContext } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material/styles';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { ColorModeContext } from '../theme/ColorModeContext';

const Navbar = () => {
  const theme = useTheme();
  const colorMode = useContext(ColorModeContext);
  return (
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
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
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
          <IconButton
            onClick={colorMode.toggleColorMode}
            color="inherit"
            aria-label="toggle color mode"
          >
            {theme.palette.mode === 'dark' ? (
              <LightModeIcon />
            ) : (
              <DarkModeIcon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
