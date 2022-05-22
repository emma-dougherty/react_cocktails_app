import React, {useState} from 'react'
import Favourites from './Favourites'
import hero from '../images/hero.png'
import shrimplies from '../images/my-shrimplies.png'

const Header = ({user }) => {



    const [favsActive, setFavsActive] = useState(false)

    const handleFavouritesClick = () => {
        setFavsActive(!favsActive)
    }

        


    return (
    <header>
    
        <div id="user-info">
            {/* <h3>Welcome back {user.name}</h3>
             */}
            
            <img src={shrimplies} className='shrimp' onClick={handleFavouritesClick}/>

        
        
            {favsActive && <Favourites user={user}/>}
            </div>
            {/* <div className='hero'>
            <img src={hero} className='logo'/>
            </div> */}
    </header>

    )
} 

export default Header

// import React, {useState} from 'react'
// import Favourites from './Favourites'
// import hero from '../images/hero.png'
// import shrimplies from '../images/shrimplies.png'

// const Header = ({user, listsArray, handleSelectChange }) => {

    

//     // const [favsActive, setFavsActive] = useState(false)

//     // const handleFavouritesClick = () => {
//     //     setFavsActive(!favsActive)
//     // }
//     return (
//     <header>
//         <hgroup>
//         <div>
//                 <select onChange={handleSelectChange}>
//                     <option key='0' value={listsArray[0]}>
//                         All items
//                     </option>
//                     <option key='1' value={listsArray[1]}>
//                         Favs
//                     </option>

//                 </select>
//             </div>
//             </hgroup>
//         {/* 
//     <div id="user-info">
//         <input 

//         type="radio" name="home" onClick={handleSelectChange} value={listsArray[0]}
//         id="home" className="input-hidden" />
//         <label for="home">
//         <img src={shrimplies}
//             alt="home" />
//         </label>

//         <input 
//         type="radio" name="favs" onClick={handleSelectChange} value={listsArray[1]}
//         id="favs" className="input-hidden" />
//         <label for="favs">
//         <img 
//             img src={shrimplies}
//             alt="favs" />
//         </label> */}


        
//             {/* <h3>Welcome back {user.name}</h3> */}
            
//             {/* <img src={shrimplies} className='shrimp' onClick={handleFavouritesClick}/> */}
//             {/* favsActive &&  */}
//             {<Favourites user={user}/>}
//             {/* </div> */}
//             <div className='hero'>
//             <img src={hero} className='logo'/>
//             </div>
//     </header>

//     )
// } 

// export default Header