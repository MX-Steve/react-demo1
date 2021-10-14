import React from "react";

class Car2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            color: "blue",
        }
    }
    changeColor=()=>{
        this.setState({color :"red"})
    }
    render(){
        return <div>
            <h2>I am a {this.state.color}/{this.props.color2} Car2!</h2>
            <button 
                type="button"
                onClick={this.changeColor}
            >Change color</button>
        </div>
    }
}

export default Car2;