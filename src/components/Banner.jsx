import { Box,Typography,styled } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  const StyledBanner = styled('img')({
    width: '100%',
  })
  const BannerWrapper = styled(Box)`
     position: absolute !important,
     & > p {
       z-index:100;
     }
  `
const Banner = ({movies}) => {
  return (
   <Box style={{width:'65%'}}>
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
                <BannerWrapper>
                    
                    <StyledBanner 
                        id={Math.floor(Math.random() * 100)} 
                        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                        alt="banner"
                   />
                   <Typography style={{color:'#ffff'}}>{movie.title}</Typography>
                </BannerWrapper>
                
            ))
        }
     
     </Carousel>
   </Box>
  );
}

export default Banner;
