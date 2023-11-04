import { PropTypes } from "prop-types";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Project({ image, alt, title, deploy, repo }) {
  return (
    <div className="p-item">
      <div className="p-img">
        <img src={image} alt={alt} />
      </div>
      {/* overlay */}
      <div className="overlay">
        <div className="overlayDiv">
          <h2>{title}</h2>
          <div className="overlayLinks">
            <a href={deploy} target="_blank">
              <FaExternalLinkAlt size={"1.5em"} />
            </a>
            <a href={repo} target="_blank">
              <FaGithub size={"1.5em"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// define prop types for project component
Project.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  deploy: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired,
};
