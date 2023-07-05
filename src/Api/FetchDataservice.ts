import axios from 'axios';

const requestOptions = {
  url: 'https://648ad79917f1536d65e9cc70.mockapi.io/tweets',
  method: 'GET',
};
const fetchData = async (url: string, method: 'GET' | 'POST') => {
  try {
    const response = await axios.get('');
    console.log('Fetched');
    return response;
  } catch (error) {
    console.log(error.message);
  }
};
