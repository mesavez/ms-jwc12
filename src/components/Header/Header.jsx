import React from "react"
import "./Header.css"

function Header() {

    return(
        <div className="header">
            <div className="container-header">
                <div className="header-align">
                    <div className="header-name">
                        <a href="#">Dr.Muek</a>
                    </div>
                    <ul>
                        <li><a href="#">ABOUT</a></li>
                        <li><a href="#">BLOG</a></li>
                        <li><a href="#">BOOK</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header