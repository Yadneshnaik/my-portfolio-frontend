import { motion } from "framer-motion";

export default function Projects() {
  const myProjects = [
    {
      title: "Amazon Clone",
      desc: "A fully functional Amazon Clone built using MERN Stack with user auth, cart, checkout."
    },
    {
      title: "Ecommerce Website",
      desc: "An Refurbished ecommerce website for refurbished products created using Laravel and MySQL with full CRUD and admin panel."
    }
  ];

  return (
    <section id="projects" className="container text-center">
      <h2>Projects</h2>

      <div className="row mt-4">
        {myProjects.map((p, i) => (
          <motion.div
            className="col-md-4 p-3"
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="card bg-dark text-white p-3 shadow">
              <h4>{p.title}</h4>
              <p>{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
