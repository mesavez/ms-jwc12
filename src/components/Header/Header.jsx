import React from "react"
import "./Header.css"

function Header() {

    return(
        <div className="header">
            <div className="container-header">
                <div className="header-align">
                    <div className="header-name">
                        <a href="#"></a>
                    </div>
                    <ul class="menu">
                        <li className="menu-link">
                            <a href="#">เกี่ยวกับ</a>
                        </li>
                        <li className="menu-link">
                            <a href="#">บทความ</a>
                        </li>
                        <li className="menu-link">
                            <a href="#">จองคิว</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header