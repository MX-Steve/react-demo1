import { useState } from "react";

function Bus(){
    const [bus, setBus] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red",
    })
    const updateColor = () => {
        setBus(bus => {
            return {...bus,color:"blue"}
        })
    }
    return (
        <>
            <h1>my {bus.brand}</h1>
            <p>it is {bus.color} {bus.model} {bus.brand} bus.</p>
            <button
                type="button"
                onClick={updateColor}>update color</button>
        </>
    )
}

export default Bus;