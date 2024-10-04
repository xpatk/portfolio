import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
  {
    id: 1,
    title: "Booki",
    description:
      "Intégration du contenu conformément à la maquette fournie, en utilisant HTML et CSS. Implémentation d'une interface responsive.",
    image: "",
    tag: ["Tous", "Front-end"],
  },
  {
    id: 2,
    title: "Sophie Bluel",
    description:
      "Un site d'une architecte. Développement web avec JavaScript. Gestion des événements et des données utilisateurs via les formulaires.",
    image: "",
    tag: ["Tous", "Front-end"],
  },
  {
    id: 3,
    title: "Kasa",
    description:
      "Site de location. Développement des éléments d'interface du site grâce à des composants React. Navigation effectuée avec React Router.",
    image: "",
    tag: ["Tous", "Front-end"],
  },
  {
    id: 4,
    title: "Mon Vieux Grimoire",
    description:
      "Développement back-end avec Node.js et Express.js. Modélisation logique des données et mise en œuvre des opérations CRUD de manière sécurisée. Stockage des données.",
    image: "",
    tag: ["Tous", "Back-end"],
  },
];

const ProjectsSection = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div></div>
    </>
  );
};

export default ProjectsSection;