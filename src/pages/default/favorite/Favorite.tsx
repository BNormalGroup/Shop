import React from "react";
import { useStyles } from "./FavoriteStyle.ts";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";

const Favorite = () => {
  const classes = useStyles();

  return (
    <>
      <div className={`container ${classes.Container}`}>
        <div className={classes.Wrapper}>
        <div className={classes.BreadcrumbWrapper}>
          <Breadcrumb
            titles={[
              { name: "Home", url: "/" },
              {
                name: `My Favourites`,
                url: undefined,
              }
            ]}
          />
        </div>
        <div className={classes.Center}>
        <p className={classes.PageTitle}>My Favourites</p>
          <p className={classes.CountItems}>4 ITEMS</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default Favorite;
