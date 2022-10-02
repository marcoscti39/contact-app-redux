import React from "react";
import { Link } from "react-router-dom";

import { StyledHeader } from "../styles/styledHeader";

export default function Header() {
  return (
    <StyledHeader>
      <div className="header-container">
        <Link to="/" className="header-text">
          React Redux Contact App
        </Link>
      </div>
    </StyledHeader>
  );
}
