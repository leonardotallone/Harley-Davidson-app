import React from "react";


import NavbarLinks from "./NavbarLinks";
// import NavbarAdminLinks from "./NavbarAdminLinks";

// import SignedInLinks from "./SignedInLinks";
// import SignedOutLinks from "./SignedOutLinks";
import Logo from "../assets/Navbar-icon.png";

const Navbar = () => {
  

  return (
    <div className="navbar-fixed">
      <nav className="nav-wrapper">
        <div className="container">
          <a href="/">
            <img className="logo-img" src={Logo} alt=""></img>
          </a>
          <NavbarLinks />
          {/* <NavbarAdminLinks /> */}
          
          {/* {user === true ? <NavbarAdminLinks /> : <NavbarAdminLinks />} */}
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
