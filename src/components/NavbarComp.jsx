import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { useState } from "react";

export default function NavbarComp() {
  const [expanded, setExpanded] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
  ];

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom shadow-sm"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="container">
        {/* Brand */}
        <span className="navbar-brand fw-bold">
          Yadnesh<span className="text-info">Naik</span>
        </span>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setExpanded(!expanded)}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Nav Links */}
        <div className={`collapse navbar-collapse ${expanded ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-4 gap-2 mt-3 mt-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  activeClass="active-link"
                  className="nav-link px-3"
                  onClick={() => setExpanded(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
