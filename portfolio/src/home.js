import React from "react";
import Card from 'react-bootstrap/Card'
import CardBody from "react-bootstrap/esm/CardBody";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './components/img.css';
const profile = require('./assets/images/profile2.jpg')
const showAlrt = () => {
  alert('ไม่ได้ออกสหกิจเทอมถัดไป ไม่ได้ขอTranscriptไว้ครับ');
}


export default function Home() {
  return (

    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#FFEEA9',
        borderWidth: '2px',
        borderColor: 'black',
        height: '82vh',
        paddingTop: '80px',
        flexDirection: 'column',  // เริ่มต้นให้แสดงผลในแนวตั้ง
        alignItems: 'center',
      }}
    >
      <img
        src={profile}
        alt="profile"
        className="image-circle"
        style={{ width: '280px', height: '280px'}}
      />

      <div
        style={{
          padding: '35px',
          fontSize: '22px',
          fontFamily: 'Kanit',
          textAlign: 'center', // ปรับให้ text อยู่กลาง
        }}
      >
        <Card
          style={{
            width: '100%',
            maxWidth: '32rem',
            borderWidth: '2px',
            borderColor: 'orange',
            borderRadius: '10px', // เพิ่มมุมโค้งให้สวยขึ้น
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontWeight: "bold", fontSize: "32px" }}>Kittiphop Noiyoo</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Electronic Engineering Technology Department, KMUTNB
            </Card.Subtitle>
            <Card.Text style={{fontSize:'24px'}}>
              Hello, my name is Kittiphop. You can call me "March." I'm interested in Web Development jobs such as Front-end Developer or Back-end Developer.<br />
              <div className="mt-2">
                <button
                  style={{ fontWeight: 'bold' }}
                  className="btn btn-lg btn-warning"
                  onClick={() => window.open("https://drive.google.com/file/d/1gbUcq6-hxlL4b5j9aqAhVpL2AT0xbu7T/view?usp=drive_link")}
                >
                  Resume
                </button>
                <button
                  className="btn btn-lg btn-danger mx-5"
                  onClick={showAlrt}
                >
                  Transcript
                </button>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>



  )
}
