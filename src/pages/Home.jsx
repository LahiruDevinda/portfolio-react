import ContactForm from '../components/ContactForm';
import '../styles/index.css';

export default function Home() {
  return (
    <main className="main">
      <section className="intro">
        <div className="intro-content">
          <div className="greeting">Hi, I'm</div>
          <div className="name">Lahiru Devinda</div>
          <div className="designation">Creative Designer &amp; Developer</div>
          <div className="intro-bio">
            I create beautiful, functional digital experiences that bring ideas to life. Passionate about clean code,
            modern design, and user-centered solutions.
          </div>

          <div className="intro-buttons">
            <a href="/" className="resource-buttons" target="_blank" rel="noreferrer">
              <button className="cv-button" type="button">
                Download CV <img className="cv-button-image" src="/images/icons/download-simple.svg" alt="" />
              </button>
            </a>
            <a href="#contact-form-id" className="resource-buttons">
              <button className="get-in-touch-button" type="button">Get In Touch</button>
            </a>
          </div>

          <div className="intro-social-media-buttons">
            <a href="https://github.com/LahiruDevinda" target="_blank" rel="noreferrer">
              <button className="social-media-button" type="button">
                <img className="social-media-button-image" src="/images/icons/github-logo.svg" alt="GitHub" />
              </button>
            </a>
            <a href="https://www.linkedin.com/in/lahiru-devinda-5273912b6" target="_blank" rel="noreferrer">
              <button className="social-media-button" type="button">
                <img className="social-media-button-image" src="/images/icons/linkedin-logo.svg" alt="LinkedIn" />
              </button>
            </a>
            <a href="mailto:lahirudevinda@gmail.com">
              <button className="social-media-button" type="button">
                <img className="social-media-button-image" src="/images/icons/envelope-simple.svg" alt="Email" />
              </button>
            </a>
          </div>
        </div>

        <img className="intro-image" src="/images/home/intro-image.png" alt="Lahiru Devinda" />
      </section>

      <section className="work-section">
        <div className="section-title">
          <div className="section-heading">What I do</div>
          <div className="section-sub-heading">
            Combining creativity with technical expertise to build exceptional digital experiences
          </div>
        </div>

        <div className="work-section-boxes">
          <div className="work-section-box">
            <div className="box-icon"><img className="box-icon-image" src="/images/icons/code-simple.svg" alt="" /></div>
            <div className="box-heading">Development</div>
            <div className="sub-heading">Building robust web applications with modern technologies and best practices.</div>
          </div>
          <div className="work-section-box">
            <div className="box-icon"><img className="box-icon-image" src="/images/icons/palette.svg" alt="" /></div>
            <div className="box-heading">Design</div>
            <div className="sub-heading">Creating intuitive and visually appealing user interfaces that users love.</div>
          </div>
          <div className="work-section-box">
            <div className="box-icon"><img className="box-icon-image" src="/images/icons/lightning.svg" alt="" /></div>
            <div className="box-heading">Performance</div>
            <div className="sub-heading">Optimizing applications for speed, efficiency, and seamless user experience.</div>
          </div>
          <div className="work-section-box">
            <div className="box-icon"><img className="box-icon-image" src="/images/icons/users.svg" alt="" /></div>
            <div className="box-heading">Collaboration</div>
            <div className="sub-heading">Working effectively with teams to deliver projects that exceed expectations.</div>
          </div>
        </div>

        <div className="work-section-counts">
          <div className="count-box"><div className="count">3+</div><div className="count-name">Publications</div></div>
          <div className="count-box"><div className="count">5+</div><div className="count-name">Projects</div></div>
        </div>
      </section>

      <section className="get-in-toch-section">
        <div className="section-title">
          <div className="section-heading">Get In Touch</div>
          <div className="section-sub-heading">Have a project in mind? Let's work together to create something amazing</div>
        </div>

        <div className="get-in-touch-contain">
          <div className="contact-inforamtion">
            <div className="contact-information-heading">Contact Information</div>

            <div className="contact-information-data">
              <div className="data-image-background"><img className="data-image" src="/images/icons/envelope-simple.svg" alt="" /></div>
              <div className="data-text"><div className="data-text-heading">Email</div><div className="data-text-sub-text">hblahirudevinda@gmail.com</div></div>
            </div>

            <div className="contact-information-data">
              <div className="data-image-background"><img className="data-image" src="/images/icons/phone.svg" alt="" /></div>
              <div className="data-text"><div className="data-text-heading">Phone</div><div className="data-text-sub-text">(+94)74 256 7843</div></div>
            </div>

            <div className="contact-information-data">
              <div className="data-image-background"><img className="data-image" src="/images/icons/map-pin.svg" alt="" /></div>
              <div className="data-text"><div className="data-text-heading">Address</div><div className="data-text-sub-text">149/C, Horagampita, Ginimellagaha.</div></div>
            </div>

            <img className="contact-information-image" src="/images/home/download.jpg" alt="Contact" />
          </div>

          <ContactForm id="contact-form-id" />
        </div>
      </section>
    </main>
  );
}

