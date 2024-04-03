import React from "react";
import { SexImage } from "../../../components/sexImage/SexImage.tsx";
import ImageWoman from "../../../assets/womanShop.png";
import { ShopNowBlock } from "../../../components/shopNowBlock/ShopNowBlock.tsx";
import shoesImg from "../../../assets/roundaboutClothing/shoes.png";
import dressImg from "../../../assets/roundaboutClothing/dress.png";
import hatImg from "../../../assets/roundaboutClothing/hat.png";
import bagImg from "../../../assets/roundaboutClothing/bag.png";
import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";

const WomenShop = () => {
  return (
    <>
      <MenuHeader></MenuHeader>
      <SexImage image={ImageWoman} isButtonBlack={false} />
      <ShopNowBlock
        images={[bagImg, dressImg, hatImg, shoesImg, bagImg, dressImg]}
      />
    </>
  );
};

export default WomenShop;
