// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li className="navBtn">
          <CustomLink to="/">ABOUT</CustomLink>
        </li>
        <li className="navBtn">
          <CustomLink to="/portfolio">PORTFOLIO</CustomLink>
        </li>
        <li className="navBtn">
          <CustomLink to="/contact">CONTACT</CustomLink>
        </li>
        <li className="navBtn">
          <CustomLink to="/resume">RESUME</CustomLink>
        </li>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
