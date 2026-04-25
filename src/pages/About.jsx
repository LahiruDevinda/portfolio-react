import '../styles/about.css';

export default function About() {
  return (
    <div className="main">
            <div className="heading-section">
                <div className="heading-section-title">
                    <div className="heading-section-heading">
                        About Me
                    </div>
                    <div className="heading-section-sub-heading">
                        Passionate developer with a love for creating exceptional digital experiences
                    </div>
                </div>
            </div>

            <div className="story-section">
                <div className="story-box">
                    <div className="story-box-content">
                        <div className="story-box-heading">
                            My Story
                        </div>
                        <div className="story-box-description">
                            <p>
                                My journey began at Christ Church Boys' College, Baddegama, where I built a disciplined academic foundation.
                                 After achieving solid results in my O/Ls, I challenged myself by entering the Common Stream for my Advanced Levels. 
                                 Through hard work and focus, I secured A, B, and C passes with a 1.5996 Z-score, earning my place at the University of Kelaniya.
                            </p>
                            <p>
                                Currently, I am pursuing my BSc. (Hons) in Software Engineering. While my degree focuses on the architecture of systems, 
                                I believe that great software also needs great presentation. This led me to join the Software Engineering Students' Association (SESA), 
                                where I serve as an active member.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="drives">
                    <div className="drives-heading">
                        What Drives Me
                    </div>
                    <div className="drive-boxes">
                        <div className="drives-content">
                            <div className="drives-content-box">
                                <div className="drives-content-heading">
                                    <div className="drives-content-image-background">
                                        <img className="drives-content-image" src="/images/icons/code.svg" />
                                    </div>
                                    <div className="drives-content-title">
                                        Clean Code
                                    </div>
                                </div>
                                <div className="drives-content-description">
                                    Writing maintainable, scalable, and efficient code
                                </div>    
                            </div>
                        </div>
                        <div className="drives-content">
                            <div className="drives-content-box">
                                <div className="drives-content-heading">
                                    <div className="drives-content-image-background">
                                        <img className="drives-content-image" src="/images/icons/palette.svg" />
                                    </div>
                                    <div className="drives-content-title">
                                        UI/UX Design
                                    </div>
                                </div>
                                <div className="drives-content-description">
                                    Creating beautiful and intuitive user experiences
                                </div>
                            </div>
                        </div>
                        <div className="drives-content">
                            <div className="drives-content-box">
                                <div className="drives-content-heading">
                                    <div className="drives-content-image-background">
                                        <img className="drives-content-image" src="/images/icons/git-fork.svg" />
                                    </div>
                                    <div className="drives-content-title">
                                        Open Source
                                    </div>
                                </div>
                                <div className="drives-content-description">
                                    Contributing to and learning from the community
                                </div>
                            </div>
                        </div>
                        <div className="drives-content">
                            <div className="drives-content-box">
                                <div className="drives-content-heading">
                                    <div className="drives-content-image-background">
                                        <img className="drives-content-image" src="/images/icons/device-mobile-camera.svg" />
                                    </div>
                                    <div className="drives-content-title">
                                        Mobile First
                                    </div>
                                </div>
                                <div className="drives-content-description">
                                    Building responsive applications for all devices        
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

            </div>

            <div className="tools">
                <div className="tools-title">
                    <div className="tools-title-heading">
                        Tools & Technologies
                    </div>
                    <div className="tools-title-sub-heading">
                        Technologies I work with to bring ideas to life
                    </div>    
                </div>

                <div className="tool-content">

                    <div className="tool-box">
                        <div className="tool-box-title">
                            <div className="tool-box-image-background">
                                <img className="tool-box-image" src="/images/icons/code.svg" />
                            </div>
                            <div className="tool-box-title-text">Front-End</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-html-5.svg" />
                            <div className="tool-name">HTML</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-css-logo.svg" />
                            <div className="tool-name">CSS</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-javascript.svg" />
                            <div className="tool-name">JavaScript</div>
                        </div>
                    </div>

                    <div className="tool-box">
                        <div className="tool-box-title">
                            <div className="tool-box-image-background">
                                <img className="tool-box-image" src="/images/icons/hard-drives.svg" />
                            </div>
                            <div className="tool-box-title-text">Back-End</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-java.svg" />
                            <div className="tool-name">Java</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-javascript.svg" />
                            <div className="tool-name">JavaScript</div>
                        </div>
                    </div>

                    <div className="tool-box">
                        <div className="tool-box-title">
                            <div className="tool-box-image-background">
                                <img className="tool-box-image" src="/images/icons/database.svg" />
                            </div>
                            <div className="tool-box-title-text">Databases</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-mysql-96.png" />
                            <div className="tool-name">MySQL</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-sqlite-100.png" />
                            <div className="tool-name">SQLite</div>
                        </div>
                    </div>

                    <div className="tool-box other-tools">
                        <div className="tool-box-title">
                            <div className="tool-box-image-background">
                                <img className="tool-box-image" src="/images/icons/lightning.svg" />
                            </div>
                            <div className="tool-box-title-text">Other Tools</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-visual-studio-code-2019.svg" />
                            <div className="tool-name">VS Code</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-intellij-idea.svg" />
                            <div className="tool-name">IntelliJ IDEA</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-git.svg" />
                            <div className="tool-name">Git</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/github-logo.svg" />
                            <div className="tool-name">GitHub</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-adobe-photoshop-96.png" />
                            <div className="tool-name">Adobe Photoshop</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-adobe-premiere-pro-96.png" />
                            <div className="tool-name">Adobe Premiere Pro</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-android-studio.svg" />
                            <div className="tool-name">Android Studio</div>
                        </div>

                        <div className="tool">
                            <img className="tool-image" src="/images/tools&languages/icons8-figma.svg" />
                            <div className="tool-name">Figma</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="education-expirience">
                <div className="education-expirience-title">
                    <div className="education-expirience-heading">
                        Education & Experience
                    </div>
                    <div className="education-expirience-sub-heading">
                        My academic background and practical experience in software development
                    </div>
                    <section className="timeline-section">
                        <div className="timeline">

                            <div className="timeline-item">
                                <div className="timeline-line"></div>
                                <div className="timeline-dot"></div>

                                <div className="timeline-card">
                                    <div className="timeline-year">2025 - Present</div>
                                    <h2 className="timeline-title">BSc (Hons) in Software Engineering</h2>
                                    <div className="timeline-company">University of Kelaniya, Sri Lanka</div>
                                    <p className="timeline-description">
                                        Currently pursuing a full-time undergraduate degree, focusing on core software engineering principles, advanced programming, and system design.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-line"></div>
                                <div className="timeline-dot"></div>

                                <div className="timeline-card">
                                    <div className="timeline-year">2025 - Present</div>
                                    <h2 className="timeline-title">Editor & Graphic Designer</h2>
                                    <div className="timeline-company">Software Engineering Students' Association (SESA)</div>
                                    <p className="timeline-description">
                                        Produced high-quality video promos, motion graphics, flyers and merchandise designs for major events.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-line"></div>
                                <div className="timeline-dot"></div>

                                <div className="timeline-card">
                                    <div className="timeline-year">2021 - 2023</div>
                                    <h2 className="timeline-title">G.C.E. Advanced Level</h2>
                                    <div className="timeline-company">Christ Church Boys' College, Baddegama</div>
                                    <p className="timeline-description">
                                        Achieved a Z-score of 1.5996 in the Common stream with results of A, B, and C. This performance secured admission to the Software Engineering degree program at the University of Kelaniya.
                                    </p>
                                </div>
                            </div>

                            <div className="timeline-item">
                                <div className="timeline-line"></div>
                                <div className="timeline-dot"></div>

                                <div className="timeline-card">
                                    <div className="timeline-year">2020</div>
                                    <h2 className="timeline-title">G.C.E. Ordinary Level</h2>
                                    <div className="timeline-company">Christ Church Boys' College, Baddegama</div>
                                    <p className="timeline-description">
                                        Successfully completed secondary education with a balanced profile of 3As, 1B, and 5Cs, providing the foundation for further studies in the Science stream.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </section>
                </div>    
            </div>

        </div>
  );
}
