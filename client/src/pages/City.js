import React from "react";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";
import { QUERY_CITY } from "../utils/queries";

import PostList from "../components/PostList";

const City = (props) => {
  const { id: cityId } = useParams();

  const { loading, data } = useQuery(QUERY_CITY, {
    variables: { id: cityId },
  });

  const city = data?.city || [];

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(city);

  return (
    <div>
      <h2>{city.cityName}</h2>
      <PostList posts={city.posts} />
    </div>
  );
};

export default City;
