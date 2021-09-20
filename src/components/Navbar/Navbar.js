import "./NavbarStyles.css";
import SearchInput from "../Input/SearchInput";

const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="navigation__brand">
        <p>ReactNews.io</p>
      </div>
      <SearchInput />
    </nav>
  );
};

export default Navbar;
