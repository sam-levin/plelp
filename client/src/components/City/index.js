import React, { useEffect} from 'react'
import {useQuery} from '@apollo/client'
import { QUERY_POSTS } from '../../utils/queries'
import exp from 'constants'

function City(city) {
    if (!city.length) {
        return <h3>No Posts Yet! Maybe you can be the first</h3>
    }
    return (
        <div>
          <h3>{title}</h3>
          {posts &&
            posts.map(post => (
              <div key={post._id} className="card mb-3">
                <p className="card-header">
                  <Link
                    to={`/profile/${post.username}`}
                    style={{ fontWeight: 700 }}
                    className="text-light"
                  >
                    {post.username}
                  </Link>{' '}
                  post on {post.createdAt}
                </p>
                <div className="card-body">
                  <Link to={`/post/${post._id}`}>
                    <p>{post.postText}</p>
                    <p>{post.location}</p>
                    <p className="mb-0">
                      Replies: {post.replyCount} || Click to{' '}
                      {post.replyCount ? 'see' : 'start'} the discussion!
                    </p>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      );
};
    

export default City