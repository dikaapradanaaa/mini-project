import React, { useState } from 'react'
import { Container, Col, Row, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';


 const LoginUser = () => {
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email: "",
        pass: "",
    });

    const handleSubmit = (e) => {
    e.preventDefault();
    axios
    .post("https://reqres.in/api/login",{
        email: values.email,
        password: values.pass
    })
    .then((res) => { 
        localStorage.setItem("token", res.data.token);
        navigate('/buy-ticket');
        Swal.fire({
          title: 'Login Success',
          text: 'Welcome Sleman Fans',
          icon: 'success',
          confirmButtonText: 'Continue'
        });
    })
    .catch((err) =>{
      Swal.fire({
        title: 'Login Failed',
        text: 'Incorrect email or password',
        icon: 'warning',
        confirmButtonText: 'Continue'
      });
    })
    };

  return (
    <div className='login-user w-100 min-vh-100'>

        <div className="form-area">
  <div className="container">
    <div className="row single-form g-0">
      <div className="col-sm-12 col-lg-6">
        <div className="left">
          <h2>
            <span>Welcome</span> <br />
            Sleman Fans <br />
          </h2>
        </div>
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="right">
          <i className="fa fa-caret-left" />
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Your Email
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e)=>setValues({...values,email:e.target.value})}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Your Passwords
              </label>
              <input
                type="password"
                onChange={(e)=>setValues({...values,pass:e.target.value})}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}
export default LoginUser