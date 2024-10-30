import {Link} from 'react-router-dom'
import {useContext,useEffect} from 'react'
import UserContext from '../utils/UserContext';
 import {useSelector} from "react-redux"
export default () =>{
  const {loginUser} = useContext(UserContext)


  const cartItem =  useSelector((store)=>store.cart.items)

  useEffect(()=>{
    console.log(" I AM USE EFFCAT F CART",cartItem)
  })


  console.log(" H I AM IN HEADER",cartItem)

return  (

    <div className="header">
      <img
        className="logo"
        src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"
      />
  
      <ul className="navBar">
       <li><Link to="/" >Home</Link></li>
       <li><Link to="/about" >About Us</Link></li> 
       <li><Link to="/contact" >Contact Us</Link></li>
       <li><Link to="/cart" >Cart {cartItem.length}</Link></li>
        <li>{loginUser}</li>
      </ul>
    </div>
  );
}
  