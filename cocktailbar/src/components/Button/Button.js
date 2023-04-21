import { useState, useEffect } from 'react';

function Button()
{
    const [thumbnail, setThumbnail] = useState('');
    const [name, setName] = useState('');

    async function fetchCocktail()
    {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=Blue Margarita");
        const data = await response.json();
        console.log(data);

        setThumbnail(data.drinks[0].strDrinkThumb);
        setName(data.drinks[0].strDrink);
    }

    useEffect(() => {
        fetchCocktail();
      }, []);

    return <>
        <img src={thumbnail} alt=""/>
        <h1>{name}</h1>
    </>
}

export default Button;