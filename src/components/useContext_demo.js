import { useState,createContext,useContext } from "react";
const UserContext = createContext();
function Component1(){
    const [user, setUser] = useState("Li Si")

    return (
            <UserContext.Provider value={user}>
                <h1>hello {user}!</h1>
                <Component2 user={user}></Component2>
            </UserContext.Provider>
        )
}

function Component2(){
    return (
        <>
            <h2>component 2</h2>
            <Component3/>
        </>
    )
}

function Component3(){
    return (
        <>
            <h2>component 3</h2>
            <Component4/>
        </>
    )
}

function Component4(){
    return (
        <>
            <h2>component 4</h2>
            <Component5/>
        </>
    )
}

function Component5(){
    const user = useContext(UserContext)
    return (
        <>
            <h2>component 5</h2>
            <h3>hello see {user} again.</h3>
        </>
    )
}

export default Component1;