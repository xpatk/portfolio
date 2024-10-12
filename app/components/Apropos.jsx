"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Front-End : HTML, CSS, JavaScript, React</li>
        <li>Back-End : Node.js, Express</li>
        <li>Bases de données : NoSQL</li>
        <li>Outils : Git, APIs REST</li>
        <li>En cours d&rsquo;apprentissage&nbsp;: PHP, SQL, Java</li>
        <li>Autres&nbsp;: Gestion de projet</li>
        <li>Je travaille aussi avec Wordpress</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>BAC +3/4 Développeur d&#39;applications - Java</li>
        <li>BAC +2 Développeur Web</li>
        <li>BAC +3 Indologie Université de Varsovie</li>
      </ul>
    ),
  },
  {
    title: "Prochaines",
    id: "prochaines",
    content: (
      <ul className="list-disc pl-2">
        <li>Java</li>
        <li>Spring Boot</li>
        <li>Microservices</li>
        <li>PHP</li>
        <li>UML</li>
        <li>Angular</li>
        <li>Python</li>
      </ul>
    ),
  },
];

const Apropos = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/compdraw.webp"
          width={500}
          height={500}
          alt="image of a computer"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">
            A propos de moi
          </h2>
          <p className="text-base lg:text-lg">
            Je suis développeuse web full-stack, passionnée par le développement
            d&rsquo;applications interactives et réactives. J&rsquo;ai de
            l&rsquo;expérience avec JavaScript, React, Node.js, Express, SQL,
            NoSQL, HTML, CSS, et Git. J&rsquo;aime relever des défis techniques
            et j&rsquo;apprends rapidement pour enrichir mes compétences.
            Travailler en équipe est une source de motivation, et je suis
            impatiente de collaborer sur des projets inspirants. Actuellement,
            je poursuis mes études avec une{" "}
            <strong>spécialisation en Java</strong> dans le cadre de mon
            parcours Bac+3/4.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Compétences
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Éducation
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("prochaines")}
              active={tab === "prochaines"}
            >
              Mes futurs défis
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
