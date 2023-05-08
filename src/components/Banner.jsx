import { Box,Typography,styled } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

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
    position: relative
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
                <Link style={{textDecoration:'none',color:'white'}}>
                    
                  <BannerWrapper >
                    <StyledBanner
                            id={Math.floor(Math.random() * 100)} 
                            src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} 
                            alt="banner"
                    />
                  </BannerWrapper>
                  <BannerWrapper>
                     <Typography style={{marginTop:'-90px',fontWeight: '500',fontSize: '3.5rem', marginBottom: '0.4rem',textAlign: 'left'}} 
                      variant="h2">{movie.title}</Typography>
                  </BannerWrapper>
                </Link>
                
            ))
        }
     
     </Carousel>
   </Box>
  );
}

export default Banner;
