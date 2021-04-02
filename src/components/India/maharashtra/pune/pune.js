import React from 'react'
import {ForPune} from '../../../header'
const Pune=()=>{
    return(
    <>
    <ForPune.Consumer> 
        {(pune)=>{
            return  <p>{pune}</p>
        }}
    </ForPune.Consumer>
    </>
    );
}
export default Pune;