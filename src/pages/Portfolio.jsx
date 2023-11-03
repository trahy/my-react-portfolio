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
        </div>
        {/* item 2 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\Lyrynx.png" alt="lyrynx music app" />
          </div>
        </div>
        {/* item 3 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\PortfolioCSS.png" alt="original portfolio" />
          </div>
        </div>
        {/* item 4 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\WeatherApp.png" alt="weather app" />
          </div>
        </div>
        {/* item 5 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\regexTutorial.png" alt="regex tutorial" />
          </div>
        </div>
        {/* item 6 */}
        <div className="p-item">
          <div className="p-img">
            <img src="src\assets\jate.png" alt="just another text editor" />
          </div>
        </div>
      </div>
    </div>
  );
}
