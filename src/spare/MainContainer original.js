// import React, { useEffect, useState } from 'react'
// import Header from '../components/Header'
// import UserContext from '../context/UserContext'
// import CocktailsContainer from './CocktailsContainer'
// import margarita from '../images/margarita.png'
// import cocktail from '../images/cocktail.png'
// import shot from '../images/shot.png'
// import collins from '../images/collins.png'
// import martini from '../images/martini.png'
// import oldfash from '../images/oldfash.png'
// import highball from '../images/highball.png'


// const MainContainer = () => {


//     const [cocktails, setCocktails] = useState ([])
//     const [selectedCocktails, setSelectedCocktails] = useState ([])
    
    
//     const [user, setUser] = useState ({
//         name: 'Mol Lusk',
//         favourites: []
//     })

//     const onGlassClick = (glass) => {
//         if (glass === margarita) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Margarita glass')
//         }
//         else if (glass === cocktail) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Cocktail glass')
//         }
//         else if (glass === shot) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Shot glass')
//         }
//         else if (glass === collins) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Collins glass')
//         }
//         else if (glass === martini) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Martini glass')
//         }
//         else if (glass === oldfash) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Old-fashioned glass')
//         }
//         else if (glass === highball) {
//             cocktails.filter(cocktails => cocktails.strGlass === 'Highball glass')
//         return (
//             setSelectedCocktails(glass)
//             )
//         }
//     }   

//     useEffect(() => {
//         getCocktails()
//     }, [])

//     const getCocktails = () => {
//         fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
//         .then(res => res.json())
//         .then(cocktails => setCocktails(cocktails.drinks))
//         .catch(err => console.error);
//         setCocktails(cocktails);
//     }

//     return (
//         <>
    
//         <UserContext.Provider value={{user, setUser}} >
//             <div className='header'>
//         <Header user={user} />
//             </div>
//         <div className='wrapper'>
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
//         </div>

//         <div className='cocktail-grid'>
//             <div className='glasses'>
//             <img src={margarita}  className='cocktail-glass'/>
//             <img src={cocktail}  className='cocktail-glass'/> 
//             <img src={shot}  className='cocktail-glass'/>
//             <img src={collins}  className='cocktail-glass'/>
//             <img src={martini} className='cocktail-glass'/>
//             <img src={oldfash} className='cocktail-glass'/>
//             <img src={highball}  className='cocktail-glass'/>
//         </div>
        
        
//             <CocktailsContainer cocktails={cocktails} onGlassClick={onGlassClick} seledctedCocktails={selectedCocktails}/>   
//         </div>
//         </UserContext.Provider>
        
//         </>
//     )
// }

// export default MainContainer