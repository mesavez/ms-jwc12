import React from "react"
import "./Biography.css"

function Biography() {
    return (
        <div className="biography">
            <div className="container-biography">
                <div className="biography-align">
                    <div className="biography-text">
                        <h1>ประวัติหมอหมึก</h1>
                        <br/>
                        <p>หมอหมึกเป็นนักพยากรณ์ที่ชำนาญด้านการทำนายดวงด้วยลูกแก้วพยากรณ์ ไพ่ทาโร และการดูลายมือ</p>
                        <br/>
                        <p>ด้วยความสามารถที่หลากหลายทำให้หมอหมึกสามารถเลือกวิธีการทำลายที่เหมาะสมกับแต่ละบุคคลเพื่อให้ได้ผลลัพธ์แม่นยำที่สุด</p>
                    </div>
                    <div className="biography-img">
                        <img src="https://media.discordapp.net/attachments/697307129928745042/985925550226944020/Quizzing_Lady_2011_Design.png" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biography