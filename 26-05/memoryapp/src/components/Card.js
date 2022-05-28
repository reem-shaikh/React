const Card = (props) => {
    const flip =() => {
        //when you click 5th index crd is being flipped 
        //props.flip(5)
        props.flip(props.index)


    }
    return (
        //What to do when we encounter a particular boolean value?

        //flipped-true ->  flipped card  
        //flipped-false -> not flipped card 

        //when flipped false , toggle it to true to flip it 
        //when flipped true, toggle it to false, to make it go back

        //we want the card to flip when isFlipped is true 
        //if isFlipped is true  then add flipped class otherwise dont add flipped 
        <div className={`card ${props.isFlipped  ? 'flipped' : ""}`} onClick={flip}> 

        {/* flipped child is content, flipped will be attached to card when user clicks on it */}
            <div className="content">
                {/* <p>🐈</p> */}
                <p>{props.emoji}</p>
            </div>
        </div>
    )
}

export default Card;