import React, { useState } from 'react';

function ImageUpload() {
  // State to store the selected images (an array of files)
  const [selectedImages, setSelectedImages] = useState([]);

  // Function to handle file selection
  const handleImageChange = (e) => {
    const files = e.target.files;
    setSelectedImages([...selectedImages, ...files]);
  };

  // Function to remove an image from the selected images
  const removeImage = (index) => {
    const newImages = [...selectedImages];
    newImages.splice(index, 1);
    setSelectedImages(newImages);
  };

  return (
    <div>
      {/* Label element containing input and icon */}
      <label className="file-input-label">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden" // Hide the actual input field
        />
        <img
          src="/images/uploadImg/addPhoto.png" // Replace with the actual path to your PNG image
          alt="Choose File"
          className="file-input-icon"
        />
      </label>

      {/* Display the selected images (if any) */}
      <div>
        {selectedImages.map((image, index) => (
          <div key={index} className="image-preview">
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              style={{ maxWidth: '100%', maxHeight: '200px' }}
            />
            <button onClick={() => removeImage(index)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
