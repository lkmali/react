import React from 'react'
import UserContext from '../utils/UserContext'

class UserClass extends React.Component {

   constructor(props){
    super(props)
   }

   componentDidMount(){
 
}


   render(){

       const {userInfo} = this.props 

       console.log("this",this.props)

         return ( <div className="userInformation" >

             <h1>
          
            <UserContext.Consumer>{
                  ({loginUser})=>( <label> {loginUser} </label>
                  )
               }</UserContext.Consumer>


             </h1>

             <UserContext.Consumer   >{
                  ({loginUser,setUserName})=>( <input value={loginUser} onChange={
                     (event)=>{
                        setUserName(event.target.value)
                     }
                  } ></input>
                  )
               }</UserContext.Consumer>

            <img src={userInfo.avatar_url}  ></img>
            <h1>{userInfo.name}</h1>
            <h1>{userInfo.company}</h1>
            <h1>{userInfo.location}</h1>


    
    
       </div>)

   }

}

export default UserClass