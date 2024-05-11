import React from "react";
import useStyles from "./style.tsx";
import { Link } from "react-router-dom";

const ArrowBreadcrumb = () => {
  return (
    <>
      <svg
        width="5"
        height="9"
        viewBox="0 0 5 9"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 8L4.5 4.5L1 1"
          stroke="black"
          strokeWidth="0.5"
          strokeLinecap="round"
        />
      </svg>
    </>
  );
};

export const Breadcrumb = ({
  titles,
}: {
  titles: { name: string; url?: string }[];
}) => {
  const classes = useStyles();

  return (
    <ul className={classes.container}>
      {titles.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <div className={`${classes.point} ${classes.link}`}>
              <div className={classes.arrow}>
                <ArrowBreadcrumb />
              </div>
            </div>
          )}
          {item.url ? (
            <Link
              className={`${classes.link} ${
                index === titles.length - 1 ? classes.disabled : ""
              }`}
              to={item.url}
            >
              {item.name}
            </Link>
          ) : (
            <span
              className={`${classes.link} ${
                index === titles.length - 1 ? classes.disabled : ""
              }`}
            >
              {item.name}
            </span>
          )}
        </React.Fragment>
      ))}
    </ul>
  );
};
