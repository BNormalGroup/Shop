import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React from "react";
import { Breadcrumb } from "../../../components/Breadcrumb/Breadcrumb.tsx";
import { useStyles } from "./ProductStyle.ts";
import { ProductImages } from "../../../components/productImages/ProductImages.tsx";

const Product = () => {
  const classes = useStyles();

  return (
    <>
      <MenuHeader />
      {/*
      @todo Breadcrumb from server
      */}
      <div className={`container ${classes.Container}`}>
        <div className={classes.TopWrapper}>
          <div className={classes.leftStack}>
            <div className={classes.BreadcrumbWrapper}>
              <Breadcrumb
                titles={[
                  { name: "Home", url: "/" },
                  { name: "Women", url: "/men" },
                  { name: "Dresses", url: "/men/dresses" },
                ]}
              />
            </div>
            <ProductImages images={["","",""]} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
