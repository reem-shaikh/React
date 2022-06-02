import React, {useRef} from 'react'
const Focus = () => {
    const inputEl = useRef(null)

    const onButtonClick = () => {
        console.log(inputEl)
        inputEl.current.focus()
    }

    return (
        <>
         <input ref={inputEl} type='text' />
         <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default Focus 