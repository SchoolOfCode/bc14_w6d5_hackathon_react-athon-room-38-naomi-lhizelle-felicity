import { useState, useEffect } from "react";

function Button({ drink }) {
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState([]);

  async function fetchCocktail() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    );
    const data = await response.json();
    console.log(data);

    setThumbnail(data.drinks[0].strDrinkThumb);
    setName(data.drinks[0].strDrink);
    // setIngredient(data.drinks[0].strIngredient1);
    // setIngredient([...ingredient, data.drinks[0].strIngredient2]);
    const newIngredients = [];
    for (let i = 1; i < 15; i++) {
      const ingredientProp = `strIngredient${i}`;
      if (data.drinks[0][ingredientProp] !== null) {
        newIngredients.push(data.drinks[0][ingredientProp]);
      }
    }
    setIngredient((prevIngredients) => [...prevIngredients, ...newIngredients]);
  }

  console.log(ingredient);
  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <>
      <img src={thumbnail} alt="" />
      <h1>{name}</h1>
    </>
  );
}

export default Button;

/* Plan for mapping ingredients 
1. get each ingredient and store it in it's own array 
2. map through each individual array and join any that isn't null
*/

/* Plan for Container
uplift ingredient from Button and pass it down as a prop to container
map through the ingredient array and display each ingredient in a list item
have a handleClick function that allows ingredient to display when button is selected
*/
