import "./NavbarStyles.css";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <p>ReactNews.io</p>
      </div>
      <div className="navigation__search">
        <input className="search__input" type="text" placeholder="Search" />
      </div>
    </nav>
  );
};

export default Navbar;
