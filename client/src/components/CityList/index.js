import React from "react";

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
              <h5 className="card-title">{city.name}</h5>
              <a href="#" className="card-link">
                View Posts
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CityList;