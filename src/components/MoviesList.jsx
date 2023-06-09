import { Box, List, ListItem, Typography,styled } from '@mui/material';
import React from 'react';
import { Star } from '@mui/icons-material';

const Banner = styled('img')({
    width:'100%',
})

const Container = styled(List)`
    display: flex; 
    cursor:pointer;
    width:230px;
    flex-direction:column;
`

const MoviesList = ({movies}) => {

  return (
   
        <div style={{display:'flex',flexWrap:'wrap-reverse', justifyContent:'space-between',alignItems:'center'}}>
     {
        movies.map(movie => (
            <Box>
                <Container className='cards' style={{border:'1px solid #7B8FA1',alignItems: 'center',marginBottom:'20px'}}>
                    <ListItem>
                        <Banner src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="poster"/>
                    </ListItem>
                    <ListItem>
                        <Typography>{movie.original_title}</Typography>
                    </ListItem>
                    <ListItem>
                        <Star color="warning"/>
                        <Typography>{movie.vote_average}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography>Release Date - {movie.release_date}</Typography>
                    </ListItem>
                </Container>
            </Box>
        ))
     } 
    </div>
  );
}

export default MoviesList;
