import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Pinthus from '../assets/tim/kiper/PINTHUS.jpg'


const Players = () => {
  return (
    <div className='players'>
      <Container className='p-3'>
        <h2 className='text-center'>MEN'S FIRST TEAM</h2>
        <Row className='p-3'>
        <h3>GOALKEEPERS</h3>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src={Pinthus} />
      <Card.Body>
        <span>#1</span>
        <Card.Title>Anthony Pinthus</Card.Title>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2022/07/M-RIDWAN.jpg" />
      <Card.Body>
        <span>#12</span>
        <Card.Title>Muhammad Ridwan </Card.Title>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2022/07/DIMAS-FANI-FIRMANSYAH.jpg" />
      <Card.Body>
        <span>#21</span>
        <Card.Title>Dimas Fani</Card.Title>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2023/07/SAFAAT.jpg" />
      <Card.Body>
        <span>#31</span>
        <Card.Title>Safaat Romadhona</Card.Title>
      </Card.Body>
    </Card>
          </Col>
        </Row>

        <Row className='pt-5'>
        <h3>DEFENDERS</h3>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2023/07/THALES-LIRA.jpg" />
      <Card.Body>
        <span>#5</span>
        <Card.Title>Theles Natanael</Card.Title>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2022/07/IBRAHIM-SANJAYA.jpg" />
      <Card.Body>
        <span>#22</span>
        <Card.Title>Ibrahim Sanjaya</Card.Title>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2023/07/LEONARD-TUPAMAHU.jpg" />
      <Card.Body>
        <span>#88</span>
        <Card.Title>Leonard Tupamahu</Card.Title>
      </Card.Body>
    </Card>
          </Col>
          <Col>
          <Card style={{ width: '15rem' }}>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2022/07/IFANANDA-PRATAMA.jpg" />
      <Card.Body>
        <span>#78</span>
        <Card.Title>Ifan Nanda</Card.Title>
      </Card.Body>
    </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Players