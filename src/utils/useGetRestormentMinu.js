import {useState,useEffect} from "react"
const useGetRestore = ()=>{
    const [allCartData, setAllCartData] = useState([]);


    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData =  async () => {
        const res = await fetch(
          "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0989231&lng=72.5751973"
        );
        const data = await res.json();
    
      
        const result = data.data.cards.filter(
          (value) =>
            value?.card?.card?.gridElements?.infoWithStyle?.restaurants?.length > 0
        );
        console.log("result");
        const finalData =  result[0].card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllCartData(finalData);

      };

      return allCartData
    
}

export default useGetRestore