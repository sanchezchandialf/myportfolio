import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => (
  <Box component="footer" sx={{ textAlign: 'center', py: 2 }}>
    <Typography variant="body2" color="text.secondary" gutterBottom>
      © {new Date().getFullYear()} Mi Portfolio
    </Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1 }}>
      <IconButton
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
      >
        <GitHubIcon />
      </IconButton>
      <IconButton
        href="https://linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <LinkedInIcon />
      </IconButton>
      <IconButton href="mailto:example@example.com" aria-label="Email">
        <EmailIcon />
      </IconButton>
    </Box>
  </Box>
);

export default Footer;
