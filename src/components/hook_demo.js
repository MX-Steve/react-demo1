import { useState } from "react";

function FavoriteColor(){
    const [color,setColor] = useState("red")
    return (
        <>
            <h1>my favorite color is {color}</h1>
            <button
                type="button"
                onClick={()=>{setColor("red")}}>red</button>
            <button
                type="button"
                onClick={()=>{setColor("blue")}}>blue</button>
            <button
                type="button"
                onClick={()=>{setColor("green")}}>green</button>
        </>
    )
}

export default FavoriteColor;