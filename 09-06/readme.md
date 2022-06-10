### What is the output? 
```bash
#Its an anonymous function 
#Function in their nature is truthy 
if(0 => 0) {
  console.log('hello')
}
console.log('world')

#output
hello world 
```
- Functions, strings are Truthy in nature
Any datatype that we use its boolean conversion is done through truthy and falsy
```bash
const fn = () => {}

#Functions by default are truthy in nature, so even if you assign it a value of false, it will still take the default value of fn i.e true and print hello  
if(fn){
   console.log('hello')
}
console.log('world')

#output
hello world 
``` 
> Read about truthy and falsy
```bash
const fn = () => false

#Functions by default are truthy in nature (it doesnt matter what is inside of it), so even if you assign it a value of false, it will still take the default value of fn i.e true and print hello  
if(fn){
   console.log('hello')
}
console.log('world')

#output
hello world 
```
```bash
console.log(Nan == Nan)
```
#### NaN
NaN is simply a global object that describes what a not number is or whenever we have a variable that we are attempting to convert to a number and we fail it simply gives us NaN like this:
```bash
const a = parseInt('abcd')
console.log(a)      #NaN

const b = parseInt('abcd')
console.log(b)      #NaN

console.log(a == b) #false
console.log(NaN == NaN) #false 

console.log(a == a) #false

# NaN can be anything, NaN is not a number
# Nan can be a string or any other datatype 
# we dont know whether NaN is a or b or c 
# thats why NaN can never be equal

#to check for Nan use isNaN
#it never compares because of something known as short circuiting

#The isNaN() function is used to check whether a given value is an illegal number or not.
#It returns true if value is a NaN else returns false. 
console.log(isNaN(a)) #true

console.log(undefined == undefined) #true 
```
#### Adding Search functionality and infinite scrolling on each search 
> To add query parameters to the Url 
1. In app.js add a route path for search.js 
2. In header.js add the value of search inside navigate 
3. create Search.js component 
- use useParams hook to set the url 
- if the searchbar is not empty we want to fetch the results based on what the user searched for 
- paste imageList as a state inside here 
- paste imageList component inside Search.js and pass the props to it 
- attach InfiniteScroll component and paste the imageList inside it 
- create a function called loadFunc where it'll take pageNumber as an argumnet pass it to the url 
- Create Home.js which container ImageList.js with its props passed inside infiniteScroll and we remove it from Search.js 

> Search.js
When we change query parameter it never refreshes the page 

Why didnt we do optional chaining in imageCard
imageCard is inside a loop if data is not available then whole array will be empty, 
because array is empty, it will never loop, it will never render image cards 
if there is no data card component would not render, so technically we wont have to use optional chaining 
since optional chaining is responsible for preventing crashes incase the data is undefined. 
but data would never be undefined, since Card would never be undefined

> What happens when you add say 'bootstrap':"^5.1.3" to package.json
Whenever we do npm install it installs everything you entered inside package.json

> To remove errors for hosting we did this 
- changed bootstrap to 5.2 from package.json, then run npm install
- installed specific version of autoprefixer 
```bash
npm install autoprefixer@10.4.5 --save-exact
```
> Webpack is a bundler 
npm run build will create a folder called build inside which it creates html, css, js. it combines all our components and creates a bundled big JS file 

Webpack Takes different modules and bundles together to html, css, js

> Hosting on netlify
- add this in gitignore 
```bash
.env.*
```
- commands
```bash
cd geekster/
mkdir geekgallery
ls -all
git init 
git remote add origin url 
git remote -v #are the origins added or not 
ls -al
git add . 
git commit -m 'added'
git push -u origin master 
```
- while uploading on netlify in advanced build settings you'll need to add both the api keys in the variable 
- remove env-cmd production and staging files from package.json

it shows an error after its deployed 
![](1.PNG)

By adding these files were telling netlify no matter what happens open index.html from the build, at the end of the day the only file we get is index.html thats why its an SPA 

Were telling react to take me to index.html which loads index which loads the Router which shows the Detail component 

It looks like you're using react-router within your site to route between different pages. If that's the case, you'll need to tell Netlify to serve the index.html file for everything, not just the root of the site.

From this netlify blog post

If you choose to use something for routing (like React Router for example), you will need to set up a redirect and rewrite rule for the single page app.

Try adding `/*    /index.html   200` to a _redirects file in your publish directory or the following to your netlify.toml.
```bash
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```
![](https://master--tubular-starship-437664.netlify.app/image/ESaJW74Mh9w)















