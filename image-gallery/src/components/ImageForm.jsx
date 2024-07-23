import React, { useState } from "react";

function ImageForm({ addImage }) {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        addImage({ url: reader.result, description });
        setFile(null);
        setDescription("");
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <form className="image-form" onSubmit={handleSubmit}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Image</button>
    </form>
  );
}

export default ImageForm;
