import {useState,useEffect} from "react"
const useGetRestoreById = (id)=>{
    const [cartData, setAllCartData] = useState({information:{},item:[] });


    useEffect(() => {
      console.log("I A useEffect  IN",id)
      fetchData();
    }, []);
  
    const fetchData = async () => {
      const res = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.0989231&lng=72.5751973&restaurantId=${id}`
      );
      const data = await res.json();
  
      // console.log("fetchData",data);

      // console.log("fetchData",data.data.cards[2].card.card.info);

      // console.log("REGULAz",data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
      const a = data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(value=>value?.card?.card?.itemCards?.length>0
      ).map(value=>value?.card?.card)

     
      setAllCartData({information:data.data.cards[2].card.card.info,item:a})

    }

    console.log("cartData",cartData)
    return cartData
    
}

export default useGetRestoreById