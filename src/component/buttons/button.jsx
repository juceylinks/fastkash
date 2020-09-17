import React from "react";

function Buttons({ children, styleClass }) {
  return <div className={styleClass}>{children}</div>;
}

export default Buttons;
