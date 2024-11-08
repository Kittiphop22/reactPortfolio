import React from "react";
import { Card } from "react-bootstrap";
const Github = require('./assets/images/Github.png')
const gmail = require('./assets/images/gmail.png')
const phone = require('./assets/images/phone.png')

export default function Contact() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '80px', fontFamily: 'Kanit' }}>
            <div style={{ padding: '10px', fontSize: '24px' }}>
                <Card border='0' style={{ width: '1280px' }}>
                    <Card.Body>
                        <Card border='0'>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left', }}>
                                <div className="mx-4"><img src={Github} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">Github<br />https://github.com/Kittiphop22<br />
                                <button className="btn btn-sm btn-primary">ggg</button></div>
                            </div>

                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={gmail} alt="KMUTNB" className="lskill" /></div>
                                <div className="mx-4">Gmail<br />Marchmat22@gmail.com<br />
                                <button className="btn btn-sm btn-primary">ggg</button></div>
                            </div>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={phone} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">Mobile Phone<br />+66891627323</div>
                            </div>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}