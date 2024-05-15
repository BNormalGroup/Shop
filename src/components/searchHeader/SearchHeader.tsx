import React, { useState } from "react";
import icon from "../../assets/searchIcon.png";
import { useStyles } from "./SearchHeaderStyle.ts";
import { Link, useNavigate } from "react-router-dom";
export const SearchHeader = () => {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      navigate("/searchproduct/" + searchTerm);
    }
  };

  return (
    <>
      <label htmlFor="copy-button" className={classes.Wrapper}>
        <input
          name="copy-button"
          className={classes.InputSearch}
          aria-label="copy-button"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} // Змінили onKeyPress на onKeyDown
        />
        <Link
          to={"/searchproduct/" + searchTerm}
          className={classes.IconWrapper}
        >
          <img src={icon} width="21px" height="21px" alt="Search icon" />
        </Link>
      </label>
    </>
  );
};
