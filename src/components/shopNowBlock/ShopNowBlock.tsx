import React from "react";
import { useStyles } from "./ShopNowBlockStyle.ts";
import { useTranslation } from "react-i18next";
import { RoundaboutClothing } from "../roundaboutClothing/RoundaboutClothing.tsx";
import { ItemCategory } from "../ItemCategory/ItemCategory.tsx";
import { SexCategoryItems } from "../../utils/types.ts";

export const ShopNowBlock = ({
  images,
  categories,
}: {
  images: string[];
  categories: SexCategoryItems[];
}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.carouselWrapper}>
          <a className={classes.text}>{t("shopNow")}</a>
        </div>
        <RoundaboutClothing images={images} />
      </div>
      <div className={classes.categoryItemWrapper}>
        <div className={classes.gridContainer}>
          {categories.map((item, key) => {
            return <ItemCategory image={item.image} text={item.name} key={key}/>;
          })}
        </div>
      </div>
    </>
  );
};
