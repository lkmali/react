import {useEffect} from "react"
import {useSelector} from 'react-redux'

const User = ({name,username,email})=>{

    console.log("name",name)

    return ( <div className="userInformation" >
    <h1>{name}</h1>
    <h1>{username}</h1>
    <h1>{email}</h1>

   </div>)
}

export default User