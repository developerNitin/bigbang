import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./styling/header.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState(0);
  const activeClass = (index) => {
    setActiveLink(index);
  };
  const navlinks = [
    {
      name: "Home",
      links: "/",
    },
    {
      name: "UserProfile",
      links: "/angelasu",
    },
    {
      name: "Product",
      links: "/angelasu/1",
    },
    {
      name: "Explore",
      links: "/search",
    },
    {
      name: "Help",
      links: "",
    },
  ];

  // console.log(navlinks[0].name);

  return (
    <header className="header">
      <div className="navbar">
        <div className="nav-link-left">
          <ul className="ul">
            <li className="navbar-logo">
              <NavLink to="/">BigBang</NavLink>
            </li>
            {navlinks.map((i, idx) => {
              console.log(i);
              return (
                <li key={idx}>
                  <NavLink
                    style={
                      activeLink === idx
                        ? { textDecoration: "underline" }
                        : { textDecoration: "none" }
                    }
                    onClick={() => activeClass(idx)}
                    to={i.links}
                  >
                    {i.name}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-link-right">
          <ul className="ul">
            <li>
              <Link to="" className="a">
                Log in
              </Link>
            </li>
            <li>
              <Link to="" className="button-styling nav-join-now">
                Join Now
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr className="hr"/> */}
    </header>
  );
}
