import React, { useState } from "react";
import { useStyles } from "./FavoriteStyle.ts";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";
import { IProductGet } from "../../../utils/types.ts";
import { FavoriteItem } from "../../../components/favoriteItem/FavoriteItem.tsx";

const Favorite = () => {
  const classes = useStyles();
  const [items, setItems] = useState<IProductGet[]>([]);


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
          <div className={classes.ItemsWrapper}>
            {items.map((product, key)=>{
              return <FavoriteItem product={product} key={key}/>
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default Favorite;
