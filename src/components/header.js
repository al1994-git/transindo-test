import React from "react";

function Header() {
  const imgHeader = `${process.env.PUBLIC_URL}/images/bg-header-desktop.svg`;
  return (
    <div
      className="header-custom"
      style={{
        backgroundImage: `url(${imgHeader})`,
      }}
    ></div>
  );
}

export default Header;
