import React from "react"
import "./Reviewer.css"

function Reviewer() {
    return(
        <div className="reviewer">
            <div className="container-reviewer">
                <div className="reviewer-align">
                    <div className="reviewer-header">
                        <p>รีวิวจากลูกค้า</p>
                    </div>
                    <div className="customer-reviewer">
                        <div className="customer">
                            <div className="customer-img">
                                <img src="https://static.wikia.nocookie.net/powerpuff/images/7/7b/Bubbles-pic.png" />
                            </div>
                            <p className="customer-name">แมทธิว นักธุรกิจ</p>
                            <br />
                            <br />
                            <p className="customer-review">หมอหมึกช่วยผมเรื่องฤกษ์ยามในการเจรจาธุรกิจได้มากเลยตอนนี้ขายดีเทน้ำเทท่าเลยครับ</p>
                        </div>
                        <div className="customer">
                            <div className="customer-img">
                                <img src="https://static.wikia.nocookie.net/powerpuff/images/2/23/Blossom-pic.png" />
                            </div>
                            <p className="customer-name">แจ็ค นักแสดง</p>
                            <br />
                            <br />
                            <p className="customer-review">ต้องขอบคุณหมอหมึกในการช่วยทำให้ความสัมพันธ์ราบรื่นด้วยนะคะทำนายอะไรไว้ก็แม่นทุกอย่างเลยค่ะ</p>
                        </div>
                        <div className="customer">
                            <div className="customer-img">
                                <img src="https://static.wikia.nocookie.net/powerpuff/images/1/14/Buttercup-pic.png" />
                            </div>
                            <p className="customer-name">น้ำใส นักศึกษา</p>
                            <br />
                            <br />
                            <p className="customer-review">ที่หมอหมึกบอกมานะคะเกิดเกือบหมดเลยค่ะ ถ้าไม่ได้หมอหมึกช่วยไว้ ชีวิตคงแย่เลยค่ะ ดีนะที่ป้องกันเรื่องร้าย ๆ ทันเวลา</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviewer