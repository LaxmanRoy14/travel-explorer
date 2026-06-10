import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

function EditDestination() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    country: "",
    image: "",
    description: ""
  });

  useEffect(() => {
    getDestination();
  }, [id]);

  async function getDestination() {
    try {
      const response = await api.get(`/destinations/${id}`);
      setFormData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.put(`/destinations/${id}`, formData);
      navigate("/destinations");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="form-container">
      <h2>Edit Destination</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Destination Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="country"
          placeholder="Country"
          value={formData.country}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="5"
          required
        />

        <button className="submit-btn">
          Update Destination
        </button>
      </form>
    </div>
  );
}

export default EditDestination;