import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";


const Title = () => (
  <a href="/">
    <img style={{    width: "175px"}} className="logo" src={LOGO_URL} alt="Food Fire Logo" />
  </a>
  
  
);


const Header = () => {
  return (
    <div className="header">
      <Title />
      
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
