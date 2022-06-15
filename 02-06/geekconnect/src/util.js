import axios from 'axios'

// const dummyapi = axios.create({
//     baseURL: 'https://some-domain.com/api/',
//     timeout: 1000,
//     headers: {'X-Custom-Header': 'foobar'}
//   });

//   base url: https://dummyapi.io/data/v1/
const dummyapi = axios.create({
  baseURL: 'https://dummyapi.io/data/v1/',
  timeout: 10000,
  headers: {'app-id': process.env.REACT_APP_API_KEY}
});

export {dummyapi};
// named export 