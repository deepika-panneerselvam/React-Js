import { LOGO_URL } from "../Utils/contants";

export const Header = () => {
    return (
      <div className="header">
        <img src={LOGO_URL} alt="logo"/>
        <ul className="nav-item">
          <li>About us</li>
          <li>Contact</li>
        </ul>
      </div>
    );
  };
 export default Header;
