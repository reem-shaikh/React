### Why React?
- to create SPA which is much more efficient
- React is fast and is easy because things are broken down into components 
- uses virtual DOM which only updates the node that is updated (reload only part off the page without refreshing the whole page)

> Usually, when were creating apps in say html, then to create multiple pages we need to copy paste multiple times, we need to implement reusability factor, 

Native HTML had no way to implement reusibility, thats when components were introduced to fix this issue.

we could do it using <iframe>, but it has a limitation where child component cannot interact with the parent component.

### NPM Vs NPX 
- NPM installs entire project in the system
- NPX allows us to import a particular library, instead of storing the entire project in the system. 

### devDependencies Vs Dependencies 
### What are dependencies?
A dependency is just a package that your project uses.

Very few javascript projects are entirely self-contained. When your project needs code from other projects in order to do its thing, those other projects are "dependencies"; your project depends on them to run.

When you install third-party packages via npm install <package>, you're adding a dependency. Your project's package.json file includes a list of your project's dependencies.

> npm install without specifying a package name will install the dependencies in your package.json.
```bash 
npm install "packagename"
✅this command adds package to dependency 
```

### What are devDependencies?
devDependencies are modules which are only required during local development and testing, while dependencies are modules which are also required at runtime (that is during production)
> The production environment is where users access the final code after all of the updates and testing

devDependencies are packages used for development purposes, 
> e.g for running tests or transpiling your code.
 Many packages that you install during development are not required for your app to work in production — so we add those to our package.json devDependencies object.

> In devDependencies, you'll find different types of libraries such as:
- formatting libraries: eslint, prettier, ...
- bundlers: webpack, gulp, parceljs, ...
- babel and all its plugins
- everything related to tests: enzyme, jest, ...
- a bunch of other libraries: storybook, react-styleguidist, husky, ...

#### To save a dependency as a devDependency on installation we need to do 
 ```bash 
npm install "packagename" --save-dev
✅This command adds the package to devDependency 
```
> instead of just
```bash
 npm install "packagename" --save.
✅this command adds package to dependency 
```
```bash 
npm install "packagename" & npm install "packagename" --save are same. 
```
#### Installing React Library (through npm install)
> insatlling React UI libray (materialui.com)
```bash 
// with npm
npm install @mui/material @emotion/react @emotion/styled
```
> as soon as its installed note that: in package.json, this shows up 
```bash 
  "dependencies": {
    "@emotion/react": "^11.7.1",
    "@emotion/styled": "^11.6.0",
    "@mui/material": "^5.4.1",
  }
```
> now you can add material UI fonts in your app through public/index.html 
```bash 
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />

    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />

    ✅<link rel="stylesheet"
    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
    />

    <title>React App</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>
 
  </body>
</html>
```
> link to material UI dependencies 
https://mui.com/getting-started/installation/

> src/App.js 
```bash 
import logo from './logo.svg';
import './App.css';
✅import { TextField } from '@mui/material'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
        ✅<TextField></TextField>
      </header>
    </div>
  );
}

export default App;
```
#### Installing a Transpiler (through npm install "packagename" --save-dev)
Were installing babel through the terminal at the app's location

> Type the following command to install the babel-cli and babel-core modules:
```bash
npm install babel-cli babel-core --save-dev
```
> package.json (note that: babel is now added to devDependencies)
```bash 
  "devDependencies": {
    "babel-cli": "^6.26.0",
    "babel-core": "^6.26.3"
  }
```
### Babel 
Browsers can't read JSX because there is no inherent implementation for the browser engines to read and understand them. 
- JSX is not intended to be implemented by the engines or browsers, it is intended to be used by various transpilers (software that converts source code of one language into source code of another language) to transform these JSX into valid JavaScript code.
> Transpilers like babel is used tl convert JSX to JS, so browsers can intrepret it 

- Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones)

- babel runs modern js(ES6 and above) into old browsers that dont support JS 

- Babel is a JavaScript compiler that includes the ability to compile JSX into regular JavaScript, so the browser can understand 

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments.

#### Element Vs Component 
> Element = tag + content (defination of a typical native HTML element)
> Component = collection of elements 
```bash 
✅NavigationBar is a React component 
class NavigationBar extends React.Component {
    render(){
        let name = 'rum'
        return (
        ✅React Element
        <div>
            <h2>React Page {name}</h2>
        </div>
        );
    }
}

export default NavigationBar;
```
#### How to use HttpOnly cookies in react 
- the make the user experience more enhanced when they log into a website, the server assigns a token or a session id to the users browser / client 
- to store the token / session ID securely, we need certain storage mechanisms:

##### There are 3 types of storage mechanisms:
1. cookies         (4kb)
- Local storage and session storage are not really as secure as cookies, you can access the JS object and you'll be more prone to cross site scripting attacks or cross site request forgery.

- Cookies are pieces of information stored on the client side, which are sent to the server with every request made by the client. 

