import "./styling/header.css";

const Header = () => {
  return (
    <header className="App-header">
      <div className="navbar">
        <div className="nav-link-left">
          <ul className="ul">
            <li className="navbar-logo">
              <a href="/" className="a">BigBang</a>
            </li>
            <li>
              <a className="a">Categories</a>
            </li>
            <li>
              <a className="a">Services</a>
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
              <a className="a button-styling nav-join-now">Join Now</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
