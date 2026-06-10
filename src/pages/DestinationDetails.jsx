import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function DestinationDetails() {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);

  useEffect(() => {
    getDestination();
  }, [id]);

  async function getDestination() {
    try {
      const response = await api.get(`/destinations/${id}`);
      setDestination(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  if (!destination) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="details">
      <img
        src={destination.image}
        alt={destination.name}
      />

      <h1>{destination.name}</h1>

      <p>{destination.description}</p>

      {destination.country && (
        <>
          <h3>Country</h3>
          <p>{destination.country}</p>
        </>
      )}

      {destination.category && (
        <>
          <h3>Category</h3>
          <p>{destination.category}</p>
        </>
      )}

      {destination.bestTimeToVisit && (
        <>
          <h3>Best Time To Visit</h3>
          <p>{destination.bestTimeToVisit}</p>
        </>
      )}

      {destination.duration && (
        <>
          <h3>Duration</h3>
          <p>{destination.duration}</p>
        </>
      )}

      {destination.weather && (
        <>
          <h3>Weather</h3>
          <p>{destination.weather}</p>
        </>
      )}

      {destination.language && (
        <>
          <h3>Language</h3>
          <p>{destination.language}</p>
        </>
      )}

      {destination.currency && (
        <>
          <h3>Currency</h3>
          <p>{destination.currency}</p>
        </>
      )}

      {destination.price && (
        <>
          <h3>Budget</h3>
          <p>₹ {destination.price}</p>
        </>
      )}

      {destination.rating && (
        <>
          <h3>Rating</h3>
          <p>⭐ {destination.rating}</p>
        </>
      )}

      {destination.famousFor && (
        <>
          <h3>Famous For</h3>
          <p>{destination.famousFor}</p>
        </>
      )}

      {destination.attractions?.length > 0 && (
        <>
          <h3>Top Attractions</h3>
          <ul>
            {destination.attractions.map((place, index) => (
              <li key={index}>{place}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default DestinationDetails;