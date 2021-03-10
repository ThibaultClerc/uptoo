import axios from 'axios';

export default axios.create({
  baseURL: 'http://uptoo.herokuapp.com/api/items',
});
