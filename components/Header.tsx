import React from "react";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";

const Header = () => {
  return (
    <header>
      {/* Primary Nav */}
      <PrimaryNav />
      {/* Secondary Nav */}
      <SecondaryNav />
    </header>
  );
};

export default Header;
