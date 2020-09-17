import React from "react";

function Hero({ children, styleClass }) {
  return <div className={styleClass}>{children}</div>;
}

export default Hero;
