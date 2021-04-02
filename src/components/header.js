import React ,{useEffect, useState} from "react"
const Header=(props)=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
       console.log(count)
    })
    function countHandler(){
        setCount(count+1);
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