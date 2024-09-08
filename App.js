import React from 'react'
import ReactDOM from 'react-dom/client' 
 
 const child = React.createElement("div",{id:"chiild"},"I AM LAXMAN")
 
 
 
 const heading = React.createElement ("h2",{id:"laxman"},child,child)
   const root = ReactDOM.createRoot(document.getElementById("root"))
   console.log("root",root)
   root.render(heading)