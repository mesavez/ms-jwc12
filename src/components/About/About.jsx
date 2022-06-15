import React from "react"
import "./About.css"

function About() {
    return(
        <div className="about">
            <div className="container-about">
                <div className="about-align">
                    <div className="about-img">
                        <img src="https://images-ext-1.discordapp.net/external/UVQ096lUMlvKcjpCtyIPehGYjPyqoHqAiXMeU4CetUY/https/i.pinimg.com/originals/1f/e2/1a/1fe21ad8ac359fedf0370a0ec14dffa8.png" />
                    </div>
                    <div className="about-text">
                        <h1>ทำนายชะตากับหมอหมึก</h1>
                        <br/>
                        <p>สามารถจองคิวได้ในเว็บหรือ</p>
                        <p>email : octopus_fortune@teller.com</p>
                        <p>โทรศัพท์ : 099 XXX XXXX</p>
                        <p>และมาที่สำนักที่</p>
                        <p>ชั้น 12 อาคาร JWC ถนนโปรแกรมมิ่ง แขวงเว็บ เขตอินเตอร์เน็ต กรุงเทพ 99999</p>
                        <p>ตามวันเวลาที่นัดไว้</p>
                        <br/>
                        <p>จำกัดที่ 10 คิวต่อหนึ่งวัน</p>
                        <p>เปิดทำการ 10.00-18.30น. พัก 12.00-13.00</p>
                        <p>เปิดทุกวันอังคารถึงเสาร์ หยุดวันจันทร์และอาทิตย์</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About