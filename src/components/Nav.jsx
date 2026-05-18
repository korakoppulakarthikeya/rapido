import { Link } from "react-router-dom";
import "../Style/nav.css";

const Nav = () => {
  return (
    <nav className="navbar">

      <div className="logo">
        rapido
      </div>

      <ul className="nav-links">

        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/about">About Us</Link>
        </li>

        <li>
          <Link to="/safety">Safety</Link>
        </li>

        <li>
          <Link to="/careers">Careers</Link>
        </li>

        <li>
          <Link to="/blog">Blog</Link>
        </li>

        <li>
          <Link to="/press">Press</Link>
        </li>

        <li>
          <Link to="/contact">Contact Us</Link>
        </li>

      </ul>

    </nav>
  );
};

export default Nav;