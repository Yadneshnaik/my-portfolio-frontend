import { Link } from "react-scroll";
import { motion } from "framer-motion";

export default function NavbarComp() {
  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark fixed-top navbar-custom px-3"
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <a className="navbar-brand fw-bold" href="#">Portfolio</a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="nav">
        <ul className="navbar-nav ms-auto">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li className="nav-item mx-2" key={item}>
              <Link
                className="nav-link"
                to={item}
                spy={true}
                smooth={true}
                duration={500}
              >
                {item.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
