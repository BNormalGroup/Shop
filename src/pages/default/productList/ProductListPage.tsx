import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React, { useEffect, useState } from "react";
import { HeaderProductList } from "../../../components/productList/Header/HeaderProductList.tsx";
import useStyles from "./style.tsx";
import { ProductItem } from "../../../components/productList/ProductItem/ProductItem.tsx";
import http from "../../../http.ts";
import { useParams } from "react-router-dom";

const ProductListPage = () => {
  const classes = useStyles();
  const params = useParams();
  const [itemIds, setItemIds] = useState<number[]>([]);
  useEffect(() => {
    http.get<number[]>("categories/items/" + params.id).then((resp) => {
      setItemIds(resp.data);
      console.log(resp.data);
    });
  }, [params.id]);
  return (
    <>
      <MenuHeader></MenuHeader>
      <HeaderProductList
        title={"Dresses For Women"}
        description={
          "Discover the epitome of timeless elegance with ModaMingle's latest women's dresses collection, where classic design meets modern sophistication. Each dress in this meticulously curated collection is a celebration of femininity and refined style, crafted for the confident, contemporary woman."
        }
      ></HeaderProductList>
      <div
        className="container"
        style={{ marginBottom: 56, padding: 0, minHeight: 1000 }}
      >
        <div className={classes.itemsContainer}>
          {itemIds.map((item, index) => (
            <ProductItem key={index} id={item}></ProductItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
