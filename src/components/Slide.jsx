import { Typography,styled } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

const StyledBanner = styled('img')({
    'width':'100%',
    'marginTop' : '20px',
})
    

const Title = styled(Typography)`
        color: #ffff;
`;

const Slide = ({movies}) => {
  return (
    <Carousel
    responsive={responsive}
    swipeable={false}
    draggable={false}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    keyBoardControl={true}
 >
    {
        movies.map(( movie ) => ( 
           
           <>
                <StyledBanner 
                    id={Math.floor(Math.random() * 100)} 
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                    alt="banner"
                />
                <Title>{movie.original_title}</Title>
           </>
        ))
    }
 
 </Carousel>
  );
}

export default Slide;
