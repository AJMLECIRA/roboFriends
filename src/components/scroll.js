import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "dashed 1px black",
        height: "500px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
