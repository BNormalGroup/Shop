import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useStyles from "./ProductBagStyle.ts";
import { APP_ENV } from "../../env";
import { updateQuantity } from "../../redux/bagSlice.ts";
import { IProductBag } from "../../utils/types.ts";

export const ProductBag = ({
  product,
  canEdit,
  deleteProductClick,
}: {
  product: IProductBag;
  canEdit: boolean;
  deleteProductClick: (product: IProductBag) => void;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.selectedSize,
  );
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState<number>(product.quantity);

  useEffect(() => {
    setSelectedSize(product.selectedSize);
  }, [product]);

  const deleteClicked = async () => {
    deleteProductClick(product);
  };

  const sizeOption = product.sizes.map((size, key) => (
    <option key={key} value={size}>
      {size}
    </option>
  ));

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
              {canEdit ? (
                <select
                  className={classes.select}
                  value={selectedSize}
                  onChange={(e) => setSelectedSize(e.target.value)}
                >
                  {sizeOption}
                </select>
              ) : (
                <p className={classes.properties}>{selectedSize}</p>
              )}
            </div>
            <div className={classes.box}>
              <p className={classes.properties}>{t("Colour")}</p>
              <p className={classes.properties}>{product.color}</p>
            </div>
            <div className={classes.box}>
              <p className={classes.properties}>{t("Quantity")}</p>
              {canEdit ? (
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
              ) : (
                <p className={classes.properties}>{quantity}</p>
              )}
            </div>
          </div>
        </div>
        <div className={canEdit ? classes.boxColumn : classes.bottomContainer}>
          {canEdit && (
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
          )}
          <p className={classes.price}>${product.product.price} USD</p>
        </div>
      </div>
    </>
  );
};
