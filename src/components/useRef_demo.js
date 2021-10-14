import { useState,useRef,useEffect } from "react";

function UR(){
    const [inputValue, setInputValue] = useState("")
    const counter = useRef(0)

    useEffect(() => {
        counter.current = counter.current + 1
    })

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e)=>setInputValue(e.target.value)}
            />
            <h1>Render count: {counter.current}</h1>
        </>
    )
}

export default UR;