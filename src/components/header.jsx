import React from "react";
import ThemeContext from './themecontext'

export default function Header(){
    return (
        <ThemeContext.Consumer>
            {theme =>{
                console.log(theme)
                return (<div className={`header ${theme}-header`}>
                            <span className="material-symbols-outlined" id="header-icon">
                                public
                            </span>
                            <p className="header-title">My Travel journal. </p>
                        </div>)
            }}
        </ThemeContext.Consumer>
    )
}