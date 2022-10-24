import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MainFeaturedMovie from '../components/MainFeaturedMovie';
import FeaturedMovie from '../components/FeaturedMovie';
import { Box, Button, Stack } from '@mui/material';
import Copyright from '../components/Copyright';
import DarkTheme from '../themes/CorpTheme';

const mainFeaturedMovie = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredMovies = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.',
    image: 'https://source.unsplash.com/random',
    imageLabel: 'Image Text',
  },
];

export default function Blog() {
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />
      <Container maxWidth="lg">
            <Stack
              sx={{ pb: 3, pt: 3 }}
              direction="row"
              spacing={2}
              justifyContent="left"
            >
              <Button variant="outlined">All News</Button>
              <Button variant="outlined">Top News</Button>
            </Stack>
          </Container>
      <Container maxWidth="lg">
        <main>
          <MainFeaturedMovie post={mainFeaturedMovie} />
          <Box
          sx={{
            bgcolor: 'background.paper',
            pb: 1,
            pt: 1,
          }}
        >
        </Box>
          <Grid container spacing={4}>
            {featuredMovies.map((post) => (
              <FeaturedMovie key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
    </ThemeProvider>
  );
}