> we imported font awesome CDN for this project in piblic/index.html
```bash 
    <link
      rel="stylesheet"
      href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
      integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
      crossorigin="anonymous"
    />
```

> we implemented state lifting / uplifting
- In usual case, parent component passes data to the child component, 
- however if we want to pass data from child component to child component on the same level, then we lift the data from the child, and place it in the parent component insrtead.

> Implementing indexOf() JS method:
Returns index of the item we want to search
```bash 
indexOf('search item',start)
```

