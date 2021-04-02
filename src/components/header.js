import React ,{useState} from "react"
const Header=()=>{
    const [count,setCount]=useState(0)
    // function countHandler(){
    //     setCount(count+1);
    // }
    return(
        <>
        <p>You clicked button {count} times</p>
        <button onClick={()=>setCount(count+1)} >Count</button>
        
        </>
    )
}
export default Header;