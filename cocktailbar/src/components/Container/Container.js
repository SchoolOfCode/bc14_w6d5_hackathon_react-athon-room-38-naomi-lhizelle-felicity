function Container ({ingredient}) {

    return <>
        <ul>
            {ingredient.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
            })}
        </ul>
    </>
}

export default Container;