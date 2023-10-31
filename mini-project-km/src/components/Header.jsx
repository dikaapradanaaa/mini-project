import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import PSS from '../assets/pss.png'

const Header = () => {
  return (
    <div>
        <header className='w-100 min-vh-100 d-flex align-items-center'>
      <Container>
        <Row className='header-box d-flex align-items-center'>
          <Col><h1>Come On Super Elja<br/> <span>#slemanfans</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, laborum!</p>
          <button className='btn btn-lg rounded-1 me-2'>Buy Tickets</button>
          </Col>
          <Col>
            <img src={PSS} alt="pss" />
           </Col>
        </Row>
      </Container>
      </header>
    </div>
  )
}

export default Header