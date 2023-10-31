import React, { useState, useEffect } from 'react'
import { Container, Button, Card } from 'react-bootstrap';
import axios from 'axios';

const BuyTicket = () => {
  const[ticket, setTicket] = useState([]);

  useEffect(() => {
    axios.get("https://651ee02544a3a8aa476923db.mockapi.io/products")
    .then((res) => setTicket(res.data)
    );
  }, []);

  return (
    <>
    <Container>
        <h2 className='p-2'>Buy Tickets</h2>
        {ticket.map((post) =>{
          const {id, name, logo, date, price, stadium} = post;
          return (
            <div className='container d-flex align-items-center justify-content-center pt-2'>
            <div className="ticket card" key={id}>
    <img src={logo} className='img-logo' alt="..."/>
    <div class="card-body1">
        <div class="text-section">
            <h5 class="card-title fw-bold">{name}</h5>
            <p class="card-text">{date} | {stadium}</p>
        </div>
        <div class="cta-section">
            <div>{price}</div>
            <a href="#" class="btn btn-light">Buy Now</a>
        </div>
    </div>
</div>
</div> 

          )
        })}
      </Container>
    </>
  )
}

export default BuyTicket