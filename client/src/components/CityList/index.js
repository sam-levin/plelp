import React from "react";
import { Link } from "react-router-dom";

const CityList = ({ cities }) => {
  if (!cities.length) {
    return <h3>No Cities Yet</h3>;
  }

  return (
    <div>
      <h2>Cities</h2>
      {cities &&
        cities.map((city) => (
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">{city.cityName}</h4>
              <Link to={`/city/${city._id}`}>View Posts</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CityList;
