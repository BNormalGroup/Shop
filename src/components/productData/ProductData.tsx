import { useStyles } from "./ProductDataStyle.ts";
import { SelectProduct } from "../selectInProduct/SelectProduct.tsx";
import { useTranslation } from "react-i18next";
import { ProductAdditionalInfo } from "../ProductAdditionalInfo/ProductAdditionalInfo.tsx";

export const ProductData = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <>
      <div className={classes.container}>
        <div className={classes.stack}>
          <p className={classes.textName}>FRAYED SHORT-SLEEVED DENIM SHIRT</p>
          <p className={classes.textTexture}>Organic cotton</p>
          <p className={classes.textPrice}>$135 USD</p>
          <p className={classes.textParam}>{t("Color")}</p>
          <SelectProduct
            content={[
              <div key="1">CSS SELECT arrow (classic)</div>,
              <div key="1">CSS SELECT arrow (classic)</div>,
            ]}
          />
          <p className={classes.textParam}>{t("EUSize")}</p>
          <SelectProduct content={[<p>21</p>, <p>21</p>]} />
          <p className={classes.textGuide}>{t("SizeGuide")}</p>
          <button className={classes.buttonBag}>ADD TO BAG</button>
          <p className={classes.textDescription}>
            Washed a faded-blue shade, this short-sleeved shirt is crafted from
            a blend of organic and recycled cotton and frayed at the sleeves and
            hem for texture. It's otherwise classic with its pointed collar and
            contrast-button closure
          </p>
          <div className={classes.productAdditionalInfo}>
            <ProductAdditionalInfo />
          </div>
        </div>
      </div>
    </>
  );
};
