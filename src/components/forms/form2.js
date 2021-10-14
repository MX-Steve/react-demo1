import { useState } from "react";
import ReactDom from "react-dom";

function MyForm2(){
    const [inputs,setInputs] = useState({});
    const [textarea, setTextarea] = useState(
        "The content of a textarea goes in the value attribute"
      );
    const [myCar, setMyCar] = useState("Volvo");
    const handleChange = (event) => {
        const name = event.target.name 
        const value = event.target.value 
        setInputs(values => ({...values,[name]: value}))
    }
    const handle2Change = (event) => {
        setTextarea(event.target.value)
    }
    const handle3Change = (event) => {
        setMyCar(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(inputs.username+""+inputs.age)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username|| ""}
                    onChange={handleChange}
                />
            </label>
            <label>Enter your age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age||""}
                    onChange={handleChange}
                />
            </label>
            <textarea value={textarea} onChange={handle2Change} />
            <select value={myCar} onChange={handle3Change}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
            <input type="submit"/>
        </form>
    )
}

export default MyForm2