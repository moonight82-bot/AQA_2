import axios from 'axios';

export const loginUser = async () => {
  const response = await axios.post('/login');
  return response.data.token;
};
