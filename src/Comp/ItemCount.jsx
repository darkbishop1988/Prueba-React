import React, {useState} from "react";

 const ItemCount = ({initial,stock}) => {
    
        const [counter, setCounter] = useState(initial);
    
        const handleIncrease = () => {
            if (counter < stock){
                setCounter(counter + 1);
            }
        };
    
        const handleDecrease = () => {
            if (counter > initial) {
                setCounter(counter - 1)
            }
        }
    
        const handleReset = () => {
            setCounter(0);
        }

  return (
    <>
        <div className="counter">
            <div className="counter_">{counter}</div>
            <button className="Sumar" onClick={handleIncrease}> Sumar</button>
            <button className="Restar" onClick={handleDecrease}>Restar</button>
            <button className="reset" onClick={handleReset}>Reiniciar</button>
        </div>
    </>
  );
}
export default ItemCount;