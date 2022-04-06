import React  from "react";
import ItemCount from "./Comp/ItemCount";




function Items () { 

return (
   <>
    <div className="container">
     <div className="imagen1"> 
     <ItemCount className ="contador" initial={0} stock = {5} />
     </div > 
    </div>
    </>



    )

    } 

    export default Items
