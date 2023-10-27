// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {


  return (
    <ul className="">
      <li className="btn">
        <a
          href="about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="btn">
        <a
          href="portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="btn">
        <a
          href="Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="btn">
        <a
          href="resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
