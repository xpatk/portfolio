"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import useFetchProjects from "../useFetchProjects";

const ProjectsSection = () => {
  const { projects, loading } = useFetchProjects();
  const [tag, setTag] = useState("Tous");
  const ref = useRef(null);

  const handleTagChange = (newTag) => setTag(newTag);

  const filteredProjects = projects.filter(
    (project) => tag === "Tous" || project.tag.includes(tag)
  );

  if (loading) {
    return <p className="text-white">Loading...</p>;
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
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
