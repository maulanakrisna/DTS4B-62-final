import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import { Box, Button, Stack } from '@mui/material';
import Copyright from '../components/Copyright';
import DarkTheme from '../themes/CorpTheme';
import TheNewsAxios from '../services/api/TheNewsAxios';
import { useGetTopNewsQuery } from '../services/api/TheNewsAPI';
import tmdb from '../apis/tmdb';

const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};

const Blog = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const fetchedMovies = await tmdb.get("trending/movie/week");
              setMovies(fetchedMovies.data.results);
          } catch (error) {
              console.log(error);
          }
      }

      fetchMovies();
  }, []);
  return (
    <ThemeProvider theme={DarkTheme}>
      <CssBaseline />      
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={movies[0]} />
          <Box
            sx={{
              bgcolor: 'background.paper',
              pb: 1,
              pt: 1,
            }}
          >
          </Box>
          <Container maxWidth="lg">
            <Stack
              sx={{ pb: 3 }}
              direction="row"
              spacing={2}
              justifyContent="right"
            >
              <Button variant="outlined">All News</Button>
              <Button variant="outlined">Top News</Button>
            </Stack>
          </Container>
          <Grid container spacing={2}>
            {movies.map((post) => (
              <FeaturedPost key={post.title} post={post} />
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

export default Blog;