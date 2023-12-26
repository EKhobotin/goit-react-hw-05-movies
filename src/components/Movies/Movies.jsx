import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FormStyled, Input, SearchBtn } from './Movies.styled';

const SearchBar = () => {
  const [searchMovie, setSearchMovie] = useState('');
  const [, setSearchParams] = useSearchParams();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchMovie) {
      setSearchParams({ search: searchMovie });
    }
  }
  function handleChange(e) {
    setSearchMovie(e.target.value);
  }
  return (
    <>
      <FormStyled onSubmit={handleSubmit}>
        <Input
          type="text"
          name="search"
          placeholder="search query"
          value={searchMovie}
          onChange={handleChange}
        />
        <SearchBtn>Search</SearchBtn>
      </FormStyled>
    </>
  );
};

export default SearchBar;
