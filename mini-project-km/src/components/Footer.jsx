import React from 'react'
import PSS from '../assets/pss.png'
import { SlSocialInstagram, SlSocialYoutube, SlSocialFacebook, SlSocialTwitter } from 'react-icons/sl'

const Footer = () => {
  return (
    <footer>
  <div className="container">
    <div className="row">
      <div className="col-lg-3 col-sm-6">
        <div className="single-box">
          <img src={PSS} width="20%" alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam
            repellendus sunt praesentium aspernatur iure molestias.
          </p>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-box">
          <h2>PSS Products</h2>
          <ul>
            <li>
              <a href="#">PSS +</a>
            </li>
            <li>
              <a href="#">Tickets</a>
            </li>
            <li>
              <a href="#">PSS App</a>
            </li>
            <li>
              <a href="#">Online Store</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-box">
          <h2>Club</h2>
          <ul>
            <li>
              <a href="#">Anthem</a>
            </li>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Maguwoharjo Stadium</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-3 col-sm-6">
        <div className="single-box">
          <h2>Newsletter</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur doloremque earum similique fugiat nobis. Facere?
          </p>
          
          <h2>Follow us on</h2>
          <p className="socials">
            <i><SlSocialInstagram/></i>
            <i><SlSocialFacebook/></i>
            <i><SlSocialTwitter/></i>
            <i><SlSocialYoutube/></i>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>

  )
}

export default Footer