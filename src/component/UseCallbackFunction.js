import {useSelector,useDispatch} from "react-redux"
import Simmer from "./Simmer"
import User from "./User"

import { fetchUsers } from "../redux/user.reducer"
import { useCallback, useEffect, useMemo, useState } from "react"


const UseCallBackTesting =  ()=>{

  const [count,setCOunt] = useState()



  const fiboni  = (number)=>{

    if(number<2){
      return number
    }
    return fiboni(number-1) + fiboni(number-2)

  }


  const numbe = useMemo(()=>{
    fiboni(number)
  },[number])

   

  const incrment = useCallback(()=>{
        setCOunt((value)=>{
           return value+1
        })

  },[])




   return  ( <div>
         User list
         {users.map(value=>
     <User key={value.id} {...value}   ></User>)}
   </div> ) 
    
 
}


export default ContactUsPage