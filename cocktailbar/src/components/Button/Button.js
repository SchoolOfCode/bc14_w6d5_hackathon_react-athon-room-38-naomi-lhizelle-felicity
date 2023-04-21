import { useState, useEffect } from 'react';

function Button({ drink })
{
    const [thumbnail, setThumbnail] = useState('');
    const [name, setName] = useState('');
    const [ingredient, setIngredient] = useState([]);
    

    async function fetchCocktail()
    {
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`);
        const data = await response.json();
        console.log(data);

        setThumbnail(data.drinks[0].strDrinkThumb);
        setName(data.drinks[0].strDrink);
        // setIngredient(data.drinks[0].strIngredient1);
        // setIngredient([...ingredient, data.drinks[0].strIngredient2]);
        for (let i = 1; i < 15; i++) {
            const ingredientProp = `strIngredient${i}`;
            if (data.drinks[0][ingredientProp] !== null) {
                setIngredient([...ingredient, data.drinks[0][ingredientProp]]);
            }
        }

    }
    
    console.log(ingredient);
    useEffect(() => {
        fetchCocktail();
      }, []);

    return <>
        <img src={thumbnail} alt=""/>
        <h1>{name}</h1>
        <ul>
            {ingredient.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
        </ul>
    </>
}

export default Button;

/* Plan for mapping ingredients 
1. get each ingredient and store it in it's own array 
2. map through each individual array and join any that isn't null
*/

// "strIngredient1":"Strawberries",
// "strIngredient2":"Honey",
// "strIngredient3":"Water",
// "strIngredient4":null,
// "strIngredient5":null,
// "strIngredient6":null,
// "strIngredient7":null,
// "strIngredient8":null,
// "strIngredient9":null,
// "strIngredient10":null,
// "strIngredient11":null,
// "strIngredient12":null,
// "strIngredient13":null,
// "strIngredient14":null,
// "strIngredient15":null,"



