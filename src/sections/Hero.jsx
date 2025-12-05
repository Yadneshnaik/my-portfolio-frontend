import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero position-relative">

      {/* Background Design Elements */}
      <motion.div
        className="bg-circle circle1"
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 12 }}
      />

      <motion.div
        className="bg-circle circle2"
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 10 }}
      />

      {/* RGBA Overlay */}
      <div className="overlay"></div>

      {/* Hero Content */}
      <motion.h1
        className="glow-text"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I'm Yadnesh 👋
      </motion.h1>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        Software Developer • Full Stack Developer
      </motion.h3>

      <motion.a
        href="#projects"
        className="btn btn-outline-info mt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        View My Work
      </motion.a>
    </section>
  );
}
