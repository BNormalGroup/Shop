import React, { useEffect, useState } from "react";
import { useStyles } from "./FavoriteStyle.ts";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";
import { IProductGet } from "../../../utils/types.ts";
import { FavoriteItem } from "../../../components/favoriteItem/FavoriteItem.tsx";
import { shallowEqual, useSelector } from "react-redux";
import { RootState } from "../../../app/store.ts";
import { GetLikesService } from "../../../services/favoriteService.ts";
import { useTranslation } from "react-i18next";

const Favorite = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [items, setItems] = useState<IProductGet[]>([]);
  const user = useSelector(
    (state: RootState) => state.users.user,
    shallowEqual,
  );

  useEffect(() => {
    const fetchData = async () => {
      const data = await GetLikesService(user.id);
      if (data) setItems(data);
    };

    fetchData();
  }, [user.id]);

  return (
    <>
      <div className={`container ${classes.Container}`}>
        <div className={classes.Wrapper}>
          <div className={classes.BreadcrumbWrapper}>
            <Breadcrumb
              titles={[
                { name: `${t("Home")}`, url: "/" },
                {
                  name: `My Favourites`,
                  url: undefined,
                },
              ]}
            />
          </div>
          <div className={classes.Center}>
            <p className={classes.PageTitle}>My Favourites</p>
            <p className={classes.CountItems}>{items.length} ITEMS</p>
          </div>
          <div className={classes.ItemsWrapper}>
            {items &&
              items.map((product, key) => {
                return <FavoriteItem product={product} key={key} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
