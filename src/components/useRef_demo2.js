import { useRef } from "react";

function Focus(){
    const inputElement = useRef()

    const focusInput = () => {
        inputElement.current.focus()
    }

    return (
        <>
            <input
            type="text" ref={inputElement}/>
            <button type="button" onClick={focusInput}>focus input</button>
        </>
    )
}

export default Focus;