import { useEffect, useState } from "react";
import api from "../services/api";
import DestinationCard from "../components/DestinationCard";
import { Link } from "react-router-dom";

function Destinations() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sort, setSort] = useState("");

  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations();
  }, []);

  async function getDestinations() {
    try {
      const response = await api.get("/destinations");
      setDestinations(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteDestination(id) {
    try {
      await api.delete(`/destinations/${id}`);

      setDestinations((prevDestinations) =>
        prevDestinations.filter(
          (destination) => destination.id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  const filteredDestinations = destinations.filter(
    (destination) => {
      const searchMatch =
        search === "" ||
        destination.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const categoryMatch =
        category === "All"
          ? true
          : destination.category === category;

      const budgetMatch =
        budget === "All"
          ? true
          : destination.budget === budget;

      return (
        searchMatch &&
        categoryMatch &&
        budgetMatch
      );
    }
  );

  let finalDestinations = [...filteredDestinations];

  if (sort === "high") {
    finalDestinations.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "low") {
    finalDestinations.sort(
      (a, b) => a.rating - b.rating
    );
  }

  return (
    <>
      <Link
        to="/add-destination"
        className="add-btn"
      >
        Add Destination
      </Link>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Destination"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          <option value="All">
            All Types
          </option>
          <option value="Beach">
            Beach
          </option>
          <option value="Hill Station">
            Hill Station
          </option>
          <option value="Adventure">
            Adventure
          </option>
          <option value="Nature">
            Nature
          </option>
          <option value="Historical">
            Historical
          </option>
          <option value="Island">
            Island
          </option>
          <option value="Spiritual">
            Spiritual
          </option>
        </select>

        <select
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
        >
          <option value="All">
            All Budgets
          </option>
          <option value="Low">
            Low
          </option>
          <option value="Medium">
            Medium
          </option>
          <option value="High">
            High
          </option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Sort Rating
          </option>
          <option value="high">
            High To Low
          </option>
          <option value="low">
            Low To High
          </option>
        </select>
      </div>

      <h1>Popular Destinations</h1>

      <div className="destinations">
        {finalDestinations.length > 0 ? (
          finalDestinations.map(
            (destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onDelete={
                  deleteDestination
                }
              />
            )
          )
        ) : (
          <h2>No destinations found</h2>
        )}
      </div>
    </>
  );
}

export default Destinations;
