import React from 'react';

const About = () => {
  // Tool data structured for easy mapping
  const toolCategories = [
    {
      title: "Front-End",
      icon: "images/icons/code.svg",
      tools: [
        { name: "HTML", img: "images/tools&languages/icons8-html-5.svg" },
        { name: "CSS", img: "images/tools&languages/icons8-css-logo.svg" },
        { name: "JavaScript", img: "images/tools&languages/icons8-javascript.svg" }
      ]
    },
    {
      title: "Back-End",
      icon: "images/icons/hard-drives.svg",
      tools: [
        { name: "Java", img: "images/tools&languages/icons8-java.svg" },
        { name: "JavaScript", img: "images/tools&languages/icons8-javascript.svg" }
      ]
    },
    {
      title: "Databases",
      icon: "images/icons/database.svg",
      tools: [
        { name: "MySQL", img: "images/tools&languages/icons8-mysql-96.png" },
        { name: "SQLite", img: "images/tools&languages/icons8-sqlite-100.png" }
      ]
    }
  ];

  const timelineItems = [
    {
      year: "2025 - Present",
      title: "BSc (Hons) in Software Engineering",
      org: "University of Kelaniya, Sri Lanka",
      desc: "Currently pursuing a full-time undergraduate degree."
    },
    {
      year: "2025 - Present",
      title: "Editor & Graphic Designer",
      org: "Software Engineering Students' Association (SESA)",
      desc: "Produced high-quality video promos, flyers and merchandise designs."
    },
    {
      year: "2021 - 2023",
      title: "G.C.E. Advanced Level",
      org: "Christ Church Boys' College, Baddegama",
      desc: "Achieved a Z-score of 1.5996 in the Common stream."
    }
  ];

  return (
    <div className="main">
      <section className="heading-section">
        <div className="heading-section-title">
          <h1 className="heading-section-heading">About Me</h1>
          <p className="heading-section-sub-heading">Passionate developer with a love for creating exceptional digital experiences</p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="story-box">
          <h2 className="story-box-heading">My Story</h2>
          <div className="story-box-description">
            <p>My journey began at Christ Church Boys' College, Baddegama. I am currently pursuing my BSc. (Hons) in Software Engineering at the University of Kelaniya.</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools">
        <h2 className="tools-title-heading">Tools & Technologies</h2>
        <div className="tool-content">
          {toolCategories.map((category, idx) => (
            <div key={idx} className="tool-box">
              <div className="tool-box-title">
                <img src={category.icon} alt="" className="tool-box-image" />
                <span>{category.title}</span>
              </div>
              {category.tools.map((tool, tIdx) => (
                <div key={tIdx} className="tool">
                  <img src={tool.img} alt={tool.name} className="tool-image" />
                  <div className="tool-name">{tool.name}</div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Education & Experience Timeline */}
      <section className="timeline-section">
        <h2 className="education-expirience-heading">Education & Experience</h2>
        <div className="timeline">
          {timelineItems.map((item, idx) => (
            <div key={idx} className="timeline-item">
              <div className="timeline-card">
                <div className="timeline-year">{item.year}</div>
                <h3 className="timeline-title">{item.title}</h3>
                <div className="timeline-company">{item.org}</div>
                <p className="timeline-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;