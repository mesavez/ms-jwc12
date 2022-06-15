import React from "react"
import "./Banner.css"

function Banner() {
    return(
        <div className="banner">
            <div className="banner-color">
                <div className="container-banner">
                    <div className="banner-align">
                        <div className="banner-text">
                            <h1 id="banner-margin">หมอหมึก</h1>
                            <p id="banner-margin">ผู้มีประสบการณ์มากกว่า 10 ปี พร้อมคำพยากรณ์ที่แม่นยำ</p>
                            <a href="#" className="banner-btn" id="banner-margin">จองคิว</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner