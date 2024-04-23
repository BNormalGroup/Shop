import { useStyles } from "./ProductDataStyle.ts";
import { SelectProduct } from "../selectInProduct/SelectProduct.tsx";
import { useTranslation } from "react-i18next";
//import { ProductAdditionalInfo } from "../ProductAdditionalInfo/ProductAdditionalInfo.tsx";
import { IProductGet } from "../../utils/types.ts";

export const ProductData = ({product}:{product: IProductGet}) => {
  const classes = useStyles();
  const { t } = useTranslation();

  const sizeOption = product.sizes.map((size, key)=>{
    return <div key={key}>{size.size}</div>
  })

  const colorOption = product.colors.map((color, key)=>{
    return <p key={key}>{color.name}</p>
  })
  return (
    <>
      <div className={classes.container}>
        <div className={classes.stack}>
          <p className={classes.textName}>{product?.product?.name}</p>
          <p className={classes.textTexture}>{product?.product?.texture}</p>
          <p className={classes.textPrice}>${product?.product?.price} USD</p>
          <p className={classes.textParam}>{t("Color")}</p>
          <SelectProduct
            content={colorOption}
          />
          <p className={classes.textParam}>{t("EUSize")}</p>
          <SelectProduct content={sizeOption} />
          <p className={classes.textGuide}>{t("SizeGuide")}</p>
          <button className={classes.buttonBag}>ADD TO BAG</button>
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
