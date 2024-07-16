import "./Navbar.css"
import { FiHome } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import { HiOutlineLogin } from "react-icons/hi";

const Navbar = () => {
  return (
    <nav className="navbar container">
      <h3>
        <FiHome />
        Homez
      </h3>
      <ul>
        <a href="">Home</a>
        <a href="">Listing</a>
        <a href="">Property</a>
        <a href="">Blog</a>
        <a href="">Pages</a>
      </ul>
      <div className="buttons">
        <a href="" className="register">
          Login/ Register <HiOutlineLogin />
        </a>
        <a href="" className="btn">
          Add property
          <LuSend />
        </a>
        <div className="hamburger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar