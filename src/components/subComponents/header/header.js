import "./styling/header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="navbar">
        <div className="nav-link-left">
          <ul className="ul">
            <li className="navbar-logo">
              <a href="/" className="a">BigBang</a>
            </li>
            <li>
              <a href="/angelasu" className="a">Userprofile</a>
            </li>
            <li>
              <a href="/product" className="a">Product</a>
            </li>
            <li>
              <a className="a">Explore</a>
            </li>
            <li>
              <a className="a">Help</a>
            </li>
          </ul>
        </div>
        <div className="nav-link-right">
          <ul className="ul">
            <li>
              <a className="a">Log in</a>
            </li>
            <li>
              <a className="button-styling nav-join-now">Join Now</a>
            </li>
          </ul>
        </div>
      </div>
      {/* <hr className="hr"/> */}
    </header>
  );
};

