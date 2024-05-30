import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React, {useEffect, useState} from "react";
import {HeaderProductList} from "../../../components/productList/Header/HeaderProductList.tsx";
import useStyles from "./style.tsx";
import {ProductItem} from "../../../components/productList/ProductItem/ProductItem.tsx";
import {useParams} from "react-router-dom";
import {IProductGet} from "../../../utils/types.ts";
import {GetItemListService} from "../../../services/productService.ts";
import {ProductSortPanel} from "../../../components/productList/ProductSortPanel/ProductSortPanel.tsx";
import {Button} from "react-bootstrap";

const ProductListPage = () => {
    const classes = useStyles();
    const params = useParams();
    const [products, setProducts] = useState<IProductGet[]>([]);
    const [page, setPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [itemPerPage, setItemPerPage] = useState(9);
    const [sortField, setSortField] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");
    const [isFirstRender, setIsFirstRender] = useState(true);
    const loadProducts = async (type: string) => {
        if (params.id != undefined) {
            console.log('products page load2: ' + page + 'perPage: ' + itemPerPage);
            const newProducts = await GetItemListService(
                params.id,
                page,
                sortField,
                sortDirection,
                itemPerPage
            );
            console.log(newProducts);
            setPage(newProducts.pagination.current_page);
            setLastPage(newProducts.pagination.last_page);
            if (type == "page")
                setProducts((prevProducts) => [...prevProducts, ...newProducts.data]);
            else setProducts(newProducts.data);
        }
    };

    useEffect(() => {
        if (!isFirstRender) {
            if (page !== 1) loadProducts("page");
            else loadProducts("sort");
        }
    }, [page]);

    useEffect(() => {
        if (!isFirstRender) {
            if (page !== 1) setPage(1);
            else loadProducts("sort");
        }
        setItemPerPage(9);
    }, [params.id]);

    useEffect(() => {
        if (isFirstRender) {
            loadProducts("sort");
            setIsFirstRender(false);
        } else {
            if (page != 1) {
                setItemPerPage(9 * page);
                setPage(1);
            } else
                loadProducts("sort");
        }
    }, [sortField, sortDirection]);

    const showMore = () => {
        setPage((prevPage) => prevPage + 1); // Збільшення сторінки для завантаження більше товарів
    };

    return (
        <>
            <MenuHeader></MenuHeader>
            <HeaderProductList
                title={"Fashion 2024"}
                description={
                "In 2024, fashion takes a bold leap into the future with a fusion of retro aesthetics and cutting-edge technology. Holographic fabrics and LED accents illuminate runways, while sustainable materials dominate designs, reflecting a growing eco-consciousness. Gender-neutral styles redefine traditional norms, celebrating individuality and diversity."
                    }
                category_id={params.id}
                nameCategory={''}
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
                {page != lastPage && (
                    <div className={classes.btnContainer}>
                        <Button onClick={showMore} className={classes.btnLoadMore}>Load more</Button>
                    </div>)}

            </div>
        </>
    );
};

export default ProductListPage;
