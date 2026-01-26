import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8 text-center">
          <motion.h2
            className="fw-bold mb-3 text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>

          <motion.p
            className="text-muted fs-5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            I am a passionate <strong className="text-white">Software Developer</strong> and
            <strong className="text-white"> Full Stack Developer</strong> who builds
            modern, scalable, and high-performance digital solutions.
            I specialize in crafting clean user interfaces and robust back-end
            systems using technologies like React, Node.js, MongoDB, MySQL,
            and other modern tools.
          </motion.p>

          <motion.div
            className="d-flex justify-content-center gap-3 mt-4 flex-wrap"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <span className="badge bg-primary px-3 py-2">Full Stack Development</span>
            <span className="badge bg-success px-3 py-2">Web Applications</span>
            <span className="badge bg-info text-dark px-3 py-2">Scalable Systems</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
