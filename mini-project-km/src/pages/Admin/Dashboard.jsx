import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai'
import { AiOutlineFileAdd } from 'react-icons/ai'
import { BiSolidEdit } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios'

function Dashboard() {

    const navigate = useNavigate();
    const [columns, setColumns] = useState([]);
    const [records, setRecords] = useState([]);

    useEffect(() =>{
        axios.get('https://651ee02544a3a8aa476923db.mockapi.io/products')
        .then(res => {
            setColumns(Object.keys(res.data[0]))
            setRecords(res.data)
        })
    }, [])

    function handleDelete(id){
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete('https://651ee02544a3a8aa476923db.mockapi.io/products/' + id)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  return (
    <div className='p-3'>
        <Container>
        
          <div>
            <button onClick={() => navigate('/admin/add-ticket')} class="btn btn-primary">
            Add Ticket <AiOutlineFileAdd/>
            </button>
          </div>
        <Table striped bordered hover>
      <thead>
        <tr>
          {columns.map((columns, i) => (
            <th key={i}>{columns}</th>
          ))}
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            records.map((data, i) => (
                <tr key={i}>
                    
                    <td>{data.name}</td>
                    <td><img style={{width: 175, height: 175}} src={data.logo}/></td>
                    <td>{data.date}</td>
                    <td>{data.price}</td>
                    <td>{data.stadium}</td>
                    <td>{data.id}</td>
                    <td>
                    <button class="btn btn-sm btn-warning" onClick={() => navigate(`/admin/update-ticket/${data.id}`)} ><BiSolidEdit/></button>
                    <button class="btn btn-sm ms-2 btn-danger" onClick={e => handleDelete(data.id)} ><AiFillDelete/></button>
                    </td>
                </tr>

            ))}
      </tbody>
    </Table>
        </Container>
    </div>
  )
}

export default Dashboard