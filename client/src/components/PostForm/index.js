import React, { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";

const PostForm = (props) => {
  const [formState, setFormState] = useState({
    title: "",
    postText: "",
    location: "",
    cityId: props.cityId,
  });
  const [addPost, { error }] = useMutation(ADD_POST);

  const handleChange = (event) => {
    const { name, value } = event.target;

    // update state based on form input changes
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubit = async (event) => {
    event.preventDefault();

    try {
      console.log(formState);
      await addPost({
        variables: { ...formState },
      });
      console.log('post successful')
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleFormSubit}>
        <div className="form-group">
          <label for="title">Post Title</label>
          <input
            className="form-control"
            placeholder="Post title"
            name="title"
            type="title"
            id="title"
            value={formState.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="postText">Post Description</label>
          <input
            className="form-control"
            placeholder="Post description"
            name="postText"
            type="postText"
            id="postText"
            value={formState.postText}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label for="location">Location</label>
          <input
            className="form-control"
            placeholder="Location"
            name="location"
            type="location"
            id="location"
            value={formState.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Create Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
