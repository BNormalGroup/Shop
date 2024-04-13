import React from "react";
import {SexImage} from "../../../components/sexImage/SexImage.tsx";
import ImageWoman from "../../../assets/womanShop.png";
import {ShopNowBlock} from "../../../components/shopNowBlock/ShopNowBlock.tsx";
import shoesImg from "../../../assets/roundaboutClothing/shoes.png";
import dressImg from "../../../assets/roundaboutClothing/dress.png";
import hatImg from "../../../assets/roundaboutClothing/hat.png";
import bagImg from "../../../assets/roundaboutClothing/bag.png";
import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import {useTranslation} from "react-i18next";
import {SexCategoryItems} from "../../../utils/types.ts";
import DressesImage from "../../../assets/itemCategoryWoman/Dresses.png";
import AccessoriesImage from "../../../assets/itemCategoryWoman/Accessories.png";
import HandbagsImage from "../../../assets/itemCategoryWoman/Handbags.png";
import ShoeImage from "../../../assets/itemCategoryWoman/Shoe.png";
import SwimImage from "../../../assets/itemCategoryWoman/Swim.png";
import TopsImage from "../../../assets/itemCategoryWoman/Tops.png";

const WomenShop = () => {
    const {t} = useTranslation();
    const categories: SexCategoryItems[] = [
        {image: DressesImage, name: t("Dresses")},
        {image: TopsImage, name: t("Tops")},
        {image: ShoeImage, name: t("Shoe")},
        {image: HandbagsImage, name: t("Handbags")},
        {image: SwimImage, name: t("Swim")},
        {image: AccessoriesImage, name: t("Accessories")},
    ];

    return (
        <>
            <div className="container" style={{marginBottom: 56, padding: 0,}}>
                <MenuHeader></MenuHeader>
                <SexImage image={ImageWoman} isButtonBlack={false}/>
                <ShopNowBlock
                    images={[bagImg, dressImg, hatImg, shoesImg, bagImg, dressImg]}
                    categories={categories}
                />
            </div>
        </>
    );
};

export default WomenShop;
