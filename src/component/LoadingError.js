import {useRouteError} from "react-router-dom"
export default ()=>{
     const error = useRouteError()
     console.log("I AM TESTING",error)
    return (<div>
         <h1> OOPS!!!!</h1>
          <h2>{error.statusText}</h2>

    </div>)
}