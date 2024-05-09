import React, {useEffect, useState} from "react";
import useStyles from "./style.tsx";
import {IProductGet} from "../../../utils/types.ts";
import {APP_ENV} from "../../../env";
import {GetItemService} from "../../../services/productService.ts";
import NotFoundImage from "../../../assets/notFoundImage.jpg";
import {LikeButton} from "../../LikeButton/LikeButton.tsx";
import {Link} from "react-router-dom";

export const ProductItem = ({item}: { item: IProductGet }) => {
    const classes = useStyles();

    const [src, setSrc] = useState(
        item && item.images && item.images[0]
            ? APP_ENV.UPLOADS_URL + item.images[0].url
            : NotFoundImage
    );

    const handleImageError = () => {
        // Заміна джерела на резервне зображення, якщо виникла помилка
        setSrc(NotFoundImage);
    };

    return (
        <div  className={classes.container}>

            <>
                <div className={classes.imageContainer}>
                    <img
                        className={classes.image}
                        src={src}
                        alt={""}
                        onError={handleImageError}
                    />
                    <LikeButton productId={item.product?.id}></LikeButton>
                </div>
                <Link to={'/product/' + item?.product?.id} key={item.product?.id} className={classes.title}>{item?.product?.name}</Link>
                <p className={classes.price}>₴{item?.product?.price} грн.</p>
                <p className={classes.color}>
                    {item?.colors?.map((prod, index) => (
                        <span key={index}>
                {prod.name}
                            {index !== item.colors.length - 1 && " | "}
              </span>
                    ))}
                </p>
            </>
        </div>
    );
};
