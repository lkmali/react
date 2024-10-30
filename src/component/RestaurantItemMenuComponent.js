import { IMAGE_URL } from "../utils/constant"
import {useDispatch} from 'react-redux'
import {addItem} from '../redux/cart.reducer'
const ResMiniComponent =  (props)=>{

  const dispatch = useDispatch()


  const addCartItem = ()=>{
    dispatch(addItem(props))
  }



 return (<div  className="item-class"  >
       <div  className="information-page"  >
       <h1>{props.name}</h1>
       <h1>{props.defaultPrice/100} INR </h1>
       <h1>{props.description}</h1>
     </div>
     <img 
          className="cart-image"
          src={`${IMAGE_URL}/${props.imageId}`}
        />

      <button onClick={
       addCartItem
      } > Add Item </button>

 
        
      
 </div>)   

}

export default ResMiniComponent