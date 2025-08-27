 import img1 from "../assets/img1.svg";
import "./register.scss";
import { Link } from 'react-router-dom'

function LogIn() {

  return (
    <main>
      <section className="one-section">
        <div className="cont">
          <img src={img1} alt="preview" />

          <div className="sign">
            <h2>Log in to Exclusive</h2>
            <p>Enter your details below</p>

            <div className="inputs">
              <input type="text" placeholder="Email or Phone Number" />
              <input type="password" placeholder="Password" />
            </div>

            <div className="aaa">
              <button type="submit" className="mary">Log in</button>

                <Link className="bbb" aria-hidden>Forget Password?</Link>
            
             
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LogIn;