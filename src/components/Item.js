import React, {useState} from "react";


function Item(prop) {

  // li state-variables
  const [liClass, setLiClass] = useState("");
  
  // Button state-variables
  const [btn, setBtnClass] = useState("add");
  const [text, setBtnText] = useState("Add to Cart");



  function render(){
    if(btn=="add"){
      setLiClass((currentValue)=> currentValue= "in-cart");
      setBtnClass((currentValue)=> currentValue = "remove");
      setBtnText((currentValue)=> currentValue = "Remove From Cart");
    } if(btn=="remove"){
      setLiClass((currentValue)=> currentValue= "");
      setBtnClass((currentValue)=> currentValue = "add");
      setBtnText((currentValue)=> currentValue = "Add to Cart");
    }
  }

  return (
    <li className={liClass}>
      <span>{prop.name}</span>
      <span className="category">{prop.category}</span>
      <button onClick={render} className={btn}>{text}</button>
    </li>
  );
}

export default Item;


/*


PSEUDO-CODE:
<li className = "in-cart" or ""> 
  shows whether an item is in the cart, or not.

<button className = "add" or "remove"> 
  changes button display, text should change with className, 
  classname should change with whether or not item is in-cart.

*/
