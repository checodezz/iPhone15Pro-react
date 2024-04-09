import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-black text-light">
      <div className="container">
        <h1 className="display-1">iPhone 15 Pro</h1>
        <ul className="nav">
          <li className="nav-item">
            <NavLink className="nav-link  link-secondary">Overview</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-secondary">Features</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link link-secondary">Specification</NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
