import { IProductBag } from "../../utils/types.ts";
import useStyles from "./ProductBagStyle.ts";
import { APP_ENV } from "../../env";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React, { useState } from "react";

export const ProductBag = ({ product }: { product: IProductBag }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [selectedSize, setSelectedSize] = useState<string>(
    product.sizes[0].size.toString(),
  );

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
            src={APP_ENV.UPLOADS_URL + product.product.mainImage}
            className={classes.image}
          />
          <div>
            <Link
              to={"/product/" + product.product.id}
              className={classes.name}
            >
              {product.product.name}
            </Link>
            <div className={classes.box}>
              <p className={classes.properties}>{t("Size")}</p>
              <select
                className={classes.select}
                value={product.selectedSize}
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
          </div>
        </div>
      </div>
    </>
  );
};
