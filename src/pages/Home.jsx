export default function Home() {
  return (
    <div className="intro">
      <div className="intro-content">
        <div className="greeting">Hi, I'm</div>
        <div className="name">Lahiru Devinda</div>
        <div className="designation">Creative Designer & Developer</div>
        <p className="intro-bio">
          I create beautiful, functional digital experiences that bring ideas to life.
        </p>
        <div className="intro-buttons">
          <a href="/cv.pdf" className="resource-buttons"><button className="cv-button">Download CV</button></a>
        </div>
        <div className="intro-social-media-buttons">
          <a href="https://github.com/LahiruDevinda" target="_blank" rel="noreferrer">
            <button className="social-media-button"><img src="images/icons/github-logo.svg" alt="GitHub" /></button>
          </a>
        </div>
      </div>
      <img className="intro-image" src="images/home/intro-image.png" alt="Lahiru" />
    </div>
  );
}