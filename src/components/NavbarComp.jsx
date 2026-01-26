import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavbarComp() {
  const [expanded, setExpanded] = useState(false);
  const navItems = ["home", "about", "skills", "projects", "experience"];

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
    >
      <div className="container">
        <span className="navbar-brand fw-bold">
          Yadneshnaik<span className="text-info">.</span>in
        </span>

        <button
          className="navbar-toggler"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto gap-3">
            {navItems.map((item) => (
              <li className="nav-item" key={item}>
                <Link
                  className="nav-link"
                  to={item}
                  smooth
                  offset={-80}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  {item.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
