import { IProductGet } from "../../utils/types.ts";
import { useStyles } from "./FavoriteItemStyle.ts";
import { APP_ENV } from "../../env";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { addProduct } from "../../redux/bagSlice.ts";
import { useDispatch } from "react-redux";
import React, {useState} from "react";
import {LikeButton} from "../LikeButton/LikeButton.tsx";

export const FavoriteItem = ({ product }: { product: IProductGet }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0].size.toString(),
  );

  const sizeOptions = product.sizes.map((size, key) => (
    <option key={key} value={size.size}>
      {size.size}
    </option>
  ));


  const clickAddProductToBag = () => {
    if (product.product) {
      dispatch(
        addProduct({
          product: product.product,
          sizes: product.sizes.map(size => size.size.toString()),
          quantity: 1,
          color: product.colors[0].name,
          selectedSize: selectedSize,
        }),
      );
    }
  };

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <img
              className={classes.image}
              src={APP_ENV.UPLOADS_URL + product.images[0].url}
          />
          <LikeButton productId={product.product?.id}></LikeButton>
        </div>

        <Link
          to={"/product/" + product.product?.id}
          className={classes.textName}
        >
          {product.product?.name}
        </Link>
        <p className={classes.textPrice}>${product.product?.price} USD</p>
        <select
          className={classes.select}
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
        >
          {sizeOptions}
        </select>
        <button onClick={clickAddProductToBag} className={classes.addButton}>
          {t("AddToBag")}
        </button>
      </div>
    </>
  );
};
