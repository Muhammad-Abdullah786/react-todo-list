import {
    forwardRef, useImperativeHandle
} from 'react'

const TextField  = forwardRef(({placeholder}, ref) =>{
    useImperativeHandle(ref, ()=>{
        return {
         getChildData : ()  =>{
            return "this data"
         }
        }
    })
    // console.log( "pp ", props, ref);
    return(
        <input 
        placeholder={placeholder}
        ref={ref}
        style={{
            padding: "5px 20px"
        }}
        />
        )
    })
export default TextField;