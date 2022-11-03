import { useState } from "react";
import { Link } from "react-router-dom";
import "./styling/header.css";

export default function Header() {
  const [activeLink, setActiveLink] = useState("/");

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
  return (
    <header className="header">
      <div className="navbar">
        <div className="nav-link-left">
          <ul className="ul">
            <li className=" navbar-logo">
              <Link to="/">BigBang</Link>
            </li>
            {navlinks.map((i, idx) => {
              return (
                <li key={idx}>
                  <Link
                    style={
                      activeLink === i.name
                        ? { textDecoration: "underline" }
                        : { }
                    }
                    onClick={() => setActiveLink(i.name)}
                    to={i.links}
                  >
                    {i.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="nav-link-right">
          <ul className="ul">
            <li>
              <Link to="/auth" className="a">
                Log in
              </Link>
            </li>
            <li>
              <Link to="/auth/register" className="button-styling nav-join-now">
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
