import MenuHeader from "../../components/menuHeader/MenuHeader.tsx";
import React from "react";
import {HeaderProductList} from "./Header/HeaderProductList.tsx";
import useStyles from "./Header/style.tsx";


const ProductListPage = () => {
    const classes = useStyles();
    return (
        <>
            <div className="container" style={{marginBottom: 56, padding: 0, minHeight: 1000}}>
                <MenuHeader></MenuHeader>
                <HeaderProductList title={'Dresses For Women'}
                                   description={'Discover the epitome of timeless elegance with ModaMingle\'s latest women\'s dresses collection, where classic design meets modern sophistication. Each dress in this meticulously curated collection is a celebration of femininity and refined style, crafted for the confident, contemporary woman.'}>
                </HeaderProductList>
            </div>
        </>
    );
};

export default ProductListPage;
