import React, { useEffect} from 'react'
import {useQuery} from '@apollo/client'
import { useParams } from 'react-router-dom';
import { QUERY_POSTS } from '../utils/queries'

// 
// prop that is the name of the city we are in
// return function should query that city's posts (QUERY_POSTS) and return each of the posts information 

//example city of San Francisco
//will use useefffect and setstate

const posts = [
  {}
]

const City = (props) => {
    //const { cityName: cityParam } = useParams()
    const { loading, data } = useQuery(QUERY_POSTS
      , { variables: {cityName: "Sacramento"}}
      );
    //const posts = data?.post

    if (loading) {
        return (
            <div>Loading...</div>
        )
    }
    console.log(data)
    return (
        <div>
          <h3>
            
          </h3>
          pee
        </div>
      );
};
    

export default City

// {/* {posts &&
//             posts.map(post => (
//               <div key={post._id} className="card mb-3">
//                 <p className="card-header">
//                   <Link
//                     to={`/profile/${post.username}`}
//                     style={{ fontWeight: 700 }}
//                     className="text-light"
//                   >
//                     {post.username}
//                   </Link>{' '}
//                   post on {post.createdAt}
//                 </p>
//                 <div className="card-body">
//                   <Link to={`/post/${post._id}`}>
//                     <p>{post.postText}</p>
//                     <p className="mb-0">
//                       Replies: {post.replyCount} || Click to{' '}
//                       {post.replyCount ? 'see' : 'start'} the discussion!
//                     </p>
//                   </Link>
//                 </div>
//               </div> */}
//             {/* ))} */}


