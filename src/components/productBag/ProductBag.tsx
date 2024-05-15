import { IProductBag } from "../../utils/types.ts";
import useStyles from "./ProductBagStyle.ts";
import { APP_ENV } from "../../env";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, updateQuantity } from "../../redux/bagSlice.ts";
import { RootState } from "../../app/store.ts";

export const ProductBag = ({ product }: { product: IProductBag }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.selectedSize,
  );
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(product.quantity);
  const productsInBag = useSelector((state: RootState) => state.bag.products);

  useEffect(() => {
    console.log('useEffect');
    localStorage.setItem("productsInBag", JSON.stringify(productsInBag));
  }, [productsInBag]);

  const deleteClicked = () => {
    if (product.product.id) dispatch(deleteProduct(product));
    setSelectedSize(product.selectedSize);
    console.log("selectedSize", selectedSize, product.selectedSize);
  };
  console.log(" product.selectedSize", product.selectedSize);

  const sizeOption = product.sizes.map((size, key) => {
    return (
      <option key={key} value={size.size}>
        {size.size}
      </option>
    );
  });

  return (
    <>
      <hr className={classes.line} />
      <div className={classes.mainBox}>
        <div className={classes.innerBox}>
          <img
            src={APP_ENV.UPLOADS_URL + product.product.image}
            className={classes.image}
          />
          <div>
            <div className={classes.boxName}>
              <Link
                to={"/product/" + product.product.id}
                className={classes.name}
              >
                {product.product.name}
              </Link>
            </div>
            <div className={classes.box}>
              <p className={classes.properties}>{t("Size")}</p>
              <select
                className={classes.select}
                value={selectedSize}
                onChange={(e) => {
                  setSelectedSize(e.target.value);
                }}
              >
                {sizeOption}
              </select>
            </div>
            <div className={classes.box}>
              <p className={classes.properties}>{t("Colour")}</p>
              <p className={classes.properties}>{product.color}</p>
            </div>
            <div className={classes.box}>
              <p className={classes.properties}>{t("Quantity")}</p>
              <div className={classes.quantityBox}>
                <button
                  className={classes.quantityCircle}
                  onClick={() => {
                    setQuantity(quantity + 1);
                    dispatch(
                      updateQuantity({
                        productId: product.product.id,
                        quantity: 1,
                      }),
                    );
                  }}
                >
                  <a className={classes.quantityText}>+</a>
                </button>
                <p className={classes.properties}>{quantity}</p>
                <button
                  className={classes.quantityCircle}
                  onClick={() => {
                    if (quantity > 1) {
                      setQuantity(quantity - 1);
                      dispatch(
                        updateQuantity({
                          productId: product.product.id,
                          quantity: -1,
                        }),
                      );
                    }
                  }}
                >
                  <a className={classes.quantityText}>-</a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.boxColumn}>
          <button className={classes.buttonDelete} onClick={deleteClicked}>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L11 11" stroke="black" strokeLinecap="round" />
              <path d="M1 11L11 1" stroke="black" strokeLinecap="round" />
            </svg>
          </button>
          <p className={classes.price}>${product.product.price} USD</p>
        </div>
      </div>
    </>
  );
};
