import React from "react";
import { useStyles } from "./SexImage.ts";
import { useTranslation } from "react-i18next";

export const SexImage = ({
  image,
  isButtonBlack,
}: {
  image: string;
  isButtonBlack: boolean;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div
        className={classes.imageDiv}
        style={{ backgroundImage: `url(${image})` }}
      >
        <button
          className={isButtonBlack ? classes.buttonBlack : classes.buttonWhite}
        >
          {t("newIn")}
        </button>
      </div>
    </>
  );
};
