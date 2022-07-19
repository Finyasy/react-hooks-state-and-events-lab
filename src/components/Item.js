import React,{useState} from "react";

function Item({ name, category }) {
  const [isInCat, setIsInCat] = useState(false);

  function handleAddToCat() {
    setIsInCat((isInCat) => !isInCat);
  }

  return (
    <li className={isInCat? "in-cart":""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCat ? "remove":"add"}
        onClick={handleAddToCat}
      >
        {isInCat ? "Remove From" : "Add To"} Cart
      </button>
    </li>
  );
}

export default Item;
