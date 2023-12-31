import { getSearchMovie } from 'API/api';
import SearchBar from 'components/Movies/Movies';
import { StyledList } from 'components/MoviesTodayList/MoviesTodayList.styled';
import { Notify } from 'notiflix';
import React, { useEffect, useState } from 'react';
import { Audio } from 'react-loader-spinner';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    async function getSearch() {
      try {
        setIsLoading(true);
        const query = searchParams.get('search');
        const { results } = await getSearchMovie(query);
        setMovies(results);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    }

    getSearch();
  }, [searchParams]);

  return (
    <>
      <SearchBar />
      {isLoading && <Audio />}
      <StyledList>
        {movies &&
          movies.map(el => {
            return (
              <li key={el.id}>
                <Link to={`${el.id}`} state={location}>
                  {el.title}
                </Link>
              </li>
            );
          })}
      </StyledList>
    </>
  );
};

export default Movies;
