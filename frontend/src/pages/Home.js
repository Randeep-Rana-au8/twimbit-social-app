import Card from "../components/Card";
import React, { useContext, useEffect } from "react";
import { UserContext } from "../App";

const Home = ({ history }) => {
  const arr = [1, 2, 3, 4, 5, 6];
  const { state, dispatch } = useContext(UserContext);
  const userInfo = state;

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  }, [userInfo]);
  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {arr.map((x) => (
        <Card />
      ))}
    </div>
  );
};

export default Home;
