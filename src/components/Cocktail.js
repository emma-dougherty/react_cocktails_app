import React, {useContext} from 'react'
import UserContext from '../context/UserContext';

const Cocktail = ({cocktail}) => {
    
    const {user, setUser} = useContext(UserContext)

    const handleAddToFavourites = () => {
        const copyUser = {...user}
        copyUser.favourites.push(cocktail)
        setUser(copyUser)
        }

        // const handleAddToFavourites = (fave) => {
        //     const copyUser = [... user]
        //     const isOnList = copyUser.some((cocktail) => {
        //         return cocktail.id === fave.id
        //     }) 
        //     if (!isOnList) { 
        //     copyUser.favourites.push(fave)
        //     }
        //     setUser(copyUser) 
        // }
    

    return (
        <div className="cocktail">
            <p>{cocktail.strDrink}</p>
            {/* <img src={cocktail.strDrinkThumb}/> */}
            <button onClick={handleAddToFavourites}>This is shrimply the best</button>
        </div>
    )
}

export default Cocktail

// import React from 'react'



// const Cocktail = ({cocktail, onAddtoFavouritesClick}) => {

//     const handleAddtoFavouritesClick = () => {
//         onAddtoFavouritesClick(cocktail)
//     }

    

//     return (
//         <>
//         <li>
//             {cocktail.strDrink}
            
//             <br/>
//             {/* <img src={cocktail.strDrinkThumb}/> */}
//         </li>
//         <button value={cocktail} onClick={handleAddtoFavouritesClick}>Add to favs</button>
//         </>
//     )
// }


// export default Cocktail

