import React from "react";
import { useStyles } from "./ShopNowBlockStyle.ts";
import { useTranslation } from "react-i18next";
import { RoundaboutClothing } from "../roundaboutClothing/RoundaboutClothing.tsx";
import { ItemCategory } from "../ItemCategory/ItemCategory.tsx";
import DressesImage from "../../assets/itemCategoryWoman/Dresses.png";
import AccessoriesImage from "../../assets/itemCategoryWoman/Accessories.png";
import HandbagsImage from "../../assets/itemCategoryWoman/Handbags.png";
import ShoeImage from "../../assets/itemCategoryWoman/Shoe.png";
import SwimImage from "../../assets/itemCategoryWoman/Swim.png";
import TopsImage from "../../assets/itemCategoryWoman/Tops.png";

export const ShopNowBlock = ({ images }: { images: string[] }) => {
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
          <ItemCategory image={DressesImage} text={t("Dresses")} />
          <ItemCategory image={TopsImage} text={t("Tops")} />
          <ItemCategory image={ShoeImage} text={t("Shoe")} />
          <ItemCategory image={HandbagsImage} text={t("Handbags")} />
          <ItemCategory image={SwimImage} text={t("Swim")} />
          <ItemCategory image={AccessoriesImage} text={t("Accessories")} />
        </div>
      </div>
    </>
  );
};
