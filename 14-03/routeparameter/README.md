## Query and Path parameters in HTTP requests 
> You can pass links from either of these two approaches:

1. **Query parameter** - import useSearchParams() to use this
http://localhost:3000/detail?id=3u899hie

> syntax:
```bash
let [searchParams, setSearchParams] = useSearchParams()
const value = searchParams.get('key')
{value}
```
2. **Path parameter** - import useParams() to use this (prefferable approach)
https://localhost:3000/detail/38939dej

> syntax:
```bash
const params = useParams()
{params.key}
```
#### or use destructuring
```bash
const {key} = useParams()
{key}
```