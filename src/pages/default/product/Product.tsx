import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React, { useEffect, useState } from "react";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";
import { useStyles } from "./ProductStyle.ts";
import { ProductImages } from "../../../components/productImages/ProductImages.tsx";
import { ProductData } from "../../../components/productData/ProductData.tsx";
import { IProductGet } from "../../../utils/types.ts";
import { GetItemService } from "../../../services/productService.ts";
import { useParams } from "react-router-dom";

const Product = () => {
  const classes = useStyles();
  const [product, setProduct] = useState<IProductGet>({
    product: undefined,
    images: [],
    sizes: [],
    colors: [],
  });
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchData = async () => {
      let resp;
      if (id) resp = await GetItemService(id);
      if (resp) setProduct(resp);
    };

    fetchData();
  }, [id]);

  console.log(product);
  if (product.product)
    return (
      <>
        <MenuHeader />
        <div className={`container ${classes.Container}`}>
          <div className={classes.TopWrapper}>
            <div className={classes.leftStack}>
              <div className={classes.BreadcrumbWrapper}>
                <Breadcrumb
                  titles={[
                    { name: "Home", url: "/" },
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
