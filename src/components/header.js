import React ,{useEffect, useState} from "react"
import axios from 'axios'
const Header=(props)=>{
    const [count,setCount]=useState(0)
    useEffect(()=>{
        document.title = `You clicked ${count} times`;
       console.log(count)
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then(res=>{
        console.log(res.data)
       })
       .catch(err=>{
           console.log(err)
       })
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