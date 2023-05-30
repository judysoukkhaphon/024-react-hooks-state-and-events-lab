import React, {useState} from "react";
import Item from "./Item";



/* "you should use "selectedCategory" to 
determine which items to display in the shopping list */

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [foods, setFoods] = useState(items)
  let filteredFoods;

  /*
  'foods' contains 'items'.
  'selectedCategory' contains the options.
  */




  

  function func(event) {
      setSelectedCategory((x)=>{x = event.target.value;;
      return x});
  }
  console.log(selectedCategory)
  
  if(selectedCategory !== "All"){
  filteredFoods = items.filter((x)=>{
    return x.category == selectedCategory;
  })
  } 
  else{
    filteredFoods = items;
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={func} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredFoods.map((food) => (
          <Item key={food.id} name={food.name} category={food.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;


/*
This component passes data to "Item"


*/