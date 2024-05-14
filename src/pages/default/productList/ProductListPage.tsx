import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React, { useEffect, useState } from "react";
import { HeaderProductList } from "../../../components/productList/Header/HeaderProductList.tsx";
import useStyles from "./style.tsx";
import { ProductItem } from "../../../components/productList/ProductItem/ProductItem.tsx";
import http from "../../../http.ts";
import { useParams } from "react-router-dom";
import { ICategoryParentItem, IProductGet } from "../../../utils/types.ts";
import { GetItemListService } from "../../../services/productService.ts";
import listItem from "../../admin/item/list/ListItem.tsx";
import { ProductSortPanel } from "../../../components/productList/ProductSortPanel/ProductSortPanel.tsx";

const ProductListPage = () => {
  const classes = useStyles();
  const params = useParams();
  const [products, setProducts] = useState<IProductGet[]>([]);
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");

  const loadProducts = async (type: string) => {
    if (params.id != undefined) {
      const newProducts = await GetItemListService(
        params.id,
        page,
        sortField,
        sortDirection,
      );
      if (type == "page")
        setProducts((prevProducts) => [...prevProducts, ...newProducts]);
      else setProducts(newProducts);
    }
  };

  useEffect(() => {
    if (page != 1) loadProducts("page");
  }, [page]);

  useEffect(() => {
    loadProducts("sort"); // Завантаження товарів при першому рендері
  }, [sortField, sortDirection, params.id]);

  const showMore = () => {
    setPage((prevPage) => prevPage + 1); // Збільшення сторінки для завантаження більше товарів
  };

  return (
    <>
      <MenuHeader></MenuHeader>
      <HeaderProductList
        title={"Dresses For Women"}
        description={
          "Discover the epitome of timeless elegance with ModaMingle's latest women's dresses collection, where classic design meets modern sophistication. Each dress in this meticulously curated collection is a celebration of femininity and refined style, crafted for the confident, contemporary woman."
        }
        category_id={params.id}
      ></HeaderProductList>

      <div
        className="container"
        style={{
          marginBottom: 56,
          padding: 0,
          minHeight: 1000,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ProductSortPanel
          setSortField={setSortField}
          setSortDirection={setSortDirection}
        ></ProductSortPanel>
        <div className={classes.itemsContainer}>
          {products.map((item, index) => (
            <ProductItem key={index} item={item}></ProductItem>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;
