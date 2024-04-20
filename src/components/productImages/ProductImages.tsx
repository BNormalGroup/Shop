import { useStyles } from "./ProductImagesStyle.ts";
import { useState } from "react";
import { APP_ENV } from "../../env";

export const ProductImages = ({ images }: { images: string[] }) => {
  const classes = useStyles();
  const [imageSelected, setImageSelected] = useState<string>(images[0]);

  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.stackVertical}>
          {images.map((item, key) => {
            return (
              <img
                onClick={() => {
                  setImageSelected(item);
                }}
                className={classes.images}
                src={APP_ENV.UPLOADS_URL + item}
                key={key}
              />
            );
          })}
        </div>
        <div className={classes.imageMainWrapper}>
          <img
            src={APP_ENV.UPLOADS_URL + imageSelected}
            className={classes.imageMain}
          />
        </div>
      </div>
    </>
  );
};
