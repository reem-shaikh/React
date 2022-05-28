#### Pushing react code to netlify 
> custom deploy 
- add a `netlify.toml` file to root directory and add this snippet 
```bash
[[redirects]]
  from = "/*"
  to = "/"
  status = 200
```
- push the folder to custom deply in netlify 