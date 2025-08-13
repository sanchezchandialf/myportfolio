import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div">
        My Portfolio
      </Typography>
    </Toolbar>
  </AppBar>
);

export default Navbar;
