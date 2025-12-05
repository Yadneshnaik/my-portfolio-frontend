import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="footer-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="container text-center py-4">
        <h5 className="footer-title">Yadnesh Naik</h5>

        <div className="footer-icons mt-3">
          <a href="mailto:naikyadnesh9@gmail.com">
            <FaEnvelope />
          </a>

          <a href="https://github.com/Yadneshnaik" target="_blank">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/" target="_blank">
            <FaLinkedin />
          </a>

          <a href="https://www.instagram.com/yadneshnaik_29/" target="_blank">
            <FaInstagram />
          </a>
        </div>

        <p className="mt-3 copyright">
          © {new Date().getFullYear()} Yadnesh Naik — All Rights Reserved.
        </p>
      </div>
    </motion.footer>
  );
}
