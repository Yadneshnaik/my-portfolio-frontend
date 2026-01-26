import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container py-5 perspective">
      <motion.div className="skill-card text-center">
        <h2 className="fw-bold mb-3">About Me</h2>
        <p className="text">
          I specialize in full-stack development with modern UI, strong backend
          systems, and premium user experiences.
        </p>
      </motion.div>
    </section>
  );
}
