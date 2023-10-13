import axios from 'axios';

export const getTrending = async nameFilter => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/trending/${nameFilter}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };
  const response = await axios.request(options);

  return response.data;
};
export const getTrendingTV = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/tv/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };
  const response = await axios.request(options);

  return response.data;
};

export const getMovieDetails = async movie_id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };

  const response = await axios.request(options);
  return response.data;
};
export const getTVDetails = async tv_id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/tv/${tv_id}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export const getCredits = async id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${id}/credits`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };

  const response = await axios.request(options);
  return response.data;
};

export const searchFilm = async query => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: `${query}`,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };
  const response = await axios.request(options);
  return response.data;
};

export const getReviews = async movie_id => {
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movie_id}/reviews`,
    params: { language: 'en-US', page: '1' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
    },
  };
  const response = await axios.request(options);
  return response.data;
};
