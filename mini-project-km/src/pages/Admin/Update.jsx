import React, {useState, useEffect} from 'react'
import { Container, Form, InputGroup, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function Update() {
    const {id} = useParams();
    const navigate = useNavigate();
    const[data, setData] = useState([]);

    useEffect(() =>{
        axios.get('https://651ee02544a3a8aa476923db.mockapi.io/products/' + id)
        .then(res => setData(res.data))
        .catch(error => console.error(error))
    }, [])

    function handleSubmit(event){
        event.preventDefault()
        axios.put('https://651ee02544a3a8aa476923db.mockapi.io/products/' + id, data)
        .then(res => {
            Swal.fire({
                title: 'Success Update Tickets',
                icon: 'Success',
                confirmButtonText: 'Continue'
              });
            navigate('/admin/dashboard')
        })
    }


  return (
    <div>
        <Container>
            <h1>Update Ticket {data.id} </h1>
        <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <InputGroup.Text>Nama Team dan Logo</InputGroup.Text>
            <Form.Control
             type="text" 
             placeholder="Nama Team"
             value={data.name}
             onChange={e => setData({...data, name: e.target.value})}
             />
            <Form.Control 
            value={data.logo}
            onChange={e => setData({...data, logo: e.target.value})}
            type="text" />
        </InputGroup>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Date</Form.Label>
        <Form.Control 
        value={data.date}
        onChange={e => setData({...data, date: e.target.value})}
        type="datetime-local" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Stadium</Form.Label>
        <Form.Control 
        value={data.stadium}
        onChange={e => setData({...data, stadium: e.target.value})}
        type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        value={data.price}
        onChange={e => setData({...data, price: e.target.value})}
        type="number" />
        </Form.Group>
        
        <div className="d-grid gap-2">
      <Button type='submit' variant="warning" size="lg">
        Update
      </Button>
      </div>

    </Form>
        </Container>
    </div>
  )
}


export default Update;
