import React from "react";
import Card from 'react-bootstrap/Card'
import CardBody from "react-bootstrap/esm/CardBody";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './components/img.css';
const profile = require('./assets/images/profile2.jpg')


export default function Home() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '100px' }}>
      <div style={{ padding: '10px', backgroundColor: '#d0d0d0' }}>
        <img src={profile} alt="profile" className="image-circle" />
      </div>
      <div style={{ padding: '30px', fontSize: '24px' }}>
        <Card style={{ width: '32rem' }}>
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", fontSize: "28px" }}>Kittiphop Noiyoo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">Electonic Engineering Technology Department , KMUTNB</Card.Subtitle>
            <Card.Text>
              Hello my name is Kittiphop You can call me "March" im interesting in Web Developer job like Front-end Developer or Back-end Developer
              <div className="mt-4"><button className="btn btn-sm btn-primary">Resume</button></div>
            </Card.Text>
          </Card.Body>
        </Card>
       
      </div>
    </div>



  )
}
document.body.style.backgroundColor = "rgba(210, 210, 210,1)";