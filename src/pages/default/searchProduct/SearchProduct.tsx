import MenuHeader from "../../../components/menuHeader/MenuHeader.tsx";
import React, {useEffect, useState, Suspense, lazy} from "react";
import useStyles from "./style.tsx";
import { ProductItem } from "../../../components/productList/ProductItem/ProductItem.tsx";
import { useParams } from "react-router-dom";
import { IProductGet } from "../../../utils/types.ts";
import { SearchItemListService } from "../../../services/productService.ts";


const ProductListPage = () => {
    const classes = useStyles();
    const params = useParams();
    const [searchResults, setSearchResults] = useState<IProductGet[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        handleSearch();
    }, [params.keyword]);
    const handleSearch = async () => {
        setLoading(true);
        try {
            if (params.keyword) {
                const response = await SearchItemListService(params.keyword);
                setSearchResults(response);
            }
        } catch (error) {
            console.error("Error searching for products:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <MenuHeader></MenuHeader>
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
                <Suspense fallback={<h1>Loading...</h1>}>
                    {/* Перевіряємо, чи завантаження ще триває */}
                    {isLoading ? (
                        <h1 className={classes.message}>Loading...</h1>
                    ) : (
                        <>
                            {searchResults.length > 0 ? (
                                <div className={classes.itemsContainer}>
                                    {searchResults.map((item, index) => (
                                        <ProductItem key={index} item={item}></ProductItem>
                                    ))}
                                </div>
                            ) : (
                                <h1 className={classes.message} >Нічого не знайдено</h1>
                            )}
                        </>
                    )}
                </Suspense>
            </div>
        </>
    );
};

export default ProductListPage;
