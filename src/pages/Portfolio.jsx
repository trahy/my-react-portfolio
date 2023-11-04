import Project from "../components/Project";

const projects = [
  {
    image: "src/assets/ReadMi.png",
    alt: "Read Mi Webpage",
    title: "ReadMi",
    deploy: "https://dry-savannah-12816-a8270f4eeafb.herokuapp.com/home",
    repo: "https://github.com/jujusoi/G3-ReadMi",
  },
  {
    image: "src/assets/Lyrynx.png",
    alt: "Lyrynx App",
    title: "Lyrynx",
    deploy: "https://alexbishopbootcamp.github.io/music-lyric-player/",
    repo: "https://github.com/alexbishopbootcamp/music-lyric-player",
  },
  {
    image: "src/assets/PortfolioCSS.png",
    alt: "Original Portfolio",
    title: "Original Portfolio",
    deploy: "https://trahy.github.io/w2-my-portfolio/",
    repo: "https://github.com/trahy/w2-my-portfolio",
  },
  {
    image: "src/assets/WeatherApp.png",
    alt: "Weather Dashboard",
    title: "Weather Dashboard",
    deploy: "https://trahy.github.io/w6-weather-dashboard/",
    repo: "https://github.com/trahy/w6-weather-dashboard",
  },
  {
    image: "src/assets/regexTutorial.png",
    alt: "Regex Tutorial",
    title: "Regex Tutorial",
    deploy: "https://gist.github.com/trahy/103863277a8ec5bce07337517f611666",
    repo: "",
  },
  {
    image: "src/assets/jate.png",
    alt: "Just Another Text Editor",
    title: "JATE",
    deploy: "https://p-w-a-jate-5cf98d9385d0.herokuapp.com/",
    repo: "https://github.com/trahy/text-editor",
  },
];

export default function Portfolio() {
  return (
    <div className="main">
      <h1>My Portfolio</h1>
      <div className="p-grid">
        {projects.map((project) => {
          return (
            <Project
              image={project.image}
              alt={project.alt}
              title={project.title}
              deploy={project.deploy}
              repo={project.repo}
            />
          );
        })}
      </div>
    </div>
  );
}
