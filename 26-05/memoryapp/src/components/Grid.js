import Card from './Card';
import { useEffect, useState } from 'react';
import { pair_emojis, initRevealState  } from './Emoji';
import {randomizeArr} from './Helperfunctions'

//to define random arrays 
//its calling randomize function from Helperfunctions.js
// const random_arr = randomizeArr(pair_emojis)
// console.log(random_arr)

const Grid = () => {
    // instead of defining 16 states, we'll use a combinator object 
    // const [flipped, setFlipped] = useState([false, false,false,false,false,false,false,false,false,false,false,false,false,false,false, false])
    
    const [flipped, setFlipped] = useState(initRevealState)
    const [randomArr, setRandomArr] = useState(pair_emojis)
    const [timerID, setTimerID] = useState(0)
    const [score, setScore] = useState(0)
    //every time you open the pair, setscore should increase 

    //when component is first mounted, this will be run 
    // when component is rendered randomizeArr() is first been run 
    useEffect(() => {
        const random_arr = randomizeArr(pair_emojis)
        console.log(random_arr)
        setRandomArr(random_arr)
    }, [])
     

    const ToggleFlipped = (index) => {
        //to create deep copy were using array destructuring (objects, arrays)
        //copying each state defined inside flipped state, inside fipped_copy
        let flipped_copy = [...flipped]

        //we dont want 3rd card to open up if we have 1st and 2nd card open 
        const flippedcount = flipped_copy.reduce((count, current) => {
            if (current === true){
                count++
            }
            return count
        }, 0)

        if(flippedcount >= 2){
            console.log('2 cards already opened')
            clearTimeout(timerID)
            setTimerID(0)
            flipped_copy= [...initRevealState]
            //return;
        }

        console.log(flippedcount)

        // if flipped copy is true, means its flipped then set it to false (means set it to inverted)
        //takes index as parameter and based on its boolean value, it toggles the value 
        if(flipped_copy[index] === true)
        {
            flipped_copy[index] = false 
        }
        else 
        {
            flipped_copy[index] = true 
        }

        //adding snippet here 
        const flippedcountafter = flipped_copy.reduce((count, current) => {
            if (current === true){
                count++
            }
            return count
        }, 0)

        // when count is 2, then 
        if(flippedcountafter == 2){
            const timer_id = setTimeout(() => {
                // after 2 seconds both the cards get automatically closed
                closeAll()
            }, 2000);
            //update the timer with the current time 
            setTimerID(timer_id)

            //score increase everytime user gets right 
            setScore(score + 1)
        }
        setFlipped(flipped_copy)
    }

    const closeAll = () => {
        // const state = [false, false,false,false,false,false,false,false,false,false,false,false,false,false,false, false]
        //setFlipped(state)
        setFlipped(initRevealState)
    }

    return (
        <>
        <div className='card-container'>
            {/* map to loop over array, for example, like this
            const cards =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
            {cards.map((single_data, idx) => {
                return(
                    <Component />
                )
            })} 
            */}

            {flipped.map((single_data, idx) => {
                const emoji = randomArr[idx]

                return (
                 //isFlipped is custom prop we send - single_data is each state inside Flipped state 
                 <Card key={idx} 
                 flip={ToggleFlipped} 
                 index={idx}
                 isFlipped={single_data}
                 emoji={emoji} />
                )
            })
           
            }
        </div>
        {/* everytime you click on a pair of cards score gets updated */}
        <h5>Score: {score}</h5>
        </>
    )
}


export default Grid;