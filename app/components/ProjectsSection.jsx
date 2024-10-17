"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import useFetchProjects from "../useFetchProjects";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const { projects, loading } = useFetchProjects();
  const [tag, setTag] = useState("Tous");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projects.filter(
    (project) => tag === "Tous" || project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  if (loading) {
    return <p className="text-white">Chargement...</p>;
  }

  return (
    <section id="projets">
      <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tous"
          isSelected={tag === "Tous"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Front-end"
          isSelected={tag === "Front-end"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Back-end"
          isSelected={tag === "Back-end"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.length === 0 ? (
          <p className="text-white">Chargement..</p>
        ) : (
          filteredProjects.map((project, index) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              initial="initial"
              animate="animate"
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
              />
            </motion.li>
          ))
        )}
      </ul>
    </section>
  );
};

export default ProjectsSection;
