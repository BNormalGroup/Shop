import React, { useEffect, useState } from "react";
import useStyles from "./style.tsx";
import { IProductGet } from "../../../utils/types.ts";
import { APP_ENV } from "../../../env";
import likeImage from "../../../assets/itemIcons/likeBtn.svg";
import { GetItemService } from "../../../services/productService.ts";
import { string } from "yup";

export const ProductItem = ({ id }: { id: number }) => {
  const classes = useStyles();
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState<IProductGet>();

  useEffect(() => {
    const fetchData = async () => {
      let resp;
      if (id) resp = await GetItemService(id.toString());
      if (resp) setItem(resp);
    };

    fetchData();
    setLoading(false);
  }, [id]);

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
              src={
                APP_ENV.UPLOADS_URL + item?.images[0]?.url != undefined
                  ? item?.images[0]?.url
                  : ""
              }
              alt={""}
            />
            <button className={classes.likeBtn}>
              <img src={likeImage} />
            </button>
          </div>
          <p className={classes.title}>{item?.product?.name}</p>
          <p className={classes.price}>₴{item?.product?.price} грн.</p>
          <p className={classes.color}>
            {item?.colors?.map((prod, index) => (
              <>
                {prod.name}
                {index != item?.colors.length && " | "}
              </>
            ))}
          </p>
        </>
      )}
    </div>
  );
};
