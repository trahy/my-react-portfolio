// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
import "./Navbar.css"

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="navbar">
      <li className="btn">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'navLink Active' : 'navLink'}
        >
          About
        </a>
      </li>
      <li className="btn">
        <a
          href="#portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'navLink active' : 'navLink'}
        >
          Portfolio
        </a>
      </li>
      <li className="btn">
        <a
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'navLink active' : 'navLink'}
        >
          Contact
        </a>
      </li>
      <li className="btn">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'navLink active' : 'navLink'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