```bash 
A cookie is a small data file that is sent from a website to your device, and stored on its hard drive or mobile browser. A cookie typically contains two bits of data: a unique ID for each user, and a site name. Cookies enable websites to retrieve this information when you revisit them, so that they can remember you and your preferences and tailor page content for you based on this information.

For example, websites might use cookies to make specific personalised recommendations based on your previous online browsing and buying behaviour. They might also use cookies to offer to remember information such as user names and passwords for sites you visit often, so that you don’t have to spend time filling them in each time you log on.
```

- Cookies are primarily used for authentication and maintaining sessions. 
```bash 
Hence, securing a cookie effectively means securing a users identity. Cookies can be secured by properly setting cookie attributes. These attributes are:

- Secure
One of the simplest and most common ways to steal data, including cookies, is sniffing. Sniffing can be defined as passively reading data that is being transmitted. In order to overcome this problem, we encrypt data before transmission. Encryption of data ensures that any potential attacker who sniffs traffic will not be able to steal clear text data, thus ensuring their safety.

its important to ensure the cookie is transmitted only over HTTPS connections and not HTTP. This can be done with the help of the 'Secure' attribute of a cookie.

Note that: Secure attribute only works when cookie is sent through an encrypted channel.

- Domain
The 'domain' attribute signifies the domain for which the cookie is valid and can be submitted with every request for this domain or its subdomains. 

If this attribute is not specified, then the hostname of the originating server is used as the default value.

- Path
The 'path' attribute signifies the URL or path for which the cookie is valid. The default path attribute is set as '/'.

- HTTPOnly
When this attribute is set, client-side scripts are not allowed to access the cookie. Now, the question that arises is, 'Why do I need to safeguard my cookies from client-side scripts?' Cross Site Scripting attacks can be used to steal cookies with the help of client-side scripts.

Note that: Restricting access to cookies by client-side scripts does not completely mitigate the risk of stealing cookies via XSS. However, it does raise the bar considerably 

- Expires
This attribute is used to set when cookie will expire 
```
- Cookie can be created both on the browser and the server side as well, local storage and session storage can be stored on the browser side only.

- with cookies we can specify options like samesite 
```bash 
The SameSite attribute of the Set-Cookie HTTP response header allows you to declare if your cookie should be restricted to a first-party or same-site context.
```
#### Samesite attribute contains 3 aspects:
```bash
1. strict - cookie works only on the website its set for (youtube.com) and does not work for its subdomains (studios.youtube.com)
2. lacks (default) - cookie works on the same website its set on, as well as its sub domain 
3. none 
```
- Cookies is the best way of storing the JWT token.
```bash 
What is JWT?
JWT is used for authoration (not authentication)

✅authorisation: making sure that the user trying to authenticate is the authorised user/ the user he claims to be . 
✅authentication: making sure user and pass user entered is correct 
```
#### So, how does authorization work?
On your first visit to a website, client accepts cookie and now the cookie is in the client's browser , the site server downloads a cookie on to your device. 
```bash
session ID of the user is encapsulated in cookie 
cookie is stored in the server 
```
If you visit the site again, your device will search to see if it has an associated cookie, read it and relay the data it contains back to the website. The website will then recognise you as a previous visitor and remember any personal information that you shared with that site, such as:
```bash 
account user names and passwords;
your email address;
prior purchases you made;
items you viewed;
your preferred settings and themes.
```
whenever a user tries to authorize themselves the cookie on the browser is checked with the cookie on the server to see if they are the same. 

- web servers use authentication cookies to determine who you are when you try to log into an account. 

#### JWT 
Instead of using a cookie for storing data, for authentication purposes JWT (JSON Web Tokens) are used, since they are so much more secure because the data stored in it is hashed through a secret key.

#### Types of Cookies 
Cookies can be either temporary (session cookies) or persistent (permanent cookies).

- Session cookies are stored in your device’s temporary memory – not on your hard drive – while you’re browsing a website. Usually these cookies are deleted when you close the browser. If you were to reopen the browser and revisit the website, the site would not ‘remember’ that you had visited previously. Session cookies remain active only until you leave a site.

- Persistent cookies remain stored on your hard drive, persisting from session to session until you delete them or they reach a set expiration date. Persistent cookies can store log-in details, bookmarks, credit card details and preferred settings and themes - resulting in a faster and smoother web journey.

2. local storage   (10mb) 
```bash 
In a chatting application, suppose you hit send, but you lost network, so the mesage did not send, however, once you get network again it will automaticaly send the message, because while you lost the net, the text was until then stored in the local storage 
```
3. session storage (5mb) - lasts only till the tab is open. 
```bash 
if we set a video playback rate 2x and on the same tab we go to another video, it will automatically set the playback rate of even that playback of 2x 

However, if we open a new tab and open a youtube video it will have th default normal playback rate.
Because the session lasts only for one session, only in one tab.
```














