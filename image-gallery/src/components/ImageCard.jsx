import React, { useState } from "react";

function ImageCard({ index, img, deleteImage, editImage }) {
  const [isEditing, setIsEditing] = useState(false);
  const [description, setDescription] = useState(img.description);

  const handleEdit = () => {
    editImage(index, description);
    setIsEditing(false);
  };

  return (
    <div className="image-card">
      <img src={img.url} alt={img.description} />
      {isEditing ? (
        <div>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <p>{img.description}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button onClick={() => deleteImage(index)}>Delete</button>
    </div>
  );
}

export default ImageCard;
