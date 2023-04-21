/* Plan for mapping ingredients 
1. get each ingredient and store it in it's own array 
2. map through each individual array and join any that isn't null
*/

/* Plan for Container
uplift ingredient from Button and pass it down as a prop to container
map through the ingredient array and display each ingredient in a list item
have a handleClick function that allows ingredient to display when button is selected
*/




// Importing necessary components and modules.
import '../App/App.css';
import { useState, useEffect } from "react";

// Defining a new component called "Button".
function Button({ drink, uplift }) {
  // Using the useState hook to create three state variables: "thumbnail", "name", and "ingredient".
  const [thumbnail, setThumbnail] = useState("");
  const [name, setName] = useState("");
  const [ingredient, setIngredient] = useState([]);

  // Defining an asynchronous function called "fetchCocktail" that fetches data from an API and updates the state variables accordingly.
  async function fetchCocktail() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`
    );
    const data = await response.json();

    // Updating the state variables "thumbnail" and "name" with data from the API response.
    setThumbnail(data.drinks[0].strDrinkThumb);
    setName(data.drinks[0].strDrink);

    // Creating a new array called "newIngredients" that contains up to 15 ingredients from the API response.
    const newIngredients = [];
    for (let i = 1; i < 15; i++) {
      const ingredientProp = `strIngredient${i}`;
      if (data.drinks[0][ingredientProp] !== null) {
        newIngredients.push(data.drinks[0][ingredientProp]);
      }
    }

    // Updating the "ingredient" state variable with the new ingredients, and calling the "uplift" function to update the parent component's "data" state variable.
    setIngredient((prevIngredients) => {
      const updatedIngredients = [...prevIngredients, ...newIngredients];
      uplift(updatedIngredients);
      return updatedIngredients;
    });
  }

  // Using the useEffect hook to call "fetchCocktail" when the component is mounted.
  useEffect(() => {
    fetchCocktail();
  }, []);

  // Rendering the button with an image thumbnail, the name of the cocktail, and an onClick event that calls the "uplift" function with the "ingredient" state variable.
  return (
    <>
        <div className="">
        <button onClick={() => { uplift(ingredient)}} ><img src={thumbnail} alt="" /></button>
        <h1>{name}</h1>
        </div>
    </>
  );
}

// Exporting the Button component as the default export of this module.
export default Button;