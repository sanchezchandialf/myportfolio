import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube, FaBook } from 'react-icons/fa';

const links = [
  { href: 'https://www.linkedin.com', icon: <FaLinkedin /> },
  { href: 'https://twitter.com', icon: <FaTwitter /> },
  { href: 'https://www.youtube.com', icon: <FaYoutube /> },
  { href: 'https://github.com', icon: <FaGithub /> },
  { href: '/cv.pdf', icon: <FaBook /> },
];

const SocialSidebar = () => (
  <Box
    sx={{
      position: 'fixed',
      top: '40%',
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 1,
    }}
  >
    {links.map(({ href, icon }) => (
      <IconButton
        key={href}
        component="a"
        href={href}
        target="_blank"
        rel="noopener"
        color="inherit"
      >
        {icon}
      </IconButton>
    ))}
  </Box>
);

export default SocialSidebar;
