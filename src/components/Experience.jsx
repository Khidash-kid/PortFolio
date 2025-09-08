import React, { useEffect } from "react";
import "../styles/Experience.css";

function Experience() {
  useEffect(() => {
    const lineEl = document.querySelector(".timeline-line");
    const timeline = document.querySelector(".timeline");

    function handleScroll() {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const timelineTop = rect.top + scrollY;
      const timelineHeight = rect.height;

      const progress = Math.min(
        Math.max((scrollY + windowHeight - timelineTop) / timelineHeight, 0),
        1
      );

      lineEl.style.height = progress * 100 + "%";
    }

    window.addEventListener("scroll", handleScroll);

    // Animate dots when visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll(".timeline-item").forEach((item) => {
      observer.observe(item);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <section id="experience" className="experience-section">
      <h1 className="text-center mb-5" data-aos="zoom-out-up">Experience</h1>

      <div className="timeline">
        <div className="timeline-line"></div>

        {/* ITEM 1 */}
        <div className="timeline-item" data-aos="fade-right">
          <div className="timeline-dot color-blue"></div>
          <div className="timeline-content card-blue">
            <h3>Frontend Developer</h3>
            <h4>ABC Tech Pvt Ltd</h4>
            <p className="date">Jan 2025 - Mar 2025</p>
            <ul>
              <li>Built responsive UI with React + Bootstrap</li>
              <li>Optimized performance by 30%</li>
              {/* <li>Collaborated in Agile team</li> */}
            </ul>
          </div>
        </div>

        {/* ITEM 2 */}
        <div className="timeline-item" data-aos="fade-left" data-aos-delay="200">
          <div className="timeline-dot color-green"></div>
          <div className="timeline-content card-green">
            <h3>Web Development Intern</h3>
            <h4>Brainery Spot Technologies</h4>
            <p className="date">Mar 2025 - May 2025</p>
            <ul>
              <li>Built responsive UI with React + Bootstrap</li>
              <li>Created responsive layouts with Bootstrap</li>
              {/* <li>Integrated authentication systems</li> */}
            </ul>
          </div>
        </div>

        {/* ITEM 3 */}
        {/* <div className="timeline-item" data-aos="zoom-in-up" data-aos-delay="400">
          <div className="timeline-dot color-purple"></div>
          <div className="timeline-content card-purple">
            <h3>Freelance Projects</h3>
            <h4>Remote</h4>
            <p className="date">2021 – 2022</p>
            <ul>
              <li>Built e-commerce websites</li>
              <li>Customized WordPress themes</li>
              <li>Worked with international clients</li>
            </ul>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Experience;