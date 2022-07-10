import React from "react";
import { useQuery } from "@apollo/client";
import { QUERY_CITIES } from "../utils/queries";

import CityList from "../components/CityList";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CITIES);

  const cities = data?.cities || [];

  return (
    <main>
      <div>
        {loading ? <div>Loading...</div> : <CityList cities={cities} />}
      </div>
    </main>
  );
};

export default Home;
