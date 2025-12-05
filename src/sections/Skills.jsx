import { motion } from "framer-motion";

const skills = ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB", "MySQL", "Python"];

export default function Skills() {
  return (
    <section id="skills" className="container text-center">
      <h2>Skills</h2>

      <div className="row mt-4">
        {skills.map((skill, i) => (
          <motion.div
            className="col-md-3 col-6 p-3"
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="p-3 bg-dark rounded shadow">{skill}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
