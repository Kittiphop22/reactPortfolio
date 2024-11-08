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
        <div style={{ display: 'flex', justifyContent: 'center', padding: '80px', fontFamily: 'Kanit', backgroundColor:'#FFEEA9'}}>
  
            <div style={{ padding: '10px',}}>
                <Card style={{ width: '1280px', borderRadius: '30px', borderColor: '#ff7300de', borderWidth: '5px' , color:'white', backgroundColor:'#f7a84f'}}>
                    <Card.Body>
                        <Card.Title style={{ fontWeight: "bold", fontSize: "64px", marginLeft:'50px'}}>About Me</Card.Title>
                        <Card border='0' className="mt-1" style={{ color:'white',backgroundColor:'#f7a84f'}}>
                            <div className="mb-2" style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div className="mx-5" style={{color:'white',fontSize: '36px' }}><br/>Name: Kittiphop Noiyoo  Nicknack: March<br />Age 22</div>
                                <div style={{ justifyContent: 'right',marginRight:'90px'}}><img src={profile} alt="profile" className="profile" /></div>

                            </div>
                        </Card>

                        <Card.Text style={{ fontWeight: "bold",fontSize: '36px' }} className="mx-5">Education</Card.Text>
                        <Card border='0' className="mt-2" style={{backgroundColor:'#f7a84f'}}>
                            <div className="mb-4" style={{ display: 'flex', justifyContent: 'left',fontSize: '28px' }}>
                                <div className="mx-4"><img src={Debsirin} alt="Debsirin" className="education" /></div>
                                <div className="mx-4" style={{color:'white'}}>2015-2017<br />Debsirin Nonthaburi School <br /> M.1 - M.3  Major: Math - Science</div>
                            </div>

                            <div className="mb-4" style={{ display: 'flex', justifyContent: 'left',fontSize: '28px' }}>
                                <div className="mx-4"><img src={RMUTP} alt="RMUTP" className="rmutp" /></div>
                                <div className="mx-4" style={{color:'white'}}><br />2018-2020<br />Rajamangala University of Technology Phra Nakhon <br />Vocational Certificate Major:Electronics Technician</div>
                            </div>
                            <div className="mb-4" style={{ display: 'flex', justifyContent: 'left',fontSize: '28px' }}>
                                <div className="mx-4"><img src={KMUTNB} alt="KMUTNB" className="education" /></div>
                                <div className="mx-4" style={{color:'white'}}>2021-present<br/>KING MONGKUT'S UNIVERSITY OF TECHNOLOGY NORTH BANGKOK<br/>bachelor of engineering<br/>Electronics Engineering Technology(Computer)</div>
                            </div>
                        </Card>

                        <Card.Text className="mt-2 mx-5" style={{ fontWeight: "bold",fontSize:'36px' }}>Acheive</Card.Text>
                        <Card border="0" style={{backgroundColor:'#f7a84f'}}>
                            <div className="mt-2 mb-2" style={{ display: 'flex', justifyContent: 'left',fontSize: '28px' }}>
                                <div className="mx-4"><img src={Webedit} alt="Webedit" className="acheive" /></div>
                                <div className="mx-4" style={{color:'white'}}>Gold Medals<br />2017 Webpage Develop Text Editor</div>
                            </div>

                            <div className="mt-2 mb-2" style={{ display: 'flex', justifyContent: 'left',fontSize: '28px' }}>
                                <div className="mx-4"><img src={Hackathon} alt="hackathon" className="acheive" /></div>
                                <div className="mx-4" style={{color:'white'}}>2nd Runner up<br />2023 ICIT Hackathon :KMUTNB Hub using Appsheet</div>
                            </div>
                            <div className="mt-2 mb-2" style={{ display: 'flex', justifyContent: 'left',fontSize: '28px' }}>
                                <div className="mx-4"><img src={powerbi} alt="powerbi" className="acheive" /></div>
                                <div className="mx-4" style={{color:'white'}}>Attended<br />2024 ICIT Data Analytics using PowerBI</div>
                            </div>
                        </Card>
                        <Card.Text className="mt-4 mx-5" style={{ fontWeight: "bold",fontSize: '36px' }}>Skill</Card.Text>
                        <Card border="0" style={{backgroundColor:'#f7a84f',fontSize: '28px'}}>
                            <div style={{ display: 'flex',color:'white'}}>
                                <div className="mx-4">
                                    <div><img src={html} alt="html" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>HTML</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={css} alt="css" className="lskill" /></div>
                                    <div style={{ textAlign: 'center' }}>CSS</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={js} alt="js" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>JavaScript</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={php} alt="php" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>PHP</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={react} alt="react" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>ReactJS</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={flutter} alt="flutter" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Flutter(Dart)</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={nodejs} alt="nodejs" className="lskill" /></div>
                                    <div style={{ textAlign: 'center' }}>NodeJS</div>
                                </div>

                            </div>

                        </Card>
                        <Card.Text className="mt-4 mx-5" style={{ fontWeight: "bold",fontSize: '36px' }}>Tools</Card.Text>
                        <Card border="0" style={{backgroundColor:'#f7a84f',fontSize: '28px'}}>
                            <div style={{ display: 'flex' , color:'white'}}>
                                <div className="mx-4">
                                    <div><img src={Github} alt="github" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Github</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={postman} alt="postman" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Postman</div>
                                </div>
                                <div className="mx-2">
                                    <div><img src={appsheet} alt="appsheet" className="skill" /></div>
                                    <div style={{ textAlign: 'center' }}>Appsheet</div>
                                </div>
                            </div>
                        </Card>
                        <Card.Text className="mt-4 mx-5" style={{ fontWeight: "bold",fontSize: '36px' }}>Projects</Card.Text>
                        <Card border="0" style={{color:'white',backgroundColor:'#f7a84f',fontSize: '28px'}}>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left', }}>
                                <div className="mx-5"><img src={hub} alt="KMUTNBhub" className="acheive" /></div>
                                <div className="mx-5">KMUTNB Hub<br />2023 ICIT Hackathon :KMUTNB Hub using Appsheet</div>
                            </div>

                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-5"><img src={Doocar} alt="Doocar" className="lskill" /></div>
                                <div className="mx-5">DooCar<br />Software Engineering Project</div>
                            </div>
                            <div className="mt-2" style={{ display: 'flex', justifyContent: 'left' }}>
                                <div className="mx-5"><img src={shop} alt="shop" className="acheive" /></div>
                                <div className="mx-5">Socks Store<br />Flutter-Clone Project</div>
                            </div>
                        </Card>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}