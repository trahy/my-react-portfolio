// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <nav>
      <ul className="navbar">
        <NavLink className="navBtn" to="/">ABOUT</NavLink >
        <NavLink className="navBtn" to="/portfolio">PORTFOLIO</NavLink >
        <NavLink className="navBtn" to="/contact">CONTACT</NavLink >
        <NavLink className="navBtn" to="/resume">RESUME</NavLink >
      </ul>
    </nav>
  );
}