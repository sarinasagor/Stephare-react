import { useState } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import Icons from "../../public/index.js";
import { useDispatch } from 'react-redux';
import { logout } from '../redux/actions/authActions';
import { Cookies } from "react-cookie"; 

const cookies = new Cookies();

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get the current location

  // Function to determine if a menu item is active
  const isActive = (path) => location.pathname === path;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/welcome");
  };
  const token = cookies.get('jwtToken');

    // Handle Logout
    const handleLogout = () => {
      dispatch(logout());
      navigate('/login');
    };

  return (
    <nav className="navbars">
      <span className="nav-brands" onClick={handleSubmit}>
        <img src={Icons.brandLogo} alt="logo" />
      </span>
      <button className="nav-navigations" onClick={() => setIsOpen(!isOpen)}>
        <img src={Icons.humbergerMenu} alt="menu" />
      </button>
      <div className={`navbars-menus-block ${isOpen ? "open" : ""}`}>
        <ul className="menu">
          {location.pathname !== "/dashboard" && (
            <>
              <li
                className={`menu-item ${isActive("/courses") ? "active" : ""}`}
              >
                <Link to="/courses" className="menu-link">
                  COURSES
                </Link>
              </li>
              <li
                className={`menu-item ${
                  isActive("/qna-vault") ? "active" : ""
                }`}
              >
                <Link to="/qna-vault" className="menu-link">
                  Q&A VAULT
                </Link>
              </li>
              <li
                className={`menu-item ${
                  isActive("/resources") ? "active" : ""
                }`}
              >
                <Link to="/resources" className="menu-link">
                  RESOURCES
                </Link>
              </li>
              <li
                className={`menu-item ${isActive("/support") ? "active" : ""}`}
              >
                <Link to="/support" className="menu-link">
                  SUPPORT
                </Link>
              </li>
            </>
          )}

          <li className={`menu-item ${isActive("/profile") ? "active" : ""}`}>
            <Link to="/profile" className="menu-link">
              MY PROFILE
            </Link>
          </li>

          {token && (
            <li className="menu-item">
              <button className="menu-link" onClick={handleLogout}>LOGOUT</button>
            </li>
           )||(
            <li className="menu-item">
              <Link to="/signup" className="menu-link">SIGN UP</Link>
            </li>
           )}

        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
