import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org',

  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZjM1MzIzZTE0NTNkYTg1ZGE4ZGZjYTBhYTE4ZjJmOCIsInN1YiI6IjY1OGFhNTJhMDcyMTY2NjcyOWE2ZjY3YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9S3WjV4UjaEJoJz6OptdDBIODLhE2U9ptkeW9OXTOr4',
  },
  params: {
    api_key: 'cf35323e1453da85da8dfca0aa18f2f8',
  },
});

export async function getCast(id) {
  const { data } = await api(`/3/movie/${id}/credits`);
  return data;
}

export async function getMovie(id) {
  const { data } = await api(`/3/movie/${id}`);
  return data;
}

export async function getReviews(id) {
  const { data } = await api(`/3/movie/${id}/reviews`);
  return data;
}

export async function getSearchMovie(q) {
  const { data } = await api(`/3/search/movie`, {
    params: {
      query: q,
    },
  });
  return data;
}

export async function getMoviesToday() {
  const { data } = await api('/3/trending/all/day');
  return data;
}
