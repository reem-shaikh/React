### Movies App 
> Libraries used:
- MUI - UI library built specifically for reac. Its a design technology created by Google. 
```bash 
npm install @mui/material @emotion/react @emotion/styled @mui/icons-material
```
- integrating MUI in your react app reduces time to market (from scratch to production)

> Difference between React Native and React JS
- React Native - for natively writing your code; for mobile app development. Android playstore; export sourcecode to JAVA (JS converts to Java) using React Native.

### API used 
- OMDB 
1. create an account
2. they will send the API keys to your registered email address
> so this is the API key, we get, Note that: the significance of `?i=` is explained in these ![Docs](http://www.omdbapi.com/)
```bash 
Here is your key: a96522ba
# OMDB API
http://www.omdbapi.com/?i=tt3896198&apikey=a96522ba
```
> If we want to search a movie based on its moviename we use the `?=s` 
```bash 
https://www.omdbapi.com/?s=avengers&apikey=a96522ba
```

### Router 
#### You can pass links from either of these two approaches:
1. query parameter - import useSearchParams() to use this 
```bash 
http://localhost:3000/detail?id=3u899hie
```
> syntax:
```bash 
let [searchParams, setSearchParams] = useSearchParams()
const value = searchParams.get('key')
{value}
```
2. path parameter - import useParams() to use this (prefferable approach)
```bash 
https://localhost:3000/detail/38939dej
```
> syntax:
```bash 
const params = useParams()
{params.key}

# or use destructuring
const {key} = useParams()
{key}
```