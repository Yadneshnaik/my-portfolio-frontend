import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      className="footer-section mt-5"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="container py-5">
        <div className="row justify-content-center text-center">
          <div className="col-lg-6">
            <h5 className="fw-bold text-white mb-1">Yadnesh Naik</h5>
            <p className="text-muted mb-3">
              Software Developer • Full Stack Developer
            </p>

            <div className="footer-icons d-flex justify-content-center gap-3 mb-4">
              <a
                href="mailto:naikyadnesh9@gmail.com"
                aria-label="Email"
              >
                <FaEnvelope />
              </a>

              <a
                href="https://github.com/Yadneshnaik"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/yadnesh-naik-286a6b235/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://www.instagram.com/yadneshnaik_29/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>

              <a
                href="https://wa.me/918421767210"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="small text-muted mb-0">
              © {new Date().getFullYear()} Yadnesh Naik. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
