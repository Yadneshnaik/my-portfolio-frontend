import React from "react";
import "./Experience.css";
import { experienceData } from "../data/experienceData";

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>

        <div className="timeline">

          {experienceData.map((job, index) => (
            <div className="timeline-card" key={index}>

              <span className="badge">{job.role}</span>

              <h3>{job.role}</h3>

              <h4 className="company-name">{job.company}</h4>

              <p className="duration">
                {job.startDate} — {job.endDate}
              </p>

              <ul className="highlights">
                {job.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <p className="status">{job.status}</p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
