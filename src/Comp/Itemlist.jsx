import React from "react";


function ItemList ({productos}) {

return (

productos.map (p =>(
    <Item
    key ={p.id}
    nombre= {p.nombre}
    precio = {p.precio}/>
))

)


}

export default ItemList