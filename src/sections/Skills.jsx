import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaGitAlt,
  FaWordpress,
  FaPhp,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiPython, SiFigma, SiPostman, SiLaravel } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
  { name: "CSS", icon: <FaCss3Alt />, color: "#1572B6" },
  { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "MySQL", icon: <SiMysql />, color: "#00758F" },
  { name: "Python", icon: <SiPython />, color: "#3776AB" },
  { name: "Figma", icon: <SiFigma />, color: "#F24E1E" },
  { name: "Photoshop", icon: "Ps", color: "#31A8FF" },
  { name: "Git", icon: <FaGitAlt />, color: "#f34f29" },
  { name: "Postman", icon: <SiPostman />, color: "#FF6C37" },
  { name: "Laravel", icon: <SiLaravel />, color: "#FF2D20" },
  { name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
  { name: "PHP", icon: <FaPhp />, color: "#777BB4" },
  { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952B3" },
];

export default function Skills() {
  return (
    <section id="skills" className="container py-5">
      <h2 className="text-center fw-bold mb-4">Technical Skills</h2>
      <p className="text-center text-muted mb-5">
        Technologies & tools I use to build modern, scalable applications
      </p>

      <div className="row g-4">
        {skills.map((skill, i) => (
          <motion.div
            className="col-xl-3 col-lg-4 col-md-6 col-6"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.08, rotateX: 6, rotateY: -6 }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            viewport={{ once: true }}
          >
            <div className="skill-card text-center h-100">
              <div
                className="skill-icon mx-auto mb-3"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>
              <h6 className="fw-semibold">{skill.name}</h6>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
