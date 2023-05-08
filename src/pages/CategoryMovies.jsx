import Header from "../components/Header";

import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useLocation } from "react-router-dom";

import { Box, Typography,Divider } from "@mui/material";
import { styled } from "@mui/material";
import { getCategoryMovies } from "../services/api";
import { POPULAR_API_URL,TOPRATED_API_URL,UPCOMING_API_KEY } from "../constant/constant";
import { moviesType } from "../constant/constant";
import MoviesList from "../components/MoviesList";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const StyledBanner = styled("img")({
    'height': '450px',
    'width': '100%',
})

const Component = styled(Box)`
    width: 80%;
    margin:auto;
`;

const Container = styled(Box)`
    background: #F5F5F5;
    text-align: left;
    padding: 10px;
`;

const CategoryMovies = () => {
  const [movies, setMovies] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const getData = async (API_URL) => {
      let response = await getCategoryMovies(API_URL);
      setMovies(response.results);
    }
    let API_URL;
    if(search.includes('popular')){
        API_URL = POPULAR_API_URL;
    }else if(search.includes('upcoming')){
        API_URL = UPCOMING_API_KEY;
    }else if(search.includes('toprated')){
        API_URL = TOPRATED_API_URL;
    }



    getData(API_URL);
  }, [search]);

  return (
    <>
      <Header />
      <Component>
        <Carousel
          responsive={responsive}
          swipeable={false}
          draggable={false}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
        >
          {movies.map((movie) => (
            <>
              <StyledBanner
                id={Math.floor(Math.random() * 100)}
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt="banner"
              />
              {/* <Title>{movie.original_title}</Title> */}
            </>
          ))}
        </Carousel>
        <Container>
            <Typography>IMDB Charts</Typography>
            <Typography>IMDB {moviesType[search.split('=')[1]]} Movies</Typography>
            <Typography>IMDB Top {movies.length} as rated by regular IMDB voters.</Typography>
            <Divider/>
            <MoviesList movies={movies}/>
        </Container>
      </Component>
    </>
  );
};

export default CategoryMovies;
