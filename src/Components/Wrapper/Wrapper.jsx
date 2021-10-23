import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Main from "../Main/Main";
import { Container } from "./Wrapper.styles";
import Task from "../Tasks/Task/Task";

const Wrapper = () => {
  return (
    <Container>
      <Sidebar />
      {/* <Main /> */}

      <Task />
    </Container>
  );
};

export default Wrapper;
