import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";


function App() {

  const [theme, setState] = useState(false);
  const [text, setText] = useState("Dark Mode");

  function toggle() {
    /* I have the ternary operator set to return "false" if true, and "true" if false,
      so, whatever the currentState is, it'll return the opposite, aka, toggle the value.
    */
    setState((currentState)=> currentState ? false : true);
    
    if(theme===false){
      setText((currentText)=> currentText="Light Mode");
    } else {
      setText((currentText)=> currentText="Dark Mode");
    }
  }

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = theme ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggle}>{text}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
