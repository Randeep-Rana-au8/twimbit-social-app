import React, { createContext, useContext, useEffect, useReducer } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import { useHistory, Route, Switch } from "react-router-dom";
import { reducer, initialState } from "./reducers/userReducer";
import AddPost from "./pages/AddPost";

export const UserContext = createContext();
export const PostContext = createContext();

const Routing = () => {
  const history = useHistory();
  const { state, dispatch } = useContext(UserContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    }
  }, []);

  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={SignIn} />
      <Route exact path="/register" component={Signup} />
      <Route exact path="/addpost" component={AddPost} />
    </Switch>
  );
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <Routing />
      </div>
    </UserContext.Provider>
  );
}

export default App;
