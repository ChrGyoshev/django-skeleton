// import { useEffect, useState } from "react";

// const LogOut = () => {
//   const [token, setToken] = useState("");

//   useEffect(() => {
//     const storedToken = localStorage.getItem("accessToken");
//     if (storedToken) {
//       // Check if token exists before setting it
//       setToken(storedToken);

//       localStorage.removeItem("accessToken");
//       localStorage.removeItem("refreshToken");
//     }
//   }, []);

//   console.log("Token state:", token);

//   return (
//     <>
//       <h2>Your token is:</h2>
//       <h1>{token}</h1>
//     </>
//   );
// };

// export default LogOut;

import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
      <Navbar.Toggle
        aria-controls="navbarScroll"
        data-bs-toggle="collapse"
        data-bs-target="#navbarScroll"
      />
      <Navbar.Collapse id="navbarScroll">
        <Nav id="navbaring" className="w-100">
          <a class="navbar-brand" href="#">
            Django
          </a>
          <NavLink eventKey="1" as={Link} to="/">
            Home
          </NavLink>
          <NavLink eventKey="2" as={Link} to="/register">
            Register
          </NavLink>
          <NavLink eventKey="3" as={Link} to="/contact">
            Contact
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
