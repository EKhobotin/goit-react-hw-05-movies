import { StyledBtn } from 'components/Button/Button.styled';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { Outlet, useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import {
  Heading4,
  MovieDetailsInfo,
  MovieImage,
  MovieInfo,
  MovieWrapper,
  NavStyledLink,
  Text,
  TitleMovie,
  WrapperLinks,
} from 'components/MovieDetails/MovieDetails.styled';
import { getMovie } from 'API/api';
const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    async function getMovieDetail() {
      try {
        setIsLoading(true);
        const result = await getMovie(movieId);

        setMovie(result);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getMovieDetail();
  }, [movieId]);
  return (
    <>
      {isLoading && <Audio />}
      <StyledBtn onClick={() => navigate(location.state ?? '/movies')}>
        BACK
      </StyledBtn>
      {movie && (
        <MovieWrapper>
          <MovieDetailsInfo>
            <MovieImage
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={movie.title}
              width="300"
            />
            <MovieInfo>
              <TitleMovie>{movie.title}</TitleMovie>
              <Text>User score - {movie.vote_average.toFixed(1)}/10</Text>
              <Heading4>Overview</Heading4>
              <Text>{movie.overview}</Text>
              <Heading4>Genres</Heading4>
              <Text>{movie.genres.map(el => el.name + ' ')}</Text>
            </MovieInfo>
          </MovieDetailsInfo>
          <WrapperLinks>
            <NavStyledLink to="cast" state={location.state}>
              Cast
            </NavStyledLink>
            <NavStyledLink to="reviews" state={location.state}>
              Reviews
            </NavStyledLink>
          </WrapperLinks>
          <Outlet />
        </MovieWrapper>
      )}
    </>
  );
};

export default MovieDetails;
