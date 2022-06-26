### Tailwind (UI Kit)
- we wont find dedicated component library as we would in other UI kits 
> we installed tailwind css extension to auto fill our text 

#### Installation and Setup 
[Setup](https://tailwindcss.com/docs/installation)

### 1. Install Tailwind CSS
Install tailwindcss via npm, and create your tailwind.config.js file.

```bash
npm install -D tailwindcss
#this installs tailwindcss devdependency, check in your package.json
npx tailwindcss init
#this creates a tailwindcss.js in your root 
```
### 2. Configure your template paths
Check your `tailwind.config.js` file, which was created with the command above, it has this content inside of it.
> tailwind.config.js
```bash
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
``` 

> tailwind.config.js
```bash
#We'll need to add this file path to content 
/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```
### 3. Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

> src/index.css
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
### 4. Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

> Terminal
```bash
#this is for building an index.css in dist/index.css
#npx tailwindcss -i ./src/index.css -o ./dist/index.css --watch

#this is the right command 
npx tailwindcss -i ./src/index.css -o ./public/index.css --watch
```
> what is `--watch`
as soon as their is a change, it will rebuilt the css file. 

### 5. index.html
Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

> public/index.html
```bash
<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="%PUBLIC_URL%/index.css" rel="stylesheet">
</head>
</html>
```
> App.js
```bash
const App =() =>{
  return (
    <>
  <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
    </>
  );
}

export default App;
```
- before npm run build, we need to run this command on terminal `npx tailwindcss -i ./src/index.css -o ./public/index.css`
- when we run npm run build, it optmises the `public/index.css `file, it will only contain classes that we use

#### Tips
- Tailwind UI is paid, but there are some free component provisions, which we can customize. 
- we can create components using Tailwind 
- you can customize anything, you are not restricted to the components. 
 
### Why did we import index.css in both public and dist ?
- the import in dist was a mistake 
- then dont use that import, in place use the public one 



