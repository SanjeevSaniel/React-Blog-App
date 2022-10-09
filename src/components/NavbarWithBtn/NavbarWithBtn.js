import { Link } from "react-router-dom";
import "../NavbarWithBtn/NavbarWithBtn.css";

const NavbarWithBtn = () => {
  return (
    <>
      <nav className="navbar-with-btn">
        <Link className="links" to="/">
          <header className="header">
            <span className="the">The</span>
            <span className="title">Siren</span>
          </header>
        </Link>
        <button className="btn-get-started">Get Started</button>
      </nav>
    </>
  );
};

export default NavbarWithBtn;
