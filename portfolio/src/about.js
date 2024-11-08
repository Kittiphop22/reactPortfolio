import React from "react";
import Card from 'react-bootstrap/Card'
import './components/img.css';
const Debsirin = require('./assets/images/Debsirin.png')
const RMUTP = require('./assets/images/RMUTP.png')
const KMUTNB = require('./assets/images/KMUTNB.png')
const Hackathon = require('./assets/images/Hackathon.png')
const powerbi = require('./assets/images/powerbi.jpg')
const Webedit = require('./assets/images/Webedit.png')
const html = require('./assets/images/html.png')
const css = require('./assets/images/CSS.png')
const js = require('./assets/images/js.png')
const php = require('./assets/images/php.png')
const react = require('./assets/images/React.png')
const flutter = require('./assets/images/flutter.png')
const nodejs = require('./assets/images/nodejslogo.png')
const profile = require('./assets/images/Kittiphop.png')
const Github = require('./assets/images/Github.png')
const postman = require('./assets/images/postman.png')
const appsheet = require('./assets/images/appsheet.png')
const hub = require('./assets/images/kmutnbhub.png')
const Doocar = require('./assets/images/DooCar.png')
const shop = require('./assets/images/shop.png')

export default function About() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', padding: '80px', fontFamily: 'Kanit' }}>
            <div style={{ padding: '10px', backgroundColor: '#d0d0d0' }}>

            </div>
            <div style={{ padding: '10px', fontSize: '24px' }}>
                <Card style={{ width: '1280px' }}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "bold", fontSize: "48px" }}>About Me</Card.Title>
                        <Card border='0' className="mt-2">
                            <div className="mb-2" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div className="mx-4">Name: Kittiphop Noiyoo  Nicknack: March<br />Age 22</div>
                                <div className="mx-5" style={{ justifyContent: 'right' }}><img src={profile} alt="Debsirin" className="profile" /></div>

                            </div>
                        </Card>

                        <Card.Text style={{ fontWeight: "bold" }}>Education</Card.Text>
                        <Card className="mt-2">
                            <div className="mb-2" style={{ display: 'flex', justifyContent: 'left', }}>
                                <div className="mx-4"><img src={Debsirin} alt="Debsirin" className="education" /></div>
                                <div className="mx-4"><br />2015-2017<br />Debsirin Nonthaburi School</div>
                            </div>

                            <div className="mb-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={RMUTP} alt="RMUTP" className="rmutp" /></div>
                                <div className="mx-4"><br />2018-2020<br />Rajamangala University of Technology Phra Nakhon</div>
                            </div>
                            <div className="mb-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={KMUTNB} alt="KMUTNB" className="education" /></div>
                                <div className="mx-4"><br />2021-present<br />KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK</div>
                            </div>
                        </Card>
                        <Card.Text className="mt-2" style={{ fontWeight: "bold" }}>Hobby</Card.Text>
                        <Card>
                            <div className="mx-2">Sport</div>
                            <div className="mx-2">Playing Video game</div>
                        </Card>
                        <Card.Text className="mt-2" style={{ fontWeight: "bold" }}>Acheive</Card.Text>
                        <Card>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left', }}>
                                <div className="mx-4"><img src={Webedit} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">Gold Medals<br />2017 Webpage Develop Text Editor</div>
                            </div>

                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={Hackathon} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">2nd Runner up<br />2023 ICIT Hackathon :KMUTNB Hub using Appsheet</div>
                            </div>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={powerbi} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">Attended<br />2024 ICIT Data Analytics using PowerBI</div>
                            </div>
                        </Card>
                        <Card.Text className="mt-2" style={{ fontWeight: "bold" }}>Skill</Card.Text>
                        <Card border="0">
                            <div style={{ display: 'flex' }}>
                                <div className="mx-2">
                                    <div><img src={html} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>HTML</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={css} alt="html" className="lskill" /></div>
                                    <div style={{ textAlign: 'center' }}>CSS</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={js} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>JavaScript</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={php} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>PHP</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={react} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>ReactJS</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={flutter} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Flutter(Dart)</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={nodejs} alt="html" className="lskill" /></div>
                                    <div style={{ textAlign: 'center' }}>NodeJS</div>
                                </div>

                            </div>

                        </Card>
                        <Card.Text className="mt-2" style={{ fontWeight: "bold" }}>Tools</Card.Text>
                        <Card border="0">
                            <div style={{ display: 'flex' }}>
                                <div className="mx-2">
                                    <div><img src={Github} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Github</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={postman} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Postman</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={appsheet} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Appsheet</div>
                                </div>
                            </div>
                        </Card>
                        <Card.Text className="mt-2" style={{ fontWeight: "bold" }}>Projects</Card.Text>
                        <Card>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left', }}>
                                <div className="mx-4"><img src={hub} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">KMUTNB Hub<br />2023 ICIT Hackathon :KMUTNB Hub using Appsheet</div>
                            </div>

                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={Doocar} alt="KMUTNB" className="lskill" /></div>
                                <div className="mx-4">DooCar<br />Software Engineering Project</div>
                            </div>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-4"><img src={shop} alt="KMUTNB" className="acheive" /></div>
                                <div className="mx-4">Socks Store<br />Flutter-Clone Project</div>
                            </div>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}