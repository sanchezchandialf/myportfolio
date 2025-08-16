import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;

    emailjs
      .sendForm('service_f667bpy', 'template_96np6vh', form.current, {
        publicKey: '4ayS8Jn7pDakd4cLw',
      })
      .then(
        () => {
          alert('Mensaje enviado con éxito.');
          form.current?.reset();
        },
        () => {
          alert('Hubo un error al enviar el mensaje.');
        },
      );
  };

  return (
    <Box id="contact" sx={{ py: 4 }}>
      <Container maxWidth="sm">
        <Typography variant="h4" component="h2" gutterBottom align="center">
          Contacto
        </Typography>
        <Box component="form" ref={form} onSubmit={handleSubmit} noValidate>
          <TextField
            label="Nombre"
            name="user_name"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Email"
            name="user_email"
            type="email"
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Mensaje"
            name="message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 2 }} fullWidth>
            Enviar
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
