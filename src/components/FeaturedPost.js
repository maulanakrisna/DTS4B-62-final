import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Box, Rating } from '@mui/material';
import { height } from '@mui/system';

const BASE_IMAGE_URL = 'http://image.tmdb.org/t/p/original';

function FeaturedPost(props) {
  const { post } = props;

  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flex'}}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {post.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {new Date(post.release_date).getFullYear()}
            </Typography>
            <Typography     
              sx={{
                display: '-webkit-box',
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 3,
              }}
              variant="subtitle1" paragraph>
              {post.overview}
            </Typography>
            <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Rating name="read-only" precision={0.1} value={post.vote_average / 2} max={5} readOnly />
              <Box sx={{ ml: 2 }}>{post.vote_average.toFixed(1)}</Box>
            </Box>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
            image={`${BASE_IMAGE_URL}${post.poster_path}`}
            alt={''}
          />
        </Card>
      </CardActionArea>
    </Grid>
  );
}

FeaturedPost.propTypes = {
  post: PropTypes.shape({
    release_date: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default FeaturedPost;