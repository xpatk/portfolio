"use client";
import { useState, useEffect } from "react";
import { database, ref, get } from "../lib/firebase";

const useFetchProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const snapshot = await get(ref(database, "/"));
        if (snapshot.exists()) {
          const data = snapshot.val();

          const projectsArray = Object.values(data);
          console.log("Fetched Projects:", projectsArray);
          setProjects(projectsArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading };
};

export default useFetchProjects;
