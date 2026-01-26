import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="hero-section d-flex align-items-center">
      <motion.div className="bg-circle circle1" />
      <motion.div className="bg-circle circle2" />

      <div className="container text-center perspective">
        <motion.h1
          className="hero-title fw-bold"
          initial={{ rotateX: 40, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
        >
          Hi, I’m <span className="text-info">Yadnesh</span>
        </motion.h1>

        <p className="hero-desc mt-3">
          Full Stack Developer building modern & scalable web apps
        </p>
      </div>
    </section>
  );
}
