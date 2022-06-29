import React from "react";
import '../../style/menu-contain.css'
export const MenuContainer = ({link, icon, isHomeActive}) => {

    return (
        <li className={isHomeActive ? 'active' : ''}>
            <a href={link}>
                <span className="icon">{icon}</span>
            </a>
        </li>
    )
}
