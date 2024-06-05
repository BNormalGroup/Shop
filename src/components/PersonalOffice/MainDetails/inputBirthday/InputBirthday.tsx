import useStyles from "../style.tsx";
import React, { startTransition, useEffect, useState } from "react";

const InputBirthday = ({
  birthdayChange,
  birthday,
}: {
  birthday: string | undefined;
  birthdayChange: (birthday: string) => void;
}) => {
  const classes = useStyles();
  const [day, setDay] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [initializing, setInitializing] = useState<boolean>(true);

  useEffect(() => {
    if (!initializing && day && month && year) {
      birthdayChange(`${day}-${month}-${year}`);
    }
  }, [day, month, year, initializing]);

  useEffect(() => {
    const parts = birthday?.split("-");
    if (parts) {
      if (parts.length === 3) {
        setDay(parts[0]);
        setMonth(parts[1]);
        setYear(parts[2]);
      }
    }
    setInitializing(false);
  }, []);

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(`${day}-${month}-${year}`);
    setDay(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMonth(e.target.value);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };

  return (
    <div className={classes.inputContainer}>
      <label className={classes.inputLabel} htmlFor="email">
        Date Of Birthday
      </label>
      <div className={classes.inputRow}>
        <input
          className={classes.input}
          value={day}
          onChange={handleDayChange}
          min={0}
          max={31}
          id="day"
          type="number"
        ></input>
        <input
          className={classes.input}
          value={month}
          onChange={handleMonthChange}
          min={0}
          max={12}
          id="month"
          type="number"
        ></input>
        <input
          className={classes.input}
          value={year}
          onChange={handleYearChange}
          min={1900}
          max={2100}
          id="year"
          type="number"
        ></input>
      </div>
    </div>
  );
};

export default InputBirthday;
