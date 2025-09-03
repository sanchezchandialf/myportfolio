import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box
      component="footer"
      sx={{
        textAlign: 'center',
        py: 2,
        backgroundColor:
          theme.palette.mode === 'dark' ? '#121212' : '#f7f9fc',
        color: theme.palette.mode === 'dark' ? '#f1f1f1' : 'inherit',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} Mi Portfolio
      </Typography>
      <Typography variant="body2">
        Built with React, TypeScript, and Material UI.
      </Typography>
    </Box>
  );
};

export default Footer;
