import React from 'react'
import { Container, Row, Col, Carousel, Table, Card, Button } from "react-bootstrap";
import Header from '../components/Header';
import PSS from '../assets/pss.png';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {

  const navigate = useNavigate()
  return (
    <div className='homepage'>
      {/* Header */}
      <Header/>

      {/* Container Pertandingan dan Klasemen */}
      <div className='cnt-1 w-100 min-vh-80 mx-auto'>
        <Container className='matches pt-5 rounded-3'>
          <Row>
            <Col>
            <h3 className='text-center '>Matches</h3>
            <Carousel>
      <Carousel.Item className='crsl-itm text-center'>
        <h2>BRI Liga 1</h2>
        <h2>MATCHDAY 11</h2>
        <h4>29 November 2023
          <br />
          15.30 WIB
        </h4>
        <div className='p-5'>
          <img src={PSS} height="60" alt="" />
          <span className='fw-bold fs-4 p-5'>VS</span>
          <img src={PSS} height="60" alt="" />
        </div>
      </Carousel.Item>
      
    </Carousel>
            </Col>
            <Col>
            <h3 className='text-center'>Standings</h3>
            <Table className='table'>
              <thead>
                <tr>
                <th scope="col"></th>
      <th scope="col">BRI Liga 1</th>
      <th scope="col">PTS</th>
      <th scope="col">P</th>
                </tr>
              </thead>
              <tbody>
              <tr>
      <th className='table-success' scope="row">1</th>
      <td className='fw-semibold table-success'><img src={PSS} height="25"/> PSS Sleman</td>
      <td className='table-success'>23</td>
      <td className='table-success'>9</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
              </tbody>
            </Table>
            </Col>
          </Row>
        </Container>
      </div>

{/* Section News */}
<div className='news'>
<Container>
    <h2>LATEST NEWS | <a href="" onClick={() =>navigate('/news') }>See More</a></h2>

      <Row className=' p-3'>
        <Col md={6}>
        <Card  >
      <Card.Img className='img-fluid' variant="top" src="https://pssleman.id/wp-content/uploads/2023/10/WEB-Esteban-Vizcarra-Optimis-PSS-Ambil-Poin-dari-Persib.jpg" />
      <Card.Body>
        <Card.Title>Esteban Vizcarra Optimis PSS Ambil Poin dari Persib</Card.Title>
      </Card.Body>
    </Card>
    </Col>
        <Col md={6}>
        <Card >
      <Card.Img  variant="top" src="https://pssleman.id/wp-content/uploads/2023/10/WEB-Esteban-Vizcarra-Optimis-PSS-Ambil-Poin-dari-Persib.jpg" />
      <Card.Body>
        <Card.Title>Esteban Vizcarra Optimis PSS Ambil Poin dari Persib</Card.Title>
      </Card.Body>
    </Card></Col>
      </Row>


      <Row className='pt-3'>
        <Col md={4}>
        <Card >
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2023/10/WEB-Esteban-Vizcarra-Optimis-PSS-Ambil-Poin-dari-Persib.jpg" />
      <Card.Body>
        <Card.Title>Esteban Vizcarra Optimis PSS Ambil Poin dari Persib</Card.Title>
      </Card.Body>
    </Card>
    </Col>
        <Col md={4}>
        <Card>
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2023/10/WEB-Esteban-Vizcarra-Optimis-PSS-Ambil-Poin-dari-Persib.jpg" />
      <Card.Body>
        <Card.Title>Esteban Vizcarra Optimis PSS Ambil Poin dari Persib</Card.Title>
      </Card.Body>
    </Card>
    </Col>
        <Col md={4}>
        <Card >
      <Card.Img variant="top" src="https://pssleman.id/wp-content/uploads/2023/10/WEB-Esteban-Vizcarra-Optimis-PSS-Ambil-Poin-dari-Persib.jpg" />
      <Card.Body>
        <Card.Title>Esteban Vizcarra Optimis PSS Ambil Poin dari Persib</Card.Title>
      </Card.Body>
    </Card>
        </Col>
      </Row>
    </Container>
    </div>

    {/* Section Videos */}
    <div className='videos'>
    <Container>
    <h2>VIDEOS | <a href="https://www.youtube.com/@PSSTV1976">Watch More</a></h2>
      <Row>
      <Col sm={8}>
        <Card>
        <div class="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="415" src="https://www.youtube.com/embed/HRcH3M3PpAo?si=OEyYH3eRMiurazhk " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
        <Card.Body>
        <Card.Title>Highlight Momen PSS Sleman vs Persik Kediri</Card.Title>
        </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card>
          <div class="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/pJnVKJu_wn8?si=LGBLzqQVsdJUdc-v" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <Card.Body>
        <Card.Title>Highlight PSS Sleman vs Persik Kediri</Card.Title>
        </Card.Body>
        </Card>
      </Col>
      </Row>
      <Row className='pt-4'>
        <Col sm>
        <Card>
          <div class="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/xyd5aSdBnpo?si=P4JGjQZxuwlq2WRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <Card.Body>
        <Card.Title>Highlight Dewa United vs PSS Sleman</Card.Title>
        </Card.Body>
        </Card>
        </Col>
        <Col sm>
        <Card>
          <div class="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/xyd5aSdBnpo?si=P4JGjQZxuwlq2WRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <Card.Body>
        <Card.Title>Highlight Dewa United vs PSS Sleman</Card.Title>
        </Card.Body>
        </Card>
        </Col>
        <Col sm>
        <Card>
          <div class="embed-responsive embed-responsive-16by9">
          <iframe width="100%" height="315" src="https://www.youtube.com/embed/xyd5aSdBnpo?si=P4JGjQZxuwlq2WRW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
          <Card.Body>
        <Card.Title>Highlight Dewa United vs PSS Sleman</Card.Title>
        </Card.Body>
        </Card>
        </Col>
      </Row>
    </Container>
    </div>


    </div>
  )
}

export default LandingPage