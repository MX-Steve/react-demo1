import React from 'react';
import ReactDOM from 'react-dom';
import Car from './components/demo01/car'
import Car2 from './components/demo01/car2';
import Header from './components/demo01/header';
import Football from './components/demo01/football';
import Goal from './components/demo01/goal';
import MyForm from './components/forms/form1';
import MyForm2 from './components/forms/form2'
import { BrowserRouter as Router, Switch, Route, Link, } from 'react-router-dom';
import Home from './pages/Home';
import Blogs from './pages/Blogs'
import Contact from './pages/Contact';
import Todo from './components/todo';
import { useState } from 'react';
import "./App.css"
import "./styles/my.scss"
import FavoriteColor from './components/hook_demo';
import Bus from './components/bus';
import Timer from './components/timer';
import Counter from './components/useEffect_demo';
import Component1 from './components/useContext_demo';
import UR from './components/useRef_demo';
import Focus from './components/useRef_demo2';
import PreValue from './components/useRef_demo3';
import Todo2s from './components/useReducer_demo';

const myfirstelement = (
<div>
<h1>React is {5 + 5} times better with JSX</h1>
<ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
<Car color="red"/>
</div>
)
function Car3(props){
  return <li>I am a {props.brand}</li>
}
function Gargage(){
  const carInfo = {name:"Ford",model:"Fusang"}
  return (
    <>
      <MyForm2/>
      <MyForm/>
      <h1>Who lives in my gargage.</h1>
      <Car color="blue" brands={carInfo}></Car>
      <Car2 color2="gray"/>
      <Header/>
      {/* <Header favol="yellow"/> */}
      <Football/>
      {cars.length>0 &&
        <h2>you have {cars.length} cars in your gargage.</h2>
      }
      <Goal/>
      <Goal isGoal={true}/>
      <hr/>
      <ul>
        {cars.map((car) => <Car3 key={car.id} brand={car.name}/>)}
      </ul>
    </>
  )
}
const cars = [
  {id:1,name:'Ford'}, 
  {id:2,name:'BMW'}, 
  {id:3,name:'Audi'}
];
function Homes(){
  return (
    <Router>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/blogs">blogs</Link>
      </div>
      <div>
        <Link to="/contact">contact</Link>
      </div>
      <hr/>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route exact path="/blogs">
          <Blogs></Blogs>
        </Route>
        <Route exact path="/contact">
          <Contact></Contact>
        </Route>
      </Switch>
    </Router>
  )
}

function MemoEx(){
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState(["todo 1","todo 2"])
  const increment = ()=>{
    setCount((c) => c + 1);
  }
  return (
    <>
      <h1>scss styles</h1>
      <h2>scss styles useless</h2>
      <Todo todos={todos}></Todo>
      <hr/>
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </>
  )
}
ReactDOM.render(<Todo2s/>, document.getElementById("root"));