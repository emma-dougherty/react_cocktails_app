import React from 'react'
import Cocktail from './Cocktail'


const CocktailList = ({cocktails}) => {

    const cocktailNodes = cocktails.map ((cocktail, index) => {
        return <Cocktail cocktail={cocktail} key={index} />
    })

    return (
        <>
        {cocktailNodes}
        </>
    )
}

export default CocktailList