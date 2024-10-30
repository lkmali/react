import React from 'react'


class UserChildClass extends React.Component {

   constructor(props){
    super(props)

    console.log("constructor -> UserChildClass-->",props.child)
    this.state = {
      count:0,
      count2:2
    }
   }

   componentDidMount(){
    console.log("I AM IN componentDidMount UserChildClass-->",this.props.child)
}


   render(){

    console.log("I AM IN render UserChildClass-->",this.props.child)


         return (<h1>{this.props.child}</h1>)

   }

}

export default UserChildClass