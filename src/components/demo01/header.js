import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favoriteColor: "blue",
        }
    }
    // static getDerivedStateFromProps(props, state){
    //     return {favoriteColor: props.favol}
    // }
    componentDidMount() {
        setTimeout(()=>{
            this.setState({favoriteColor: "black"})
        },1000)
    }
    render(){
        return <div>
            <h1>my favorite color is {this.state.favoriteColor}</h1>
        </div>
    }
}

export default Header;