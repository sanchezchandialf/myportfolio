import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
}

const ProjectCard = ({ title, description, image, github, demo }: ProjectCardProps) => (
  <Card>
    <CardMedia component="img" height="140" image={image} alt={title} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" href={github} target="_blank" rel="noopener noreferrer">
        GitHub
      </Button>
      <Button size="small" href={demo} target="_blank" rel="noopener noreferrer">
        Demo
      </Button>
    </CardActions>
  </Card>
);

export default ProjectCard;

