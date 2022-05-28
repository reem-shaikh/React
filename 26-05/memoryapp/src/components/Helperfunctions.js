const randomizeArr = (arr_old) => {
// we want a random array every single time the user plays a game 

let arr = [...arr_old]
//were doing deep copy here to fix a bug 
//bug -> because of strict mode it creates a new empty array every time it runs 
//when in reality we want shuffled array of the same length 
//another fix to this problem would be to remove react.strictmode form index.js

//in production - there is no strict mode -> it will run only once 
//so the app would work ffine in production (without making either of these changes) because it doesnt take strict mode 



//const pair_emojis = [...emojis, ...emojis]
const shuffled_arr = []
const size = arr.length

for(let i=0; i<size; i++){
    const random_idx = Math.floor(Math.random() * arr.length)

    shuffled_arr.push(arr[random_idx])
    arr.splice(random_idx, 1)
}
    return shuffled_arr;
}

export {randomizeArr}