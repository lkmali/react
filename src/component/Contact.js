import {useSelector,useDispatch} from "react-redux"
import Simmer from "./Simmer"
import User from "./User"

import { fetchUsers } from "../redux/user.reducer"
import { useEffect } from "react"


const ContactUsPage =  ()=>{

  const dispatch = useDispatch()


  const {loading,error,users} = useSelector((state=>state.user))

  useEffect(()=>{
    dispatch(fetchUsers())
  },[dispatch])

   if(loading){
    return <Simmer/>
   }
   console.log("error",users)
  if(error){
    return <h1>Error in facting data</h1>
  }


   return  ( <div>
         User list
         {users.map(value=>
     <User key={value.id} {...value}   ></User>)}
   </div> ) 
    
 
}


export default ContactUsPage