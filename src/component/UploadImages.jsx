import { CircularProgress } from "@mui/material";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadImages() {
    const [photo, setPhoto] = useState([]);
    const [loading, setLoading] = useState(false);
    const handleDrop = (acceptedFiles) => {
        setPhoto((prev) => [...prev, ...acceptedFiles].slice(0, 10)); // Limit to 10 files
      };
      
      const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop: handleDrop,
        accept: {
          'image/jpeg': [],
          'image/png': [],
          'image/gif': []
        },
        multiple: true,
      });
      if (photo.length > 10) {
        Swal.fire({
          icon: 'error',
          title: 'Maximum Images Required',
          text: 'Please upload at least 10 images.',
        });
        setLoading(false);
        return;
      }
      
      const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true); 
        console.log({
          photo
        });

    const uploadImages = []
  for(const image of photo){
    const data = new FormData();
    data.append("file", image );
    data.append('upload_preset', 'olx-classified-post');
    data.append("cloud_name", 'dxasj3tdl');

    const res = await fetch('https://api.cloudinary.com/v1_1/djmfadch8/image/upload', {
      method: "POST",
      body: data
    });
    if (!res.ok) {
        const error = await res.json();
        console.error('Error uploading image:', error);
        setLoading(false); 
        return;
      }
  
      const uploadImgurl = await res.json();
      uploadImages.push(uploadImgurl.url)
      console.log(uploadImgurl.url);
  
      if (!photo) return;
      const formData = new FormData();
      formData.append("image", uploadImages);  
      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });
  
        if (!response.ok) {
          // If response is not okay, log the response body to understand the error
          const errorResponse = await response.json(); 
          console.error("Upload failed: ", errorResponse);
          alert("Upload failed! Check console for details.");
          return;
        }
  
        // If the response is okay, try to parse the JSON
        const data = await response.json();
        console.log("Image URL:", data.imageUrl); // Handle the response data
        alert("Image uploaded successfully!");
      } catch (error) {
        console.error("Upload failed:", error);
        alert("An error occurred while uploading.");
      }
    }
}

return(
    <div>
        <div
  {...getRootProps()}
  className={`border-2 border-dashed rounded-lg p-6 text-center ${
    isDragActive ? 'bg-gray-200' : 'bg-gray-100'
  }`}
>
  <input {...getInputProps()} />
  {isDragActive ? (
    <p>Drop the files here...</p>
  ) : (
    <p>Drag and drop images here, or click to select (max 10 images).</p>
  )}
</div>
<div className="mt-4 grid grid-cols-3 gap-4">
  {photo.length > 0 &&
    photo.map((file, index) => (
      <img
        key={index}
        src={URL.createObjectURL(file)}
        alt={`Selected ${index}`}
        className="w-full h-32 object-cover rounded-lg"
      />
    ))}
</div>
<div className="text-center">
            <button 
             onClick={handleSubmit}
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className="w-full py-3"
              disabled={loading} 
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" /> 
              ) : (
                'Submit'
              )}
            </button>
          </div>
    </div>
)

    //   const [file, setFile] = useState(null);
//   const [userId, setUserId] = useState("user_id"); // Replace with the actual user ID

//   const handleFileChange = (event) => {
//     setFile(event.target.files[0]); // Get the selected file
//   };

//   const handleImageUpload = async () => {
//     if (!file) {
//       alert("Please select a file first!");
//       return;
//     }

    // const formData = new FormData();
    // formData.append("image", file);
    // formData.append("userId", userId);

    // try {
    //   const response = await fetch("http://localhost:5000/upload", {
    //     method: "POST",
    //     body: formData,
    //   });

    //   if (!response.ok) {
    //     // If response is not okay, log the response body to understand the error
    //     const errorResponse = await response.json(); 
    //     console.error("Upload failed: ", errorResponse);
    //     alert("Upload failed! Check console for details.");
    //     return;
    //   }

    //   // If the response is okay, try to parse the JSON
    //   const data = await response.json();
    //   console.log("Image URL:", data.imageUrl); // Handle the response data
    //   alert("Image uploaded successfully!");
    // } catch (error) {
    //   console.error("Upload failed:", error);
    //   alert("An error occurred while uploading.");
    // }
//   };

//   return (
//     <div className="center text-2xl">
//       <input
//         type="file"
//         accept="image/*"
//         onChange={handleFileChange}
//         className="mb-4"
//       />
//       <button
//         onClick={handleImageUpload}
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
//       >
//         Upload
//       </button>
//     </div>
//   );

}
