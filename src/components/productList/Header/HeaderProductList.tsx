import React from "react";
import useStyles from "./style.tsx";
import { Breadcrumb } from "../../Breadcrumb/Breadcrumb.tsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export const HeaderProductList = ({
  title,
  description,
}: {
  description: string;
  title: string;
}) => {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <>
      <div className={`${classes.containerHead}`}>
        <div className={`container ${classes.container}`}>
          <div className={classes.breadcrumb}>
            <Breadcrumb
              titles={[
                { name: `${t('Home')}`, url: "/" },
                { name: "Women", url: "/men" },
                { name: "Dresses", url: "/men/dresses" },
              ]}
            ></Breadcrumb>
          </div>
          <div className={classes.containerHeader}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
          </div>
          <div className={`${classes.titleNav}`}>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Maxi Dresses
            </Link>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Midi Dresses
            </Link>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Midi Dresses
            </Link>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Midi Dresses
            </Link>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Midi Dresses Midi Dresses
            </Link>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Midi Dresses
            </Link>
            <Link to={"#"} className={`${classes.titleButton}`}>
              Midi Dresses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
