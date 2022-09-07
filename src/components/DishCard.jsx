import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function DishCard({dish}) {
  return (
    <Card sx={{ maxWidth: 345, m:1 }}>
      <CardMedia
        component="img"
        height="140"
        image={dish.image}
        alt={dish.dishName}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {dish.dishName}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {dish.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Like</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
