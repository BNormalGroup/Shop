import React, { useEffect, useState } from "react";
import useStyles from "./style.tsx";
import http from "../../../http.ts";
import { IItemShow } from "../../../utils/types.ts";
import { APP_ENV } from "../../../env";
import likeImage from "../../../assets/itemIcons/likeBtn.svg";

export const ProductItem = ({ id }: { id: number }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<IItemShow>();

  useEffect(() => {
    http.get<IItemShow>("/items/show/" + id).then((resp) => {
      setItem(resp.data);
      console.log(resp.data);
      setLoading(false);
    });
  }, []);

  return (
    <div key={"item" + id} className={classes.container}>
      {(loading && (
        <div key={"load"} className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )) || (
        <>
          <div className={classes.imageContainer}>
            <img
              className={classes.image}
              src={APP_ENV.UPLOADS_URL + item?.items_data.images[0]?.url}
              alt={""}
            />
            <button className={classes.likeBtn}>
              <img src={likeImage} />
            </button>
          </div>
          <p className={classes.title}>{item?.items_data.product.name}</p>
          <p className={classes.price}>
            ₴{item?.items_data.product.price} грн.
          </p>
          <p className={classes.color}>{item?.items_data.product.color}</p>
        </>
      )}
    </div>
  );
};
