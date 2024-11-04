import { NavLink } from "react-router-dom";
import "../../../components/Layout/UI/Header.jsx"; // Ensure this is pointing to your updated CSS file

export const Headers = () => {
  return (
    <header className="header">
      <div className="Header-container">
        <div className="Header-grid navbar-grid">
          <div className="Header-logo">
            <NavLink to="/">
              <img src="/images/logo.png" alt="Aamcha Auto Logo" className="Header-logo-img animated-logo" />
            </NavLink>
          </div>
          
          <nav className="nav-left">
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/About"> About </NavLink>
              </li>
              <li>
                <NavLink to="/Safety"> Safety </NavLink>
              </li>
              <li>
                <NavLink to="/Careers"> Careers </NavLink>
              </li>
              <li>
                <NavLink to="/Blog"> Blog </NavLink>
              </li>
              <li>
                <NavLink to="/PressPage"> Press </NavLink>
              </li>
              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
