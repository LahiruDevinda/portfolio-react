import ProjectCard from '../components/ProjectCard';

const projectData = [
  {
    title: "Movie Site",
    desc: "A movie website built using HTML, CSS, and JavaScript.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/LahiruDevinda/Movie-Site",
    img: "images/project-covers/movie-site.jpg"
  },
  {
    title: "Business Management System",
    desc: "A comprehensive system designed to streamline operations.",
    tech: ["Java", "JavaFX", "SQLite"],
    github: "https://github.com/LahiruDevinda/Groovee",
    img: "images/project-covers/billing-sys.jpg"
  }
];

export default function Projects() {
  return (
    <div className="project-content">
      <div className="title">
        <div className="title-heading">Projects</div>
      </div>
      <div className="project-grid">
        {projectData.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </div>
  );
}