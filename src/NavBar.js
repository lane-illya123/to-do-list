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
      ClassName="nav-link">
      About App
      </NavLink>
      <NavLink
      to="/Info"
      ClassName="nav-link">
      More Info  
      </NavLink>
     
    </nav>
  );
};

export default NavBar;