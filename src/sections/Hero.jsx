import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="hero-section d-flex align-items-center position-relative"
    >
      {/* Background Motion Elements */}
      <motion.div
        className="bg-circle circle1"
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 40, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
      />

      <motion.div
        className="bg-circle circle2"
        animate={{ x: [0, -50, 50, 0], y: [0, 50, -50, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
      />

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="container position-relative">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8">
            <motion.h1
              className="hero-title fw-bold mb-3"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Hi, I’m <span className="text-info">Yadnesh</span>
            </motion.h1>

            <motion.h5
              className="hero-subtitle text-muted mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Software Developer • Full Stack Developer
            </motion.h5>

            <motion.p
              className="hero-desc mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              I build scalable, high-performance web applications using modern
              technologies with a focus on clean design and efficient code.
            </motion.p>

          </div>
        </div>
      </div>
    </section>
  );
}
