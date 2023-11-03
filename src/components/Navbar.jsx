// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <ul className="navbar">
        <li>
          <a className="navBtn" href="/">ABOUT</a>
        </li>
        <li>
        <a className="navBtn" href="/portfolio">PORTFOLIO</a>
        </li>
        <li>
        <a className="navBtn" href="/contact">CONTACT</a>
        </li>
        <li>
        <a className="navBtn" href="/resume">RESUME</a>
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
