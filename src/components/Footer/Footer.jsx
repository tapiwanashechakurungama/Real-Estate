import "./Footer.css";
import { FiHome } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="main">
      <footer className="footer" id="footer">
        <div className="flex container">
          <div className="first">
            <h2><FiHome style={{marginBottom: "5px"}}/>Homez</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia
              sint laboriosam dolorem iure voluptatem quam quidem molestias. Ad,
              laboriosam obcaecati?
            </p>
          </div>
          <div className="second">
            <h2>Links</h2>
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Contact</a>
          </div>
          <div className="last">
            <h2>History</h2>
            <p>Copyright @2024 All rights reserved</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque, reiciendis.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
