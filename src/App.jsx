import {React,useState} from "react";
import Header from './components/header.jsx'
import Card from './components/card.jsx'
import data from './data'
import ThemeContext from './components/themecontext.jsx'

export default function App(){
    const [theme, setTheme] =useState('light')
    const cardel = data.map(item =>{
        return <Card 
        key={item.id}
        item={item}
    />
    })

    function themechanger(){
        setTheme(prev =>{
           return prev === "light" ? "dark" : "light"
        })
    }

    return (
        <ThemeContext.Provider value={theme}>
            <div className={`container ${theme}-container`}>
                <Header />
                {cardel}
                <button className="theme-selector" onClick={themechanger}>{theme === "light" ? 'Light' : 'Dark'} theme</button>
            </div>
        </ThemeContext.Provider>
    )
}