import React, { useEffect, useState } from "react";
import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { storage } from "../../lib/firebase";
import { ref as storageRef, getDownloadURL } from "firebase/storage";

const ProjectCard = ({ imgUrl, title, description, gitUrl }) => {
  const [downloadUrl, setDownloadUrl] = useState("");

  useEffect(() => {
    const imageRef = storageRef(storage, imgUrl);
    getDownloadURL(imageRef)
      .then((url) => {
        setDownloadUrl(url);
      })
      .catch((error) => {
        console.error("Error fetching image URL:", error);
      });
  }, [imgUrl]);

  return (
    <div className="relative group">
      <div
        className="h-72 md:h-92 rounded-t-xl relative"
        style={{
          background: `url(${downloadUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          <Link href={gitUrl}>
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE]" />
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
