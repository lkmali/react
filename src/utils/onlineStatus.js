import {useState,useEffect} from "react"
export default   ()=>{
  const [isOnline,setStatus] = useState(true)
    useEffect(()=>{
       window.addEventListener("offline",()=>{
        setStatus(false)
       })
       window.addEventListener("online",()=>{
        setStatus(true)
       })
    },[])

    return isOnline
}