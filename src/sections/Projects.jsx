import { motion } from "framer-motion";

export default function Projects() {
  const myProjects = [
    {
      title: "Amazon Clone",
      tech: "MERN Stack",
      desc: "A full-featured Amazon clone with authentication, product listing, cart management, and checkout flow.",
    },
    {
      title: "Refurbished Ecommerce Website",
      tech: "Laravel • MySQL",
      desc: "Ecommerce platform for refurbished products with admin panel, CRUD operations, and order management.",
    },
  ];

  return (
    <section id="projects" className="container py-5">
      <h2 className="text-center fw-bold mb-3">Projects</h2>
      <p className="text-center text-muted mb-5">
        Some of the real-world applications I’ve built using modern technologies
      </p>

      <div className="row g-4 justify-content-center">
        {myProjects.map((p, i) => (
          <motion.div
            className="col-lg-4 col-md-6"
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="card project-card h-100">
              <div className="card-body d-flex flex-column">
                <span className="badge bg-primary mb-3 align-self-start">
                  {p.tech}
                </span>

                <h5 className="card-title fw-semibold">{p.title}</h5>
                <p className="card-text text flex-grow-1">
                  {p.desc}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
