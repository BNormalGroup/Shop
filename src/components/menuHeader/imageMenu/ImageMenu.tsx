import React from "react";
import useStyles from "./style.tsx";

export const ImageMenu = ({ image, text }: { image: string; text: string }) => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.wrapper}>
        <img className={classes.image} src={image} />
        <a className={classes.text}>{text}</a>
      </div>
    </>
  );
};
