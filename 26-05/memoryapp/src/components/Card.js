const Card = (props) => {
    const flip =() => {
        //when you click 5th index card is being flipped 
        //props.flip(5)
        //props.flip(props.index)

        // if both cards are not matched, then flip card to false 
        if(!props.matchedState){
            props.flip(props.index)
        }


    }
    return (
        //What to do when we encounter a particular boolean value?

        //flipped-true ->  flipped card  
        //flipped-false -> not flipped card 

        //when flipped false , toggle it to true to flip it 
        //when flipped true, toggle it to false, to make it go back

        //props.isFlipped tells whether card is flipped or not 
        //props.matchState tells whether both cards are matched or not 

        //if card is flipped -> true and if both cards are matching; then were not flipping these cards to false, were keeping them flipped, by adding the flipped class 

        //iniitally in .content class visibility is set to hidden, in .flipped visibility is set to visible 

        //then call the flip function - which ensures what happens to the cards when they both are not matcheed -> i.e flip the card to false 
        <div className={`card ${props.isFlipped || props.matchedState ? 'flipped' : ""}`} onClick={flip}> 

        {/* flipped child is content, flipped will be attached to card when user clicks on it */}
            <div className="content">
                {/* <p>🐈</p> */}
                <p>{props.emoji}</p>
            </div>
        </div>
    )
}

export default Card;