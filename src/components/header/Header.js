import React from "react"
import ReactDom from "react-dom"
import "./header.css"

export default function Header(props) {
    console.log(props);
    return (
        <nav className="navbar">
            <div className="page-center">
                <ul>
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Laureats</a></li>
                    <li><a href="#">Administration</a></li>
                    <li><a href="#">A propos</a></li>
                </ul>
            </div>
        </nav>)
}
