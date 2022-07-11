import React from "react";
import { useParams } from "react-router-dom";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_CITY } from "../utils/queries";

import PostForm from "../components/PostForm";

import PostList from "../components/PostList";
import PostForm from "../components/PostForm";

const City = (props) => {
  const { id: cityId } = useParams();

  const { loading, data } = useQuery(QUERY_CITY, {
    variables: { id: cityId },
  });

  const city = data?.city || [];
  const loggedIn = Auth.loggedIn();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{city.cityName}</h2>
      {loggedIn && (
        <div>
          <PostForm cityId={city._id} />
        </div>
      )}
      <PostList posts={city.posts} />
    </div>
  );
};

export default City;