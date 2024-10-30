import RestaurantItemMenuComponent from './RestaurantItemMenuComponent'
import {useState} from 'react'
const RestaurantCategoryComponent =  ({title,itemCards,setIndex,index,clickIndex})=>{
 return (<div>
      <h4   onClick={
           ()=>{
            setIndex(index)
           }
          }   >{title} {itemCards.length }   </h4>
      <div >
       {
       index===clickIndex?  itemCards.map(value=>(
          <RestaurantItemMenuComponent key={value.card.info.id}  {...value.card.info}  ></RestaurantItemMenuComponent>
       ))  : <div></div> 
     
       }     
          
     </div> 
 </div>)   

}

export default RestaurantCategoryComponent