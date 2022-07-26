# Debouncing & Throttling
They both acheive rate limiting through delay. In debounce The delay is to wait till there's no more invokes anymore, the delay can extend in debounce.In throttling, The delay is to wait within a frequency, the delay in throttle case is fixed.

Debouncing will ensure that the function is called exactly when the user stops calling it, only then the function is called. (you wait for the other person to finish speaking before you reply.) Debouncing enforces that a function not be called again until a certain amount of time has passed without it being called. 

Throttling will ensure that the function is called at fixed intervals irrespective of whether user stops calling the function or not. (you speak at every 4s no matter what)

Example: If you're scrolling, throttle will slowly call your function while you scroll (every X milliseconds). Debounce will wait until after you're done scrolling to call your function.

Debounce will not fire until the events flow stops. However, Throttle will fire an event each interval.

### Why Debouncing and Throttling?
Its used for performance optimisation of a web app by limiting the rate of execution of function calls (fetching data of API etc)

- When were typing in Search bar in ecommerce website it gives certain suggestions after you pause typing for a millisecond. everytime a key is pressed a function is fired say getResults() which makes a call to the API endpoint, it fetches the data and renders it in the suggeestions of the search, but this would make multiple API calls and that doesnt optimize the user experience, so we limit the rate of these API calls using either debouncing or throttling. 

> debouncing (difference between two keystroke events is greater than 300ms)
Make an API call if the difference between two keypress events is greater than a certain limit (for example 300ms), this apporach ensures unecesary API calls are not made. 

> Throttling (difference between last function call and latest function call is greater than 300ms)
Make an API call after a certain limit of time 

- Debouncing is implemented in most ecommerce websites. Want to search when user stopped typing for 1 sec. Use debounce 1 sec on key press. To use throttle for this usecase doesnt make sense because it will fire the function not when the user stops typing, rather at regular intervals, which can be annoying to deal with. 

## When is throttling preffered over debouncing?

> tracking when user re-sizes the browser 
an event listener is called which calls an API call everytime the user is re-sizing the browser which is not efficient. 

- Debouncing fixes this by ensuring that the difference between two API calls is greater than say 100ms. 
- Throttling would ensure that API calls are made after a certain limit of time, which would be a more efficient approach than using debouncing to fix this.

> The Pistol example
When button is clicked and event handler is invoked, if user is frequently clicking on the button, 
- if we were to fix this using throttling, then the next function call can be made afteer a fixed particular interval. for eg different guns have different ranges, FPS games, if your using a machine gun then after the first shot, you'll take some time, after which you can shoot again. eeven when the user clicks on the button to shoot, it wont work until the required time is covered between the last shot and current shot, since guns have a fixed reload time and shiz. 

- if we were to fix this using debouncing we would limit the invokation of the function we can delay the calls and make the function call to be made if time difference between two events (last function call and current function call) is say greater than 500ms. However if e put this in context of an FPS game, irrespective of when the gun is fired, the function will be called many times, but it will only be triggered one second  after the user stops clicking, this will lead to delay in shooting. we dont want the gun to be fired, whenever the user clicks on shoot and stops, we want it to be fired at a fixed interval. 

## Which is better?
It depends on the use-case and the given scenario. 

# Throttling 
Throttling used for rate limiting the function execution. 

> When expensive function is triggered over and over again, to prevnt repeated API calls, the throttled version is returned, which calls this function at regular intervals 
```bash
#making API call
const expensive = () => {
   console.log('expensive function')
}

# on every resize event, expensive method is called 
window.addEventListener('resize', betterExpensive)

# throttled version of expensive function
const betterExpensive = () => {
    throttle(expensive, limit)
}
```
> Consider a scenario, where you'll call a func() only when the time limit is fulfilled 
```bash
const throttle = (func, limit) => {
    let flag = true 
    return function(){
        # when flag is true then only call the function func and set the flag to false, which will be set to true only after the time limit set
        if(flag) {
            func();
            flag = false;
        }
        setTimeout(() => {
            flag = true;
        }, limit  )
    }
}
```
# Debouncing
> How to develop search functionality using debouncing such that the api call is made only when the user pauses typing 
```bash
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>HTML 5 Boilerplate</title>
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <!-- make a network call and get the data -->
    <!-- this function gets the data from the server -->
    <input type="text" placeholder='input' onkeyup="betterFunction()"/>

	let counter = 0;
    const getData = () => {
    # calls an API and gets Data
    console.log("Fetching Data ..", counter++);
    }

    # takes 2 arguments: function f and delay d
    const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this,
        args = arguments;
        clearTimeout(timer);
        # call the function getdata after the delay of 300ms
        timer = setTimeout(() => {
           getData.apply(context, arguments);
        }, d);
    }
    }

    # only call when user pauses while typing 
    # call it when the difference of events (between last keystroke and the next  keystroke which denotes the pause) is greater than 300ms 
    const betterFunction = debounce(getData, 300);
  </body>
</html>
```





