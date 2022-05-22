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
            <p>
            {cocktail.strDrink} 
            </p>
                {/* <button onClick={() => handleItemDelete(cocktail)}>  Remove  </button> */}

                <i class="fa fa-remove" onClick={() => handleItemDelete(cocktail)}/>
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