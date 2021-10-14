import { memo } from "react"
import styles from "../styles/car.module.css"

const Todo = ({todos}) =>{
    console.log("children render")
    return (
        <div>
            <h2 style={{color:"red"}}>My Todos</h2>
            {todos.map((todo,index)=>{
                return <p className={styles.bigblue} key={index}>{todo}</p>
            })}
        </div>
    )
}

export default memo(Todo);