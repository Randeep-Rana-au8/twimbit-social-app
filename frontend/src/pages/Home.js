import Card from "../components/Card";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";

const Home = ({ history }) => {
  const { state, dispatch } = useContext(UserContext);
  const [allPosts, setAllPosts] = useState([]);
  const userInfo = state;

  useEffect(async () => {
    console.log(userInfo);
    if (!userInfo) {
      history.push("/login");
    }
    console.log(userInfo);
    if (userInfo) {
      console.log(userInfo);
      const config = {
        headers: {
          Authorization: `Bearer ${state.token}`,
        },
      };
      const { data } = await axios.get("https://twimbit-backend.herokuapp.com/api/posts", config);
      setAllPosts(data);
    }
  }, [userInfo]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {allPosts.map((post) => (
        <Card
          title={post.title}
          description={post.description}
          image={post.image}
          user={post.user}
          date={post.createdAt}
        />
      ))}
    </div>
  );
};

export default Home;
