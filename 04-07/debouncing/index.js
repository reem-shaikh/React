// Debouncing in Javascript
let counter = 0;
const getData = () => {
  // calls an API and gets Data
  console.log("Fetching Data ..", counter++);
}

// takes 2 arguments: function f and delay d
const debounce = function (fn, d) {
  let timer;
  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timer);
    // call the function getdata after the delay of 300ms
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, d);
  }
}

// only call when user pauses while typing 
// call it when the difference of events (between last keystroke and the next  keystroke which denotes the pause) is greater than 300ms 
const betterFunction = debounce(getData, 300);