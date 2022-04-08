import React, { useEffect, useState } from "react";
import ItemCount from "./ItemCount";
import customFetch from "./Promises";
import productos from "./productos";
import ItemList from "./itemlist";



function ItemListContainer () {
    const [items, setItems] = useState ([]);

    useEffect(() =>{
        customFetch(3000, productos)
        .then(resultado => setItems(resultado))
        .catch (error => console.log(error));
    }) [items]
 return (
  <div>
   
  <ItemList productos={items}/>

  </div>



 )

} 

export default ItemListContainer