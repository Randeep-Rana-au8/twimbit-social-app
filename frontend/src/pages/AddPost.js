import { Button } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";

const AddPost = ({ history }) => {
  const { state, dispatch } = useContext(UserContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${state.token}`,
      },
    };

    const { data } = await axios.post(
      "/api/posts",
      {
        title,
        description,
        image,
      },
      config
    );

    console.log(data);
  };

  useEffect(() => {
    if (!state) {
      history.push("/login");
    }
  }, [state]);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "50px",
      }}
    >
      <h1>Create A Post</h1>
      <input
        type="text"
        name="title"
        placeholder="Enter Title"
        style={{ width: "300px", margin: "5px", padding: "10px" }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="textArea"
        name="description"
        placeholder="Enter Description"
        style={{ width: "300px", margin: "5px", padding: "10px" }}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="textArea"
        name="description"
        placeholder="Enter Image URL"
        style={{ width: "300px", margin: "5px", padding: "10px" }}
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />

      <button style={{ width: "100px", padding: "10px 20px", marginTop: "10px" }}>Add</button>
    </form>
  );
};

export default AddPost;
