const ProjectCard = ({ title, description, techStack, githubLink, liveLink, image }) => (
  <div className="project-box">
    <img className="project-cover-image" src={image} alt={title} />
    <div className="project-info">
      <div className="project-title">{title}</div>
      <p className="project-description">{description}</p>
      <div className="project-tech-stack">
        {techStack.map(tech => (
          <div key={tech} className="tech-stack-item">{tech}</div>
        ))}
      </div>
      <div className="project-buttons">
        {liveLink && <a href={liveLink} target="_blank" rel="noreferrer"><button className="project-button"><img src="images/icons/arrow-square-out.svg" alt="View" /></button></a>}
        <a href={githubLink} target="_blank" rel="noreferrer"><button className="project-button"><img src="images/icons/github-logo.svg" alt="GitHub" /></button></a>
      </div>
    </div>
  </div>
);