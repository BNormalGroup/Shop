import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";
import { useStyles } from "./ProductStyle.ts";
import { ProductImages } from "../../../components/productImages/ProductImages.tsx";
import { ProductData } from "../../../components/productData/ProductData.tsx";
import { IProductGet } from "../../../utils/types.ts";
import { GetItemService } from "../../../services/productService.ts";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Product = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [product, setProduct] = useState<IProductGet>({
    product: {
      id: 0,
      image: "",
      name: "",
      description: "",
      texture: "",
      price: 0,
      sex: ""
    },
    images: [],
    sizes: [],
    colors: [],
  });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      let resp;
      if (id) resp = await GetItemService(id);
      console.log(resp);
      if (resp) setProduct(resp);
    };

    fetchData();
  }, [id]);

  if (product.product.id != 0)
    return (
      <>
        <MenuHeader />
        <div className={`container ${classes.Container}`}>
          <div className={classes.TopWrapper}>
            <div className={classes.leftStack}>
              <div className={classes.BreadcrumbWrapper}>
                <Breadcrumb
                  titles={[
                    { name: `${t("Home")}`, url: "/" },
                    {
                      name: `${product.product.sex}`,
                      url: `/${product.product.sex.toLowerCase()}`,
                    },
                    { name: `${product.product.name}`, url: undefined },
                  ]}
                />
              </div>
              <ProductImages
                productId={product.product.id}
                images={product.images.map((image) => image.url)}
              />
            </div>
            <ProductData product={product} />
          </div>
        </div>
      </>
    );
};

export default Product;
