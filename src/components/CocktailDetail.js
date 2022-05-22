import React, {useContext} from 'react'
import UserContext from '../context/UserContext';

const CocktailDetail = ({selectedCocktail}) => {
    
    const {user, setUser} = useContext(UserContext)

    const handleAddToFavourites = () => {
        const copyUser = {...user}
        copyUser.favourites.push(cocktail)
        setUser(copyUser)
        }

    return (
        <div className="cocktail">
            <p>{cocktail.strDrink}</p>
            <img src={cocktail.strDrinkThumb}/>
            <p>{cocktail.strInstructions}</p>
            <p>{cocktail.strIngredient1}</p>
            <p>{cocktail.strIngredient2}</p>
            <p>{cocktail.strIngredient3}</p>
            <p>{cocktail.strIngredient4}</p>
            <p>{cocktail.strIngredient5}</p>
            <p>{cocktail.strIngredient6}</p>
            <p>{cocktail.strMeasure1} {cocktail.strIngredient1}</p>
            <p>{cocktail.strMeasure2} {cocktail.strIngredient2}</p>
            <p>{cocktail.strMeasure3} {cocktail.strIngredient3}</p>
            <p>{cocktail.strMeasure4} {cocktail.strIngredient4}</p>
            <p>{cocktail.strMeasure5} {cocktail.strIngredient5}</p>
            <p>{cocktail.strMeasure6} {cocktail.strIngredient6}</p>
            <button onClick={handleAddToFavourites}>This is shrimply the best</button>
        </div>
    )
}

export default CocktailDetail