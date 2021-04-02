import React ,{useState} from "react"
const Header=(props)=>{
    const [count,setCount]=useState(0)
    function countHandler(){
        setCount("Hello");
    }
    return(
        <>
        <h1>{props.title}</h1>
        <p>You clicked button {count} times</p>
        <button onClick={()=>{countHandler()}} >Count</button>
        
        </>
    )
}
export default Header;