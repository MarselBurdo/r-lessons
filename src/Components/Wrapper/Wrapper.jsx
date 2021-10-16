import { Content } from "../Content/Content";
import { Debug } from "../Debug/Debug";
import { Sidebar } from "../Sidebar/Sidebar";
import { CustomWrapper } from "./Wrapper.styled";

export const Wrapper = () => {
  // const isView = false
  return (
    <>
      <CustomWrapper>
        <Sidebar />
        <Content />
      </CustomWrapper>
    </>
  );
};
