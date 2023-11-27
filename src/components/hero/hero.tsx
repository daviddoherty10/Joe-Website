"use client";

import React, { useState, useEffect } from "react";
import "./hero.css";

interface ImageTypes {
  collectionId: string;
  recordId: string;
  fileName: string;
  size: string;
}

async function getImageSrc({
  collectionId,
  recordId,
  fileName,
  size = "0x0",
}: ImageTypes) {
  return `http://127.0.0.1:8090/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
}

const Hero: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const exampleParams: ImageTypes = {
        collectionId: "hero_section",
        recordId: "0zvdbiapi4dsdpq",
        fileName: "hero_hnCqXU7wh3.png",
        size: "0x0",
      };

      try {
        const imageUrl = await getImageSrc(exampleParams);
        setImageSrc(imageUrl);
      } catch (error) {
        // Handle errors if needed
        console.error("Error fetching image:", error);
      }
    };

    fetchData();
  }, []); // Run once on component mount

  return (
    <>
      <div>
        {/* Use imageSrc after it resolves */}
        <img src={imageSrc || undefined} alt="" />
      </div>
    </>
  );
};

export default Hero;
