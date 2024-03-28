import React from "react";
import { useStyles } from "./LanguageSwitcherStyle.ts";
import i18n from "i18next";

export const LanguageSwitcher = () => {
  const classes = useStyles();
  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <>
      <select
        name="language"
        id="language"
        className={classes.select}
        onChange={handleLanguageChange}
      >
        <option value="eng">ENG</option>
        <option value="uk">UA</option>
      </select>
    </>
  );
};
