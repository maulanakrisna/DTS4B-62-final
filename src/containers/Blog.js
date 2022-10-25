import React, { useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import MainFeaturedPost from '../components/MainFeaturedPost';
import FeaturedPost from '../components/FeaturedPost';
import { Box, Button, Pagination, PaginationItem, Stack } from '@mui/material';
import Copyright from '../components/Copyright';
import tmdb from '../apis/tmdb';
import { useSearchParams } from 'react-router-dom';


const Blog = () => {
  const [queryParams, setQueryParams] = useSearchParams();
  const [moviesReady, setMoviesReady] = useState(false)
  const [movies, setMovies] = useState([]);

  useEffect(() => {
      const fetchMovies = async () => {
          try {
              const fetchedMovies = await tmdb.get("trending/movie/week");
              setMovies(fetchedMovies.data.results);
              setMoviesReady(true);
          } catch (error) {
              console.log(error);
          }
      }

      fetchMovies();
  }, []);

  useEffect( () => {
    if (!moviesReady) return;
    const sortMovies = (type) => {
      if (type === 'asc'){
        const sortedMovies = [...movies].sort((a, b) => a.vote_average - b.vote_average);
        setMovies(sortedMovies);
      }
      if (type === 'desc'){
        const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);
        setMovies(sortedMovies);
      }
    }

    sortMovies(queryParams.get('sort'));

  }, [queryParams, moviesReady]);

  const setSortParam = (type) => {
    queryParams.set("sort", type);
    setQueryParams(queryParams);
  };

  return (
    <>
      <CssBaseline />      
      <Container maxWidth="lg">
        <main>
          {/* <MainFeaturedPost post={movies[0]} /> */}
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
              <Button variant="outlined" onClick={() => setSortParam("asc")}>ASC</Button>
              <Button variant="outlined" onClick={() => setSortParam("desc")}>DSC</Button>
            </Stack>
          </Container>
          <Grid container spacing={2}>
          {/* <Pagination 
            count={10} 
            variant="outlined" 
            color="primary" 
            shape="rounded"
            showFirstButton
            showLastButton
            renderItem={movies.map((post) => (
     
              <PaginationItem  
                components={<FeaturedPost key={post.title} post={post} />} />
         
            ))}
          /> */}
            {movies.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
        </main>
      </Container>
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Copyright />
      </Box>
    </>
  );
}

export default Blog;