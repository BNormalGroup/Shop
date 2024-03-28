import React from "react";
import icon from "../../assets/searchIcon.png";
import { useStyles } from "./SearchHeaderStyle.ts";

export const SearchHeader = () => {
  const classes = useStyles();
  return (
    <>
      <label htmlFor="copy-button" className={classes.Wrapper}>
        <input
          name="copy-button"
          className={classes.InputSearch}
          aria-label="copy-button"
        />
        <div className={classes.IconWrapper}>
          <img src={icon} width="21px" height="21 px" />
        </div>
      </label>
    </>
  );
};
