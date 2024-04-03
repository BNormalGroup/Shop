import React from "react";
import {SexImage} from "../../../components/sexImage/SexImage.tsx";
import {ShopNowBlock} from "../../../components/shopNowBlock/ShopNowBlock.tsx";
import MenImage from "../../../assets/MenImage.png";
import ChainImage from "../../../assets/chainImage.png";
import TrousersImage from "../../../assets/trousersImage.png";
import tShirtImage from "../../../assets/t-shirtImage.png";
import ShoeMenImage from "../../../assets/ShoeMenImage.png";
import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";

const MenShop = () => {
    return (
        <>
            <MenuHeader></MenuHeader>
            <SexImage image={MenImage} isButtonBlack={true}/>
            <ShopNowBlock
                images={[ChainImage, TrousersImage, tShirtImage, ShoeMenImage, ShoeMenImage, tShirtImage]}
            />
        </>
    );
};

export default MenShop;
