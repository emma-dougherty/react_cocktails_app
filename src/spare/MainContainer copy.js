// import React, { useEffect, useState } from 'react'
// import UserContext from '../context/UserContext'
// import CocktailList from '../components/CocktailList'
// import Header from '../components/Header'
// import Favourites from '../components/Favourites'
// import margarita from '../images/margarita.png'
// import cocktail from '../images/cocktail.png'
// import shot from '../images/shot.png'
// import collins from '../images/collins.png'
// import martini from '../images/martini.png'
// import oldfash from '../images/oldfash.png'
// import highball from '../images/highball.png'



// const MainContainer = () => {


//     const [cocktails, setCocktails] = useState ([])
//     const [user, setUser] = useState ({name: 'Molly Lusk'})
//     const [favouriteCocktails, setFavouriteCocktails] = useState ([])
//     const listsArray = [cocktails, favouriteCocktails]
//     const [selectedList, setSelectedList] = useState([])

//     useEffect(() => {
//         getCocktails()
//     }, [selectedList])

//     const handleSelectChange = function (event) {
//         setSelectedList(event.target.value)
//     }

//     // const onAddtoFavouritesClick = (cocktail) => {
//     //     const copyList = [...favouriteCocktails]
//     //     copyList.push(cocktail)
//     //     setFavouriteCocktails(copyList)
//     // }

//     const getCocktails = () => { 
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
//         .then(res => res.json())
//         .then(cocktails => setCocktails(cocktails.drinks))
//         .catch(err => console.error);
//     }
    
            
//     return (
//         <>
//         <UserContext.Provider value={{user, setUser}} >
//         <div className='header'>
            
//             <Header user={user} listsArray={listsArray} handleSelectChange={handleSelectChange}/>
//         </div>
//             {/* <div className='wrapper'>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             <div><span class="dot"></span></div>
//             </div> */}

//             <div className='cocktail-grid'>
//             <div className='glasses'>
//             <span className="gl-background">
//             <img src={margarita}  className='cocktail-glass'/>
//             </span>
//             <img src={cocktail}  className='cocktail-glass'/> 
//             <img src={shot}  className='cocktail-glass'/>
//             <img src={collins}  className='cocktail-glass'/>
//             <img src={martini} className='cocktail-glass'/>
//             <img src={oldfash} className='cocktail-glass'/>
//             <img src={highball}  className='cocktail-glass'/>
//             </div>
        


//         <div>
//             {selectedList==favouriteCocktails ? <Favourites favouriteCocktails={favouriteCocktails}/> : <CocktailList cocktails={cocktails}/>}
        
//         </div>

//         </div>
//         </UserContext.Provider>
        
//         </>
//     )
// }

// export default MainContainer