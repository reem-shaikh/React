import Card from './Card';
import { useEffect, useState } from 'react';
import { pair_emojis, initRevealState  } from './Emoji';
import {randomizeArr} from './Helperfunctions'

//npm install react-confetti
import Confetti from 'react-confetti'

//to define random arrays 
//its calling randomize function from Helperfunctions.js
// const random_arr = randomizeArr(pair_emojis)
// console.log(random_arr)

const Grid = () => {
    // instead of defining 16 states, we'll use a combinator object 
    // const [flipped, setFlipped] = useState([false, false,false,false,false,false,false,false,false,false,false,false,false,false,false, false])
    
    const [flipped, setFlipped] = useState(initRevealState)
    const [randomArr, setRandomArr] = useState(pair_emojis)

    //for confetti; whether user won or not 
    const [winning, setWinning] = useState(false)

    // Creating a state to keep a memory of which state is matched, when everything is matched, we have completed the game 
    const [matched, setMatched] = useState(initRevealState)

    const [timerID, setTimerID] = useState(0)
    const [score, setScore] = useState(0)
    //every time you open the pair, setscore should increase 

    //when component is first mounted, this will be run 
    // when component is rendered randomizeArr() is first been run 
    useEffect(() => {
        const random_arr = randomizeArr(pair_emojis)
        //console.log(random_arr)
        setRandomArr(random_arr)
    }, [])
     

    const ToggleFlipped = (index) => {
        //to create deep copy were using array destructuring (objects, arrays)
        //copying each state defined inside flipped state, inside fipped_copy
        let flipped_copy = [...flipped]

        //we dont want 3rd card to open up if we have 1st and 2nd card open 
        const flippedcount = flipped_copy.reduce((count, current) => {
            if(current === true){
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
        if(flippedcountafter === 2){
            //return index of which 2  cards of them are flipped 
            // const selected_index = flipped_copy.map((single_element, idx) => {
            //     if(single_element){
            //         return idx;
            //         //it returns indexes of cards that are selected 
            //     } else {
            //         return false;
            //     }
            // })

            //another way of storing indexes of both the selected cards 
            const selected_index = []
            flipped_copy.forEach((single_element, idx)  => {
                if(single_element){
                    selected_index.push(idx)
                }
            })

            //note that: now both the card indexes are stored inside selected_index 
            //if both the indexes are same 
            if(randomArr[selected_index[0]] === randomArr[selected_index[1]]) {
                //when both cards selected are same 
                console.log('its a match')

                //were saving every element inside matched state in a matched_copy 
                //matched state stores the same content as pair_emojis[]

                //again were using array destructuring because we dont want to directly manipulate the matched state 
                const matched_copy = [...matched]
                //selected_index contains 2 indices -> of both the cards that are selected 
                //flipped - true 
                //when card is flipped boolean value is true
                
                //over here, were keeping the cards with the same emojis flipped, to acheive that were setting the boolean value as true 
                matched_copy[selected_index[0]] = true 
                matched_copy[selected_index[1]] = true 
                //visualize these two cards from the matched_copy state been set to true 
      

                //when boolean value of every element inside matched state is true  (i.e their flipped) then we can say that the cards are matched 

                //after user has flipped all the cards and all the cards have boolean value as true then we can say the user has won the game 
                const allMatched = matched_copy.every((single_elem) => single_elem === true)
                if(allMatched){
                    console.log('you have won')
                    setWinning(true)
                }

                // update the matched state 
                setMatched(matched_copy)

            } 
            //when both cards selected are not same, then close the cards automatically after 2 seconds
            else {
                // const timer_id = setTimerID(() => {
                //     setFlipped(initRevealState)
                // }, 2500)
            
                const timer_id = setTimeout(() => {
                    // after 2 seconds both the cards get automatically closed
                    closeAll()
                }, 2000);
                //update the timer with the current time 
                setTimerID(timer_id)
            }

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
        {/* show confetti only when won the game, otherwise keep the winning state at its default i.e false */}
        {winning? <Confetti/> : false}

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
                const matchedState = matched[idx]

                return (
                 //isFlipped is custom prop we send - single_data is each state inside Flipped state 
                 <Card  key={idx} 
                        flip={ToggleFlipped} 
                        index={idx}
                        isFlipped={single_data}
                        emoji={emoji} 
                        matchedState={matchedState}/>
                )
            })
           
            }
        </div>
        {/* everytime you click on a pair of cards score gets updated */}
        <h5 className='scorecard'>score: {score}</h5>
        {winning ? <h3>congrats</h3> : false}
        </>
    )
}

export default Grid;