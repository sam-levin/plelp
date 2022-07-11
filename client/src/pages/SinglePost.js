import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import { QUERY_CITY_POST } from '../utils/queries';

const SinglePost = (props) => {
  const { id: cityId } = useParams();

  const { loading, data } = useQuery(QUERY_CITY_POST, {
    variables: { id: cityId },
  });

  const city = data?.city || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="card mb-3">
        <p className="card-header">
          <span style={{ fontWeight: 700 }} className="text-light">
            {city.username}
          </span>{' '}
          thought on {city.createdAt}
        </p>
        <div className="card-body">
          <p>{city.postText}</p>
        </div>
      </div>

    </div>
  );
};

export default SinglePost;
