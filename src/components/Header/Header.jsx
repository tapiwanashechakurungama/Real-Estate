import "./Header.css"
import { FaSearchLocation } from "react-icons/fa";
const Header = () => {
  return (
    <div className="container img">
      <div className="white">
        <input
          type="text"
          placeholder="Enter Your Adress , email and Zip code"
        />
        <a href="">
          Advanced <FaSearchLocation />
        </a>
      </div>
    </div>
  );
}

export default Header