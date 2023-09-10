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
    <div className="w-full max-w-md mx-auto text-center">
      {/* Label element containing input and icon */}
      <label className="flex flex-col items-center justify-center h-40 p-4 border-2 border-gray-300 border-dashed rounded-md cursor-pointer file-input-label">
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageChange}
          className="hidden"
        />
        <div className="flex flex-col items-center justify-center h-full">
          <img
            src="/images/uploadImg/addPhoto.png"
            alt="Choose File"
            className="w-12 h-12 mb-2 file-input-icon"
          />
          <span className="text-lg">Choose a photo</span>
        </div>
      </label>

      {/* Display the selected images (if any) */}
      <div className="mt-4">
        {selectedImages.map((image, index) => (
          <div key={index} className="mb-4 image-preview">
            <img
              src={URL.createObjectURL(image)}
              alt={`Selected ${index + 1}`}
              className="w-full h-auto rounded-md"
            />
            <button
              onClick={() => removeImage(index)}
              className="px-4 py-2 mt-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageUpload;
