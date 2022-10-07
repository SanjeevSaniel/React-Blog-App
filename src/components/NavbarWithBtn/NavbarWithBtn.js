import "../NavbarWithBtn/NavbarWithBtn.css";

const NavbarWithBtn = () => {
  return (
    <>
      <nav className="navbar-with-btn">
        <header>
          <span className="the">The</span>
          <span className="title">Siren</span>
        </header>
        <button className="btn-get-started">Get Started</button>
      </nav>
    </>
  );
};

export default NavbarWithBtn;
