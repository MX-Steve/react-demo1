function Football() {
    const shoot = (a) => {
        alert(a)
    }
    const shoot2 = (a,b) => {
        alert(b.type)
    }
    return (
        <div>
            <button onClick={() => {shoot("shot!")}}>Take the shot!</button>
            <button onClick={(event) => {shoot2("shot!",event)}}>shot2</button>
        </div>
    )
}

export default Football;