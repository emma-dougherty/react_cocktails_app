import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import UserContext from '../context/UserContext'
import CocktailsContainer from './CocktailsContainer'
import CocktailList from '../components/CocktailList'
import Bubbles from '../components/Bubbles'
import hero from '../images/hero.png'

const MainContainer = () => {

    const [cocktails, setCocktails] = useState ([])
    const [selectedList, setSelectedList] = useState([])
    const [user, setUser] = useState ({
        name: 'Molly Lusk',
        favourites: []
    })

    useEffect(() => {
        getCocktails()
        },[])

    const handleSelectChange = (selectedItem) => {
        setSelectedList(selectedItem)
        }

    const margaritaList = cocktails.filter(drink => drink.strGlass === 'Margarita glass')   
    const cocktailGlList = cocktails.filter(drink => drink.strGlass === 'Cocktail glass')
    const shotList = cocktails.filter(drink => drink.strGlass === 'Shot glass')
    const collinsList = cocktails.filter(drink => drink.strGlass === 'Collins glass')
    const martiniList= cocktails.filter(drink => drink.strGlass === 'Martini glass')
    const oldfashList = cocktails.filter(drink => drink.strGlass === 'Old-fashioned glass')
    const highballList = cocktails.filter(drink => drink.strGlass === 'Highball glass')

    const listsArray = [margaritaList, cocktailGlList, shotList, collinsList, martiniList, oldfashList, highballList] 


    const getCocktails = () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
        .then(res => res.json())
        .then(cocktails => setCocktails(cocktails.drinks))
        .catch(err => console.error);
        setCocktails(cocktails);
    }

    return (
        <>
        <UserContext.Provider value={{user, setUser}} >
            <div className='header'>
                <Header user={user} />
            </div>

                <Bubbles/> 
            
            <div className='hero'>
                <img src={hero} className='logo'/>
            </div>
                {selectedList ? <CocktailList selectedList={selectedList} /> : null}
                <CocktailsContainer cocktails={cocktails} listsArray={listsArray} selectedList={selectedList} handleSelectChange={handleSelectChange}/>   
        
        </UserContext.Provider> 
        </>
    )
}

export default MainContainer

// margaritaList={margaritaList} cocktailGlList={cocktailGlList} shotList={shotList} collinsList={collinsList} martiniList={martiniList} oldfashList={oldfashList} highballList={highballList}