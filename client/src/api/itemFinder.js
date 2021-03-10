import axios from 'axios';

export default axios.create({
  baseURL: 'https://uptoo.herokuapp.com/api/items',
});
