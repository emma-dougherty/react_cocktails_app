import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

const Favourites = () => {

    const {user, setUser} = useContext(UserContext)

    const handleItemDelete = (cocktail) => {
        const copyUser = {...user}
        const indexToRemove = copyUser.favourites.indexOf(cocktail)
        copyUser.favourites.splice(indexToRemove, 1)
        setUser(copyUser)
    }

    const favouritesNodes = user.favourites.map((cocktail) => {
        return (
        <li>
            <hr />
            <span>
            {cocktail.strDrink} 
            </span>
            <br/>
                <button onClick={() => handleItemDelete(cocktail)}>  Remove  </button>
        </li>
        )
    })
    return (
        <div className='favourites-list'>
            {user.favourites.length > 0 ? <ul >
                {favouritesNodes}
            </ul> : <p>No favs yet</p>}
        </div>
    )
}

export default Favourites