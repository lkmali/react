// import CartComponent from "./Cart";
import Simmer from "./Simmer";
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import RestaurantMainHome from './RestaurantMainHome'
import useGetRestormentById  from '../utils/useGetRestormentById'
import RestaurantCategoryComponent from "./RestaurantCategoryComponent";
 const RestaurantComponent =   ()=> {

  const [clickIndex,setIndex] = useState(null)

  let {id} = useParams()
  const result = useGetRestormentById(id)
  
    return (
      <div>
       <RestaurantMainHome {...result.information}   ></RestaurantMainHome>
       {result.item.map((value,index)=>(
        <div key={value.type} >
           <RestaurantCategoryComponent
             title= {value.title}  
           itemCards= {value.itemCards}
           setIndex={setIndex}
           index={index}
           clickIndex={ clickIndex} />
           <hr></hr>
        </div>

        ))}
      </div>
      )

  };

  export default RestaurantComponent
 


