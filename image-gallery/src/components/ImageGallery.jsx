import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import ImageForm from "./ImageForm";
import "./ImageGallery.css";

function ImageGallery() {
  const initialImages = localStorage.getItem("images")
    ? JSON.parse(localStorage.getItem("images"))
    : [];
  const [images, setImages] = useState(initialImages);
  const [filteredImages, setFilteredImages] = useState([]);
  const [searchStr, setSearchStr] = useState("");

  useEffect(() => {
    localStorage.setItem("images", JSON.stringify(images));
  }, [images]);

  useEffect(() => {
    searchImage(searchStr);
  }, [searchStr]);

  const addImage = (image) => {
    setImages([...images, image]);
  };

  const deleteImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const editImage = (index, newDescription) => {
    const newImages = images.map((img, i) =>
      i === index ? { ...img, description: newDescription } : img
    );
    setImages(newImages);
  };

  const searchImage = (search) => {
    const newImages = images.filter((img) => img.description.includes(search));
    setFilteredImages(newImages);
  };

  console.log(images);

  return (
    <div className="image-gallery">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <ImageForm addImage={addImage} />
        <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
          <input
            style={{ width: "250px", height: "30px" }}
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchStr(e.target.value)}
          />
          <button style={{ height: "20px" }}>Search Image</button>
        </div>
      </div>
      <div className="image-grid">
        {searchStr.length > 0
          ? filteredImages.map((img, index) => (
              <ImageCard
                key={index}
                index={index}
                img={img}
                deleteImage={deleteImage}
                editImage={editImage}
              />
            ))
          : images.map((img, index) => (
              <ImageCard
                key={index}
                index={index}
                img={img}
                deleteImage={deleteImage}
                editImage={editImage}
              />
            ))}
      </div>
    </div>
  );
}

export default ImageGallery;
