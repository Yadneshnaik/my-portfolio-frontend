import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

export default function Experience() {
  return (
    <section id="experience" className="container py-5">
      <h2 className="text-center fw-bold mb-3 text-white">
        Work Experience
      </h2>
      <p className="text-center text-muted mb-5">
        My professional journey and hands-on industry experience
      </p>

      <div className="row g-4 justify-content-center">
        {experienceData.map((job, i) => (
          <motion.div
            className="col-lg-6 col-md-12"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card experience-card h-100">
              <div className="card-body p-4">
                {/* Role & Status */}
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <h5 className="fw-semibold mb-0">{job.role}</h5>
                  <span className="badge bg-success">{job.status}</span>
                </div>

                {/* Company */}
                <h6 className="text-info mb-1">{job.company}</h6>

                {/* Duration */}
                <p className="text-muted small mb-3">
                  {job.startDate} — {job.endDate}
                </p>

                {/* Highlights */}
                <ul className="experience-list ps-3">
                  {job.highlights.map((h, index) => (
                    <li key={index}>{h}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
