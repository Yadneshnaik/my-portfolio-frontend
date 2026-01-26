import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavbarComp() {
  const [expanded, setExpanded] = useState(false);

  const navItems = ["home", "about", "skills", "projects", "experience"];

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container">
        {/* Brand */}
        <span className="navbar-brand fw-bold">
          Yadneshnaik<span className="text-info">.</span>in
        </span>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className="nav-link"
                  to={item}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
