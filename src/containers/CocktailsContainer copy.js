// import React, { useState, useEffect } from "react"
// import CocktailList from '../components/CocktailList'
// import margarita from '../images/margarita.png'
// import cocktail from '../images/cocktail.png'
// import shot from '../images/shot.png'
// import collins from '../images/collins.png'
// import martini from '../images/martini.png'
// import oldfash from '../images/oldfash.png'
// import highball from '../images/highball.png'

// const CocktailsContainer = ({selectedList, listsArray, handleSelectChange}) => {


    
//     return (
//             <>
//                 <div className='cocktail-grid'>
//                     <div className='glasses'>
//                         <img src={margarita} className='cocktail-glass1' onClick={handleSelectChange} value={listsArray[0]}/>
//                         <img src={cocktail} className='cocktail-glass2' onClick={handleSelectChange} value={listsArray[1]}/>
//                         <img src={shot} className='cocktail-glass3' onClick={handleSelectChange} value={listsArray[2]}/>
//                         <img src={collins} className='cocktail-glass4' onClick={handleSelectChange} value={listsArray[3]}/>
//                         <img src={martini} className='cocktail-glass1' onClick={handleSelectChange} value={listsArray[4]}/>
//                         <img src={oldfash} className='cocktail-glass2'onClick={handleSelectChange} value={listsArray[5]}/>
//                         <img src={highball} className='cocktail-glass3' onClick={handleSelectChange} value={listsArray[6]}/>                     
//                     </div>
//                 </div>
//             <CocktailList selectedList={selectedList}/>
                
//             </>   
//         )  
//     }

// export default CocktailsContainer

// cocktails, margaritaList, cocktailGlList, shotList, collinsList, martiniList, oldfashList, highballList


{/* 
// import React, { useState, useEffect } from "react"
// import CocktailList from '../components/CocktailList'
// import margarita from '../images/margarita.png'
// import cocktail from '../images/cocktail.png'
// import shot from '../images/shot.png'
// import collins from '../images/collins.png'
// import martini from '../images/martini.png'
// import oldfash from '../images/oldfash.png'
// import highball from '../images/highball.png'

// const CocktailsContainer = ({cocktails}) => { */}

//     const [setCocktails, setCocktailsActive] = useState([])

//     const onGlassClick = (() => {
//         const newList = [... cocktails]

//         if (cocktail === margarita) {
//             cocktails.filter(newList => newList.strGlass === 'Margarita glass')
//         }
//         else if (cocktail === cocktail) {
//             cocktails.filter(newList => newList.strGlass === 'Cocktail glass')
//         }
//         else if (cocktail === shot) {
//             cocktails.filter(newList => newList.strGlass === 'Shot glass')
//         }
//         else if (cocktail === collins) {
//             cocktails.filter(newList => newList.strGlass === 'Collins glass')
//         }
//         else if (cocktail === martini) {
//             cocktails.filter(newList => newList.strGlass === 'Martini glass')
//         }
//         else if (cocktail === oldfash) {
//             cocktails.filter(newList =>  newList.strGlass === 'Old-fashioned glass')
//         }
//         else if (cocktail === highball) {
//             cocktails.filter(newList => newList.strGlass === 'Highball glass')
//         }
//         setCocktailsActive(newList)
//     })


//     return (
//         <div>
//             <div className='cocktail-grid'>
//                 <div className='glasses'>
                    
//                     <img src={margarita} className='cocktail-glass1' onChange={onGlassClick} />
//                     <img src={cocktail} className='cocktail-glass2' onChange={onGlassClick} /> 
//                     <img src={shot} className='cocktail-glass3' onChange={onGlassClick} />
//                     <img src={collins} className='cocktail-glass4' onChange={onGlassClick} />
//                     <img src={martini} className='cocktail-glass1' onChange={onGlassClick} />
//                     <img src={oldfash} className='cocktail-glass2' onChange={onGlassClick} />
//                     <img src={highball} className='cocktail-glass3' onChange={onGlassClick} />
//                 </div>
//             </div> 

            
//         <CocktailList setCocktails={setCocktails} onGlassClick={onGlassClick}/>
//         </div>
//     )
// }


// export default CocktailsContainer



{/* 
                <input type="image" name="cocktail-glass1" src={margarita} className='cocktail-glass1' onChange={handleSelectChange} value={listsArray[0]} />  

                <input type="image" name="cocktail-glass1" src={margarita} className='cocktail-glass1' onChange={handleSelectChange} value={listsArray[1]} /> */}


                    
                    {/* <img src={margarita} className='cocktail-glass1' onChange={handleSelectChange} value={listsArray[0]} />
                    <img src={cocktail} className='cocktail-glass2' onChange={handleSelectChange} value={listsArray[1]}/> 
                    <img src={shot} className='cocktail-glass3' onChange={handleSelectChange} value={listsArray[2]}/>
                    <img src={collins} className='cocktail-glass4' onChange={handleSelectChange} value={listsArray[3]} />
                    <img src={martini} className='cocktail-glass1' onChange={handleSelectChange} value={listsArray[4]}/>
                    <img src={oldfash} className='cocktail-glass2' onChange={handleSelectChange} value={listsArray[5]}/>
                    <img src={highball} className='cocktail-glass3' onChange={handleSelectChange} value={listsArray[6]}/> */}

                    {/* <CocktailList setCocktails={setCocktails}/> */}



                //     <label>
                //     <input type="radio" name="margarita" value={listsArray[0]} checked>
                //     <img src={margarita} onChange={handleSelectChange}/>
                //     </input>
                // </label>    
                // <label>
                //     <input type="radio" name="cocktail" value={listsArray[1]}>
                //     <img src={cocktail} onChange={handleSelectChange}/>
                //     </input>
                // </label>
                // <label>
                //     <input type="radio" name="shot" value={listsArray[2]}>
                //     <img src={shot} onChange={handleSelectChange}/>
                //     </input>
                // </label>
                // <label>
                //     <input type="radio" name="collins" value={listsArray[3]}>
                //     <img src={collins} onChange={handleSelectChange}/>
                //     </input>
                // </label>
                // <label>
                //     <input type="radio" name="martini" value={listsArray[4]}>
                //     <img src={martini} onChange={handleSelectChange}/>
                //     </input>
                // </label>
                // <label>
                //     <input type="radio" name="oldfash" value={listsArray[5]}>
                //     <img src={oldfash} onChange={handleSelectChange}/>
                //     </input>
                // </label>
                // <label>
                //     <input type="radio" name="highball" value={listsArray[6]}>
                //     <img src={highball} onChange={handleSelectChange}/>
                //     </input>
                // </label> 