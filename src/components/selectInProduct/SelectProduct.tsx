import { createUseStyles } from "react-jss";
import React from "react";

//@todo image in option
export const SelectProduct = ({ content }: { content: React.ReactNode[] }) => {
  const classes = useStyles();

  return (
    <>
      <select className={classes.select}>
        {content.map((item, index) => (
          <option className={classes.option} key={index}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
};

const useStyles = createUseStyles({
  select: {
    appearance: "none",
    WebkitAppearance: "none",
    MozAppearance: "none",
    width: "422px",
    height: "40px",
    fontWeight: "400",
    fontSize: "16px",

    paddingLeft: "11px",
    paddingRight: "24px",
    color: "black",
    fontFamily: "Source Serif Pro",
    lineHeight: "20.05px",
    border: "1px solid black",
    backgroundColor: "#F5F5F5",
    borderRadius: "0",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='9' height='6' viewBox='0 0 9 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L4.5 4.5L8 1' stroke='black'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "right 8px center",
    "&:focus": {
      outline: "none",
      backgroundImage: `url("data:image/svg+xml,%3Csvg width='9' height='5' viewBox='0 0 9 5' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 4.5L4.5 1L8 4.5' stroke='black'/%3E%3C/svg%3E")`,
    },
  },
  option: {
    borderRadius: 0,
    height: "40px",
    border: 0,
  },
});
