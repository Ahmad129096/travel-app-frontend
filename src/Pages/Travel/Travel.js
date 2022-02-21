import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateTravel = () => {
  const [location, setLocation] = useState("");
  const [images, setImages] = useState("");
  const [costOfTravel, setCostOfTravel] = useState("");
  const [heritages, setHeritages] = useState("");
  const [placesToVisit, setPlacesToVisit] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    //const blog = { location, costOfTravel, heritages, placesToVisit };
    const fd = new FormData();
    fd.append("location", location)
    fd.append("costOfTravel",costOfTravel)
    fd.append("heritages",heritages)
    fd.append("placesToVisit",placesToVisit)
    for (const key of Object.keys(images)) {
      fd.append("images", images[key]);
    }
    fetch('http://localhost:4000/api/travel/', {
      method: 'POST',
      // headers: { "Content-Type": "multipart/form-data" },
      body: fd
    }).then(() => {
      // history.go(-1);
      navigate('/');
    })
  }
  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <label>Blog location:</label>
        <input
          type="text"
          required
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
        <label>cost of travel</label>
        <input
          required
          type="number"
          value={costOfTravel}
          onChange={(e) => setCostOfTravel(e.target.value)}
        />
        <label>Heritages</label>
        <input
          required
          value={heritages}
          onChange={(e) => setHeritages(e.target.value)}
        />
        <label>Places to visit</label>
        <input
          value={placesToVisit}
          onChange={(e) => setPlacesToVisit(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          //value={images}
          required
          onChange={(e) => setImages(e.target.files)}
          name="images"
          multiple
        />

        <button>Add Blog</button>
      </form>
    </div>
  );
};

export default CreateTravel;
