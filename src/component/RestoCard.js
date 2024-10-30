import { Link } from "react-router-dom";
import {useContext} from "react"
import {IMAGE_URL} from "../utils/constant"
import UserContext from "../utils/UserContext";
export default (props) => {


   const {loginUser}  = useContext(UserContext)  

   const {name,id,locality,avgRating,costForTwo,cloudinaryImageId} = props.info  
    return (
  
      <div className="item-cart">
        <h2><Link to={`/restaurant/${id}`}  >{name}</Link>  </h2>
    
       <img
          className="cart-image"
          src={`${IMAGE_URL}/${cloudinaryImageId}`}
        /> 
        <h3> {costForTwo}</h3>
        <h3> {locality}</h3>
        <h3> {avgRating}</h3>
         <h3>{loginUser}</h3>

         
      </div>
    )
  };