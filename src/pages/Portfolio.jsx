import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Portfolio() {
  return (
    <div className="main">
      <h1>My Portfolio</h1>
      <div className="p-grid">
        {/* item 1 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\ReadMi.png" alt="read mi webpage" />
          </div>
          {/* overlay */}
          <div className="overlay">
            <div className="overlayDiv">
              <h2>ReadMi</h2>
              <div className="overlayLinks">
                <a
                  href="https://dry-savannah-12816-a8270f4eeafb.herokuapp.com/home"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={"1.5em"} />
                </a>
                <a href="https://github.com/jujusoi/G3-ReadMi" target="_blank">
                  <FaGithub size={"1.5em"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* item 2 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\Lyrynx.png" alt="lyrynx music app" />
          </div>
          {/* overlay */}
          <div className="overlay">
            <div className="overlayDiv">
              <h2>Lyrynx</h2>
              <div className="overlayLinks">
                <a
                  href="https://alexbishopbootcamp.github.io/music-lyric-player/"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={"1.5em"} />
                </a>
                <a
                  href="https://github.com/alexbishopbootcamp/music-lyric-player"
                  target="_blank"
                >
                  <FaGithub size={"1.5em"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* item 3 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\PortfolioCSS.png" alt="original portfolio" />
          </div>
          {/* overlay */}
          <div className="overlay">
            <div className="overlayDiv">
              <h2>Original Portfolio</h2>
              <div className="overlayLinks">
                <a
                  href="https://trahy.github.io/w2-my-portfolio/"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={"1.5em"} />
                </a>
                <a
                  href="https://github.com/trahy/w2-my-portfolio"
                  target="_blank"
                >
                  <FaGithub size={"1.5em"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* item 4 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\WeatherApp.png" alt="weather app" />
          </div>
          {/* overlay */}
          <div className="overlay">
            <div className="overlayDiv">
              <h2>Weather Dashboard</h2>
              <div className="overlayLinks">
                <a
                  href="https://trahy.github.io/w6-weather-dashboard/"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={"1.5em"} />
                </a>
                <a
                  href="https://github.com/trahy/w6-weather-dashboard"
                  target="_blank"
                >
                  <FaGithub size={"1.5em"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* item 5 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\regexTutorial.png" alt="regex tutorial" />
          </div>
          {/* overlay */}
          <div className="overlay">
            <div className="overlayDiv">
              <h2>Regex Tutorial</h2>
              <div className="overlayLinks">
                <a
                  href="https://gist.github.com/trahy/103863277a8ec5bce07337517f611666"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={"1.5em"} />
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* item 6 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\jate.png" alt="just another text editor" />
          </div>
          {/* overlay */}
          <div className="overlay">
            <div className="overlayDiv">
              <h2>JATE</h2>
              <div className="overlayLinks">
                <a
                  href="https://p-w-a-jate-5cf98d9385d0.herokuapp.com/"
                  target="_blank"
                >
                  <FaExternalLinkAlt size={"1.5em"} />
                </a>
                <a href="https://github.com/trahy/text-editor" target="_blank">
                  <FaGithub size={"1.5em"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
