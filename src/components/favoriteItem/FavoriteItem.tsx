import { IProductGet } from "../../utils/types.ts";
import { useStyles } from "./FavoriteItemStyle.ts";
import { APP_ENV } from "../../env";
import { SelectProduct } from "../selectInProduct/SelectProduct.tsx";
import { useTranslation } from "react-i18next";

export const FavoriteItem = ({ product }: { product: IProductGet }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const sizeOptions = product.sizes.map((size, key) => (
    <option key={key} value={size.size}>
      {size.size}
    </option>
  ));

  return (
    <>
      <div className={classes.wrapper}>
        <img
          className={classes.image}
          src={APP_ENV.UPLOADS_URL + product.images[0].url}
        />
        <p className={classes.textName}>{product.product?.name}</p>
        <p className={classes.textPrice}>${product.product?.price} USD</p>
        <SelectProduct content={sizeOptions} />
        <button className={classes.addButton}>{t("AddToBag")}</button>
      </div>
    </>
  );
};
