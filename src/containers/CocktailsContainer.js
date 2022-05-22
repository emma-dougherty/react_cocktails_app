import React from "react"
import CocktailList from '../components/CocktailList'
import margarita from '../images/margarita.png'
import cocktail from '../images/cocktail.png'
import shot from '../images/shot.png'
import collins from '../images/collins.png'
import martini from '../images/martini.png'
import oldfash from '../images/oldfash.png'
import highball from '../images/highball.png'

const CocktailsContainer = ({cocktails, listsArray, handleSelectChange}) => {

    const handleClick = function(event) {
        const chosenList = listsArray[event.target.value];
        handleSelectChange(chosenList);
    }
    
    return (
            <>
                <div className='cocktail-grid'>
                    <div className='glasses'>
                        <img src={margarita} className='cocktail-glass1' onClick={handleClick}/>
                        <img src={cocktail} className='cocktail-glass2' onClick={handleClick}/>
                        <img src={shot} className='cocktail-glass3' onClick={handleClick}/>
                        <img src={collins} className='cocktail-glass4' onClick={handleClick}/>
                        <img src={martini} className='cocktail-glass1' onClick={handleClick}/> 
                        <img src={oldfash} className='cocktail-glass2'onClick={handleClick}/>
                        <img src={highball} className='cocktail-glass3' onClick={handleClick}/>                     

                    </div>
                </div>
                <div className='cocktails-container'>
            {<CocktailList cocktails={cocktails}/>}
            </div>
                
            </>   
        )  
    }

export default CocktailsContainer