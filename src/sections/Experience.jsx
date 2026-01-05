import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="container text-center mt-5">
      <h2 className="text-white">Work Experience</h2>

      <div className="row mt-4">

        {experienceData.map((job, i) => (
          <motion.div
            className="col-md-6 p-3"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-dark text-white shadow p-3 rounded-4">

              <span className="badge bg-success w-25 mx-auto">
                {job.role}
              </span>

              <h4 className="mt-3">{job.role}</h4>

              <h5 className="text-info">{job.company}</h5>

              <p className="text-muted">
                {job.startDate} — {job.endDate}
              </p>

              <ul className="text-start mx-auto" style={{ maxWidth: "80%" }}>
                {job.highlights.map((h, index) => (
                  <li key={index}>{h}</li>
                ))}
              </ul>

              <p className="text-success fw-bold">{job.status}</p>
            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
