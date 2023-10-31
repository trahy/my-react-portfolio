import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footerDiv">
      <ul className="footer">
          <li className="footerBtn" href="mailto:trahy032@gmail.com">
            <MdEmail size={"1.75em"} />
          </li>
          <li
            className="footerBtn"
            href="http://linkedin.com/in/huy-tran-37a89a1a8"
          >
            <FaLinkedin size={"1.75em"} />
          </li>
          <li className="footerBtn" href="https://github.com/trahy">
            <FaGithub size={"1.75em"} />
          </li>
      </ul>
    </div>
  );
}
