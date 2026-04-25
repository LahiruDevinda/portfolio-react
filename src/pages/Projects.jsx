import '../styles/projects.css';

export default function Projects() {
  return (
    <div className="main">
            <div className="title">
                <div className="title-heading">Projects</div>
                <div className="title-sub-heading">A collection of projects showcasing my skills and experience in web development</div>
            </div>

            <div className="project-content">
                <div className="project-box">
                    <img className="project-cover-image" src="/images/project-covers/movie-site.jpg" />
                    <div className="project-info">
                        <div className="project-title">Movie Site</div>
                        <div className="project-description">A movie website built using HTML, CSS, and JavaScript. It features a responsive design and allows users to browse and search for movies.</div>
                        <div className="project-tech-stack">
                            <div className="tech-stack-item">HTML</div>
                            <div className="tech-stack-item">CSS</div>
                            <div className="tech-stack-item">JavaScript</div>
                        </div>                        
                        <div className="project-buttons">
                            <a href="https://lahirudevinda.github.io/Movie-Site/" target="_blank"><button className="project-button"><img className="project-view-button" src="/images/icons/arrow-square-out.svg" /></button></a>
                            <a href="https://github.com/LahiruDevinda/Movie-Site" target="_blank"><button className="project-button"><img className="project-github-button" src="/images/icons/github-logo.svg" /></button></a>
                        </div>
                    </div>    
                </div>

                <div className="project-box">
                    <img className="project-cover-image" src="/images/project-covers/billing-sys.jpg" />
                    <div className="project-info">
                        <div className="project-title">Bussiness Management System</div>
                        <div className="project-description">A comprehensive business management system designed to streamline operations and improve efficiency.</div>
                        <div className="project-tech-stack">
                            <div className="tech-stack-item">Java</div>
                            <div className="tech-stack-item">JavaFX</div>
                            <div className="tech-stack-item">SQLite</div>
                            <div className="tech-stack-item">CSS</div>
                        </div>                        
                        <div className="project-buttons">
                            <a href="#" target="_blank"><button className="project-button"><img className="project-view-button" src="/images/icons/arrow-square-out.svg" /></button></a>
                            <a href="https://github.com/LahiruDevinda/Groovee" target="_blank"><button className="project-button"><img className="project-github-button" src="/images/icons/github-logo.svg" /></button></a>
                        </div>
                    </div>    
                </div> 

                <div className="project-box">
                    <img className="project-cover-image" src="/images/project-covers/moblie-app.jpg" />
                    <div className="project-info">
                        <div className="project-title">Mobile App</div>
                        <div className="project-description">A mobile application built using Kotlin. It features a modern UI and provides a seamless user experience.</div>
                        <div className="project-tech-stack">
                            <div className="tech-stack-item">Kotlin</div>
                            <div className="tech-stack-item">Jetpack Compose</div>
                        </div>                        
                        <div className="project-buttons">
                            <a href="#" target="_blank"><button className="project-button"><img className="project-view-button" src="/images/icons/arrow-square-out.svg" /></button></a>
                            <a href="https://github.com/LahiruDevinda/DiceRoller_Android" target="_blank"><button className="project-button"><img className="project-github-button" src="/images/icons/github-logo.svg" /></button></a>
                        </div>
                    </div>    
                </div>

                <div className="project-box">
                    <img className="project-cover-image" src="/images/project-covers/online-shopping.jpg" />
                    <div className="project-info">
                        <div className="project-title">Online Shopping App</div>
                        <div className="project-description">A feature-rich online shopping application with a modern UI and seamless user experience.</div>
                        <div className="project-tech-stack">
                            <div className="tech-stack-item">HTML</div>
                            <div className="tech-stack-item">CSS</div>
                            <div className="tech-stack-item">JavaScript</div>
                        </div>                        
                        <div className="project-buttons">
                            <a href="https://lahirudevinda.github.io/Amazon_Clone/" target="_blank"><button className="project-button"><img className="project-view-button" src="/images/icons/arrow-square-out.svg" /></button></a>
                            <a href="https://github.com/LahiruDevinda/Amazon_Clone" target="_blank"><button className="project-button"><img className="project-github-button" src="/images/icons/github-logo.svg" /></button></a>
                        </div>
                    </div>    
                </div>

                <div className="project-box">
                    <img className="project-cover-image" src="/images/project-covers/Youtube.jpg" />
                    <div className="project-info">
                        <div className="project-title">You Tube Clone</div>
                        <div className="project-description">A clone of the popular video streaming platform with a modern UI and seamless user experience.</div>
                        <div className="project-tech-stack">
                            <div className="tech-stack-item">HTML</div>
                            <div className="tech-stack-item">CSS</div>
                            <div className="tech-stack-item">JavaScript</div>
                        </div>                        
                        <div className="project-buttons">
                            <a href="https://lahirudevinda.github.io/YouTube-Interface/" target="_blank"><button className="project-button"><img className="project-view-button" src="/images/icons/arrow-square-out.svg" /></button></a>
                            <a href="https://github.com/LahiruDevinda/YouTube-Interface" target="_blank"><button className="project-button"><img className="project-github-button" src="/images/icons/github-logo.svg" /></button></a>
                        </div>
                    </div>    
                </div>

                <div className="project-box">
                    <img className="project-cover-image" src="/images/project-covers/portfolio.jpg" />
                    <div className="project-info">
                        <div className="project-title">Portfolio Website</div>
                        <div className="project-description">A responsive portfolio website showcasing my projects and skills.</div>
                        <div className="project-tech-stack">
                            <div className="tech-stack-item">HTML</div>
                            <div className="tech-stack-item">CSS</div>
                            <div className="tech-stack-item">JavaScript</div>
                        </div>                        
                        <div className="project-buttons">
                            <a href="https://lahirudevinda.github.io/portfolio/" target="_blank"><button className="project-button"><img className="project-view-button" src="/images/icons/arrow-square-out.svg" /></button></a>
                            <a href="https://github.com/LahiruDevinda/portfolio" target="_blank"><button className="project-button"><img className="project-github-button" src="/images/icons/github-logo.svg" /></button></a>
                        </div>
                    </div>    
                </div>

            </div>
        </div>
  );
}
