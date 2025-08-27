import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'
function Footer() {
  return (
    <footer className="footer">
      <div className="cont">
        
        <div className="link">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <div className="subscribe">
            <input type="text" placeholder="Enter your email"/>

          </div>
        </div>

        <div className="link">
          <h2>Support</h2>
          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>

        <div className="link">
          <h2>Account</h2>
          <Link to="">My Account</Link> <br />
          <Link to="">Login / Register</Link> <br />
          <Link to="">Cart</Link><br />
          <Link to="">Wishlist</Link> <br />
          <Link to="">Shop</Link> 
        </div>

        <div className="link">
          <h2>Quick Link</h2>
          <Link to="">Privacy Policy</Link> <br />
          <Link to="">Terms Of Use</Link> <br />
          <Link to="">FAQ</Link> <br />
          <Link to="">Contact</Link>
        </div>

        <div className="link">
          <h2>Download App</h2>
          <p>Save $3 with App New User Only</p>
          <div className="apps">
            //img
            <div>
              //img2
            </div>
          </div>
          <div className="socials">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

      </div>

      <div className="copyright">
        <p>Copyright Rimel 2022. All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer
