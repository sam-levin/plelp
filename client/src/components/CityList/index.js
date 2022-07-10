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
          <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">{city.cityName}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{`${city.posts.length} Posts`}</h6>
              <a href="#" class="card-link">
                View Posts
              </a>
            </div>
          </div>
        ))}
    </div>
  );
};

export default CityList;