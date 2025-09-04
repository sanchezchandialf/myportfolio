import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import IconButton from '@mui/material/IconButton';
import { FiChevronUp as ChevronUp } from 'react-icons/fi';

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      style={{ position: 'fixed', bottom: 16, right: 16, zIndex: 1000 }}
    >
      <IconButton onClick={scrollToTop} color="primary" aria-label="back to top">
        <ChevronUp />
      </IconButton>
    </motion.div>
  );
};

export default BackToTop;
