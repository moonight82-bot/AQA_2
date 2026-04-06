import axios from 'axios';

export const getPosts = async (token) => {
  const response = await axios.get('/posts', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response;
};
