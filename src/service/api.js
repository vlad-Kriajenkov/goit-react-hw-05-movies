import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YTNmMGExY2FmN2JkNTg2ZjNkYmNkYjM0OGZiZGQyNCIsInN1YiI6IjY0NzBhYjRkNTQzN2Y1MDBlNDIxMzJiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y4Nrz08e1xfrHty7w4hAPcuzOQA6IgCURKYP1zbHNy8',
  },
};

export const getTrending = async () => {
  const response = await axios.request(options);

  return response.data;
};
