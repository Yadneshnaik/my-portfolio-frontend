import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="container text-center">
      <h2>Projects</h2>

      <div className="row mt-4">
        {[1, 2, 3].map((p, i) => (
          <motion.div
            className="col-md-4 p-3"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="card bg-dark text-white p-3 shadow">
              <h4>Project {p}</h4>
              <p>Short description about the project.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
