import React ,{createContext, useEffect, useState} from "react"
import India from '../components/India/india'
import axios from 'axios'
const ForPune=createContext();

const Header=(props)=>{
   const noticeFromIndia="Stay Safe And Wear Mask";
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
       return ()=>{console.log('Clean Up Work In useEffect')}
    },[])
    // [] means it render onece not agian when dom changes
    useEffect(()=>{
        console.log("2nd UseEffect")
        return console.log("2nd Cleanup")
    })
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
export {ForPune};