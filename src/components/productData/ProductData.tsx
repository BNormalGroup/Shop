import { useStyles } from "./ProductDataStyle.ts";
// import { SelectProduct } from "../selectInProduct/SelectProduct.tsx";
import { useTranslation } from "react-i18next";
//import { ProductAdditionalInfo } from "../ProductAdditionalInfo/ProductAdditionalInfo.tsx";
import { IProductGet } from "../../utils/types.ts";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/bagSlice.ts";
import React, { useState } from "react";
import { RootState } from "../../app/store.ts";

export const ProductData = ({ product }: { product: IProductGet }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const sizeOption = product.sizes.map((size, key) => {
    return (
      <option className={classes.option} key={key} value={size.size}>
        {size.size}
      </option>
    );
  });

  const colorOption = product.colors.map((color, key) => {
    return (
      <option key={key} value={color.name}>
        {color.name}
      </option>
    );
  });
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0].size.toString());
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0].name);
  console.log('re render');
  const clickAddProductToBag = () => {
    if (product.product) {
      dispatch(
        addProduct({
          product: product.product,
          sizes: product.sizes,
          quantity: 1,
          color: selectedColor,
          selectedSize: selectedSize,
        }),
      );

    }
  };

  return (
    <>
      <div className={classes.container}>
        <div className={classes.stack}>
          <p className={classes.textName}>{product?.product?.name}</p>
          <p className={classes.textTexture}>{product?.product?.texture}</p>
          <p className={classes.textPrice}>${product?.product?.price} USD</p>
          <p className={classes.textParam}>{t("Color")}</p>
          <select
            className={classes.select}
            value={selectedSize}
            onChange={(e) => {
              console.log("e.target.value)", e.target.value);
              setSelectedColor(e.target.value);
            }}
              >
            {colorOption}
              </select>
              <p className={classes.textParam}>{t("EUSize")}</p>
          <select
            className={classes.select}
            value={selectedColor}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            {sizeOption}
          </select>
          <p className={classes.textGuide}>{t("SizeGuide")}</p>
          <button className={classes.buttonBag} onClick={clickAddProductToBag}>
            {t("AddToBag")}
          </button>
          <p className={classes.textDescription}>
            {product?.product?.description}
          </p>
          {/*@todo make Additional Info in backEnd*/}
          {/*<div className={classes.productAdditionalInfo}>*/}
          {/*  <ProductAdditionalInfo />*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};
