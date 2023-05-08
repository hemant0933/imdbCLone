import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const Component = styled(Box)`
      width: 40%
      display: flex;
      flex-direction: column:
      align-items: baseline:
      padding-left: 20px;
      & > p{
        color: #F5C518;
        font-weight: 600;
        font-size: 18px;
        margin-bottom: 10px;
      }
`;

const Poster = styled('img')({
    width:88
});

const Wrapper = styled(Box)`
    color: #ffff;
    display: flex;
    padding-left: 20px;
    margin-bottom:10px;
    &>p{
        margin-left:20px;
        
    }

`;

const UpNext = ({movies}) => {
  return (
    <Component>
      <Typography style={{marginLeft:'10px'}}>
        Up Next
      </Typography>
      {
        movies.splice(0, 3).map(movie => (
            <Wrapper key={Math.floor(Math.random() * 100)}>
                <Poster src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt='poster'/>
                <Typography>{movie.original_title}</Typography>
            </Wrapper>
        ))
      }
    </Component>
  );
}

export default UpNext;
