import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container text-center">
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="mt-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        I am a passionate Software Developer and Full Stack Developer
        who builds modern, amazing and scalable digital solutions using
        React, Node.js, MongoDB, MySQL, and more.
      </motion.p>
    </section>
  );
}
