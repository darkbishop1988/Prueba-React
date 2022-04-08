import React from "react";
import {Card} from "react-bootstrap"
import ItemCount from "./ItemCount";
function Item  (id, nombre , precio, imagen) { 
return (

<Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
     {precio}
    </Card.Text>
    <ItemCount stock={3}/>
  </Card.Body>
</Card>



)


}
