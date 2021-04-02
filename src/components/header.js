import React ,{createContext, useEffect, useState} from "react"
import India from '../components/India/india'
import axios from 'axios'
// context api created here outside of function
const ForPune=createContext();

//header component
const Header=(props)=>{
    // value for pune component which send through context api from india to pune
   const noticeFromIndia="Stay Safe And Wear Mask";
   // use state for count increment
    const [count,setCount]=useState(0)
    // useEffect for rendering http request when document render and 
    //it render once because [] this at the end 
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
       return ()=>{console.log('Clean Up Work In useEffect')}
    },[])
    // [] means it render onece not agian when dom changes
    useEffect(()=>{
        console.log("2nd UseEffect")
        return console.log("2nd Cleanup")
    })
    // for updating count
    function countHandler(){
        setCount(count+1);
    }
    return(
        <>
          <ForPune.Provider value={noticeFromIndia}>
            <India/>
        </ForPune.Provider>
        <h1>{props.title}</h1>
        <p>You clicked button {count} times</p>
        <button onClick={()=>{countHandler()}} >Count</button>
      
        </>
    )
}
export default Header;
export {ForPune}; // for exporting context api