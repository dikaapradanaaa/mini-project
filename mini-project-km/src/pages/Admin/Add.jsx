import React, {useState} from 'react'
import { Container, Form, InputGroup, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Swal from 'sweetalert2'

function Add() {
    const [inputData, setInputData] = useState({
        name:'',
        logo:'',
        date:'',
        stadium:'',
        price:''
      });

      const navigate = useNavigate();
    

      function handleSubmit(event){
        event.preventDefault()
    
        axios.post('https://651ee02544a3a8aa476923db.mockapi.io/products', inputData)
        .then(res => {
          Swal.fire({
            title: 'Success Add New Tickets',
            icon: 'Success',
            confirmButtonText: 'Continue'
          })
          navigate('/admin/dashboard')
    
        }).catch(error => console.log(error));
      }

  return (
    <div>
        <Container>
        <Form onSubmit={handleSubmit}>
        <InputGroup className="mb-3" controlId="exampleForm.ControlInput1">
            <InputGroup.Text>Nama Team dan Logo</InputGroup.Text>
            <Form.Control
             type="text" 
             placeholder="Nama Team"
             onChange = {e=>setInputData({...inputData, name: e.target.value})}
             />
            <Form.Control 
            onChange = {e=>setInputData({...inputData, logo: e.target.value})}
            type="text" />
        </InputGroup>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Date</Form.Label>
        <Form.Control 
        onChange = {e=>setInputData({...inputData, date: e.target.value})}
        type="datetime-local" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Stadium</Form.Label>
        <Form.Control 
        onChange = {e=>setInputData({...inputData, stadium: e.target.value})}
        type="text" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Price</Form.Label>
        <Form.Control 
        onChange = {e=>setInputData({...inputData, price: e.target.value})}
        type="number" />
        </Form.Group>
        
        <div className="d-grid gap-2">
      <Button type='submit' variant="primary" size="lg">
        ADD
      </Button>
      </div>

    </Form>
        </Container>
    </div>
  )
}

export default Add