import CartComponent from "./RestoCard";
import PrmotedRestoCard from "./PrmotedRestoCard";

import Simmer from "./Simmer";
import { useState, useEffect } from "react";

import onlineStatus  from '../utils/onlineStatus'
export default () => {
  const [loader, setLoader] = useState(true);
  const [allCartData, setAllCartData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [searchText, setSearchText] = useState([]);

  let isUserOnline = onlineStatus()
  console.log('useState([]);',useState([]))



   const PromtedCard = PrmotedRestoCard(CartComponent) 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData =  async () => {
    const res = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0989231&lng=72.5751973"
    );
    const data = await res.json();

    console.log("fetchData");
    const result = data.data.cards.filter(
      (value) =>
        value?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
    );
    const finalData =  result[0].card?.card?.gridElements?.infoWithStyle?.restaurants

    setLoader(false);
    setAllCartData(finalData);
    setFilterData(finalData);
    //console.log("finalData", finalData);
  };

 
  //Laxman Mali
  return ( 
    !isUserOnline?<h1>User is offline</h1>:(   <div className="body">
      <div className="searchBody" >
        <input className="search"  value={searchText}
        onChange={(event)=>{
            setSearchText(event.target.value)
        }} placeholder="Search Foold"/>
  
        <button type="submit" className="searchButton" onClick={()=>{
  
  
  console.log("allCartData",allCartData)
  
          let searchData = allCartData.filter(value=>{
            return value.info.name.toString().toLowerCase().includes(searchText.toString().toLowerCase())
          })
          
  console.log("searchData",searchData)
          setFilterData(searchData);
        }} > search </button>
  
        {/* <button
          type="submit"
          className="submit-button"
          onClick={() => {
            const data = allCartData.filter(
              (value) => value.info.avgRating >= 4.5
            );
            setFilterData(data);
          }}
        >
        </button> */}
      </div>
  
      {loader?<Simmer />:(<div className="cardComponent">
        {filterData.map(value => value.info.isOpen?<PromtedCard key={value.info.id} {...value}></PromtedCard>:<CartComponent key={value.info.id} {...value} />)}
      </div>)}
  
  
    </div>)
    
 )
};
