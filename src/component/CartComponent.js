import {useSelector} from 'react-redux'

const CartComponent = ()=>{
 const items = useSelector((store)=>store.cart.items)

 console.log('CartComponent',items)

 return (<div>
    <h2>I am Mart loader Use</h2>
</div>)


}

export default CartComponent