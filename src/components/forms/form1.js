import React from "react";

class MyForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userName: "default"
        }
    }
    handleSubmit=(event)=>{
        event.preventDefault()
        alert("the name you enter",this.state.userName)
    }
    render(){
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>input your name
                    <input 
                        type="text"
                        value={this.state.userName}
                        onChange={(e)=>{this.setState({userName:e.target.value})}}/>
                </label>
                <input type="submit"></input>
            </form>
            <p>{this.state.userName}</p>
            </>
        )
    }
}

export default MyForm