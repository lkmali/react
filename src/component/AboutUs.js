import UserClass from "./UserClass"
import User from "./User"
import React from "react"

class About extends React.Component {

   constructor(props){
    super(props)
    this.state = {
        userInfo:{}
    }
   }


   componentDidMount(){
    this.fetchUser()
   }

async fetchUser (){
    const res = await fetch(
       "https://api.github.com/users/lkmali"
      );
      const data = await res.json()
      console.log("I AM IN SIDE",data),
      this.setState({userInfo:data})
}


   render(){



    return   (<div>

        <UserClass  userInfo={this.state.userInfo}  />

    </div>)
   }



}

export default About
