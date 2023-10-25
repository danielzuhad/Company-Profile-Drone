import { useCallback, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { TbDrone } from "react-icons/tb";

import "./navbar.css";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = useCallback(() => {
    setClick(!click);
  }, [click]);

  const closeMobileMenu = useCallback(() => {
    setClick(false);
  }, []);

  const navbarItems = [
    { to: "/", item: "Home" },
    { to: "/products", item: "Products" },
    { to: "/about", item: "About" },
    { to: "/contact", item: "Contact" },
  ];

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container container">
          {/* Brand */}
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Sky Tech
            <TbDrone className="navbar-icon" />
          </Link>

          {/* Hamburger Navbar */}
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>

          {/* Navbar Links */}
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {navbarItems.map((item) => (
              <li className="nav-item" key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  {item.item}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};
