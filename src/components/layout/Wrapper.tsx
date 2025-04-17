import { ReactNode } from "react";
import classes from "./Wrapper.module.css";

const Wrapper = (props: { children: ReactNode; className?: string }) => {
  return (
    <div className={`${classes.Wrapper} ${props.className || ""}`}>
      {props.children}
    </div>
  );
};

export default Wrapper;
