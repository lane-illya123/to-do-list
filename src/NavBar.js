import { NavLink } from "react-router-dom";

/* define the NavBar component */
function NavBar() {
  return (
    <nav>
      <NavLink
        to="/"
        /* add styling to Navlink */
        className="nav-link"
      >
        Home
      </NavLink>
      <NavLink
      to="/About"
      className="nav-link">
      About App
      </NavLink>
      <NavLink
      to="/Info"
      className="nav-link">
      More Info  
      </NavLink>
     
    </nav>
  );
};

export default NavBar;