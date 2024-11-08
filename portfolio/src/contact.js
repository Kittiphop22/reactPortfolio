import React from "react";
import { Card } from "react-bootstrap";
const Github = require('./assets/images/Github.png')
const gmail = require('./assets/images/gmail.png')
const phone = require('./assets/images/phone.png')

export default function Contact() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '80px', fontFamily: 'Kanit', backgroundColor:'#FFEEA9',height:'90vh'}}>
            <div style={{ padding: '10px', fontSize: '24px' }}>
                <div style={{textAlign:'center',fontSize:'48px', fontWeight:'bold'}}>Contact</div>
                <Card style={{ width: '720px', borderRadius: '30px', borderColor: 'black', borderWidth: '2px' }}>
                    <Card.Body>
                        <Card border='0'>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left', }}>
                                <div className="mx-4"><img src={Github} alt="github" className="acheive" /></div>
                                <div className="mx-4">Github<br />https://github.com/Kittiphop22<br />
                                    <button className="btn btn-md btn-warning" onClick={() => window.open("https://github.com/Kittiphop22")}>Github</button></div>
                            </div>

                            <div className="mt-5" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={gmail} alt="gmail" className="lskill" /></div>
                                <div className="mx-4">Gmail<br />Marchmat22@gmail.com<br />
                                    <button className="btn btn-md btn-warning" onClick={() => window.open("mailto:marchmat22@gmail.com")}>Send Email</button></div>
                            </div>
                            <div className="mt-5" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={phone} alt="phone" className="acheive" /></div>
                                <div className="mx-4">Mobile Phone<br />+66891627323</div>
                            </div>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}