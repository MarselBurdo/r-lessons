import React from "react";
// import Sidebar from "../Sidebar/Sidebar";
// import Main from "../Main/Main";
import { Container } from "./Wrapper.styles";
// import Task from "../Tasks/Task/Task";
import Order from "../Order/Order";
import FakeNews from "../FakeNews/FakeNews";
import { NavLink, Route, Switch } from "react-router-dom";
import "./style.css";
import NavSide from "../NavSide/NavSide";
import Notes from "../Notes/Notes";
import CountNewsRedux from "../FakeNews/CountNewsRedux";
import Shop from "../Shop/Shop";

const Wrapper = () => {
  return (
    <Container>
      {/* <Sidebar /> */}
      {/* <Main /> */}
      <div className={"navSide"}>
        <NavSide />
      </div>

      <div className="main-body">
        {/* <Switch>
          <Route path="/" exact>
            <CountNewsRedux />
          </Route>

          

          <Route path="/about">
            <Order />
          </Route>

          <Route path="/notes">
            <Notes />
          </Route>

          <Route>
            <h2>no Page</h2>
          </Route>
        </Switch> */}

        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/news">
            <FakeNews />
          </Route>
        </Switch>
      </div>
      {/* <Task /> */}
    </Container>
  );
};

export default Wrapper;
