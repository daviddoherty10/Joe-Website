"use server";

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
  const imageSrc: any = async function fetchData() {
    const exampleParams: ImageTypes = {
      collectionId: "hero_section",
      recordId: "0zvdbiapi4dsdpq",
      fileName: "hero_hnCqXU7wh3.png",
      size: "0x0",
    };

    try {
      const imageUrl = await getImageSrc(exampleParams);
      return imageUrl;
    } catch (error) {
      // Handle errors if needed
      console.error("Error fetching image:", error);
    }
  };

  // Run once on component mount

  return (
    <>
      <div>
      </div>
    </>
  );
};

export default Hero;
