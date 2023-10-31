import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="container">
  <div className="row mt-5">
    <div className="col-md-6 mt-5 p-2">
      <img
        src="https://th.bing.com/th/id/OIP.akiXnu60RQPSi_hCn46FTgHaDt?w=342&h=175&c=7&r=0&o=5&pid=1.7"
        className="error-image"
        alt="error page"
      />
    </div>
    <div className="col-md-6">
      <span className="text-black fs-1 ">
        400 <strong className="text-danger"> Error!</strong>{" "}
      </span>
      <br />
      <h5 className="text-uppercase mt-4 font-weight-bold text-black">
        oops ! Page not found{" "}
      </h5>
      <span>
        Sorry, the page you're looking for doesn't exist. if you think something
        is broken,report a problem.
      </span>
      <br />
      <div className="mt-4 text-center">
        <a
          href="https://www.youtube.com/channel/UCfTb6PYe9RzzyuOXLGa8X1A"
          target="_blank"
          className="btn btn-outline-danger border-danger shadow-lg"
        >
          Report Problem <i className="fas fa-exclamation-triangle" />{" "}
        </a>
      </div>
    </div>
  </div>
</div>
      
    </div>
  )
}

export default Error