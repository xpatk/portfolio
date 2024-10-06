import React from "react";
import ProjectCard from "./ProjectCard";
import PreviousMap from "postcss/lib/previous-map";

const projectsData = [
  {
    id: 1,
    title: "Booki",
    description:
      "Intégration du contenu conformément à la maquette fournie, en utilisant HTML et CSS. Implémentation d'une interface responsive.",
    image: "images/1.PNG",
    tag: ["Tous", "Front-end"],
    gitUrl: "https://github.com/xpatk/Booki-P2",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Sophie Bluel",
    description:
      "Un site d'une architecte. Développement web avec JavaScript. Gestion des événements et des données utilisateurs via les formulaires.",
    image: "images/2.PNG",
    tag: ["Tous", "Front-end"],
    gitUrl: "https://github.com/xpatk/SophieBluel_P3",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Kasa",
    description:
      "Site de location. Développement des éléments d'interface du site grâce à des composants React. Navigation effectuée avec React Router.",
    image: "images/3.PNG",
    tag: ["Tous", "Front-end"],
    gitUrl: "https://github.com/xpatk/Kasa",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Mon Vieux Grimoire",
    description:
      "Développement back-end avec Node.js et Express.js. Modélisation logique des données et mise en œuvre des opérations CRUD de manière sécurisée. Stockage des données.",
    image: "images/4.PNG",
    tag: ["Tous", "Back-end"],
    gitUrl: "https://github.com/xpatk/Grimoir",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2 className="text-4xl font-bold text-white mb-4">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            tags={project.tags}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default ProjectsSection;
