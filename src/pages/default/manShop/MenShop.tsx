import React from "react";
import { SexImage } from "../../../components/sexImage/SexImage.tsx";
import { ShopNowBlock } from "../../../components/shopNowBlock/ShopNowBlock.tsx";
import MenImage from "../../../assets/MenImage.png";
import ChainImage from "../../../assets/chainImage.png";
import TrousersImage from "../../../assets/trousersImage.png";
import tShirtImage from "../../../assets/t-shirtImage.png";
import ShoeMenImage from "../../../assets/ShoeMenImage.png";
import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import JeansImage from "../../../assets/itemCategoryMen/jeans.png";
import TShirtsImage from "../../../assets/itemCategoryMen/t-shirts.png";
import ShoesImage from "../../../assets/itemCategoryMen/shoes.png";
import BagsImage from "../../../assets/itemCategoryMen/bags.png";
import SocksImage from "../../../assets/itemCategoryMen/socks.png";
import AccessoriesImage from "../../../assets/itemCategoryMen/accessories.png";
import { SexCategoryItems } from "../../../utils/types.ts";
import { useTranslation } from "react-i18next";
import { createUseStyles } from "react-jss";

export const useStyles = createUseStyles({
  wrapper: {
    backgroundColor: '#282826'
  },
  text: {
    color: '#D4D2B4'
  }
});

const MenShop = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const categories: SexCategoryItems[] = [
    { image: JeansImage, name: t("JeansMen") },
    { image: TShirtsImage, name: t("t-shirtsMen") },
    { image: ShoesImage, name: t("shoeMen") },
    { image: BagsImage, name: t("BagsMen") },
    { image: SocksImage, name: t("SocksMen") },
    { image: AccessoriesImage, name: t("AccessoriesMen") },
  ];

  return (
    <>
      <MenuHeader></MenuHeader>
      <div className="container" style={{ marginBottom: 56, padding: 0 }}>
        <SexImage image={MenImage} isButtonBlack={true} />
        <ShopNowBlock
          wrapperClassName={classes.wrapper}
          textClassName={classes.text}
          images={[
            ChainImage,
            TrousersImage,
            tShirtImage,
            ShoeMenImage,
            ShoeMenImage,
            tShirtImage,
          ]}
          categories={categories}
        />
      </div>
    </>
  );
};

export default MenShop;


