import {useStyles} from "./ProductImagesStyle.ts";
import {useEffect, useState} from "react";
import {APP_ENV} from "../../env";
import likeIcon from "../../assets/likeIcon.png";
import likeIconActive from "../../assets/likeIconActive.png";
import {CheckLikedService, DeleteLikeService, LikeService} from "../../services/favoriteService.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";
import {number} from "yup";

export const ProductImages = ({
                                  images,
                                  productId,
                              }: {
    images: string[];
    productId: number | undefined;
}) => {
    const classes = useStyles();
    const [imageSelected, setImageSelected] = useState<string>(images[0]);
    const userId = useSelector((state: RootState) => state.users.user.id);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [likeId, setLikeId] = useState<number>(0);

    const likeClick = async () => {
        if (productId) await LikeService(productId, userId);
    };
    const unlikeClick = async () => {
        if (productId) await DeleteLikeService(likeId);
    };

    useEffect(() => {
       checkLiked();
    }, []);

  const checkLiked = async () => {
    if (productId) {
      const resp = await CheckLikedService(userId, productId);
      if (resp)
      {
        setIsLiked(resp.liked);
        setLikeId(resp.like_id);
      }
    }
  };

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
                    ></img>
                    {!isLiked &&
                        <button className={classes.likeButton} onClick={likeClick}>
                            <img src={likeIcon} className={classes.likeIcon}/>
                        </button>
                    ||
                        <button className={classes.likeButton} onClick={unlikeClick}>
                            <img src={likeIconActive} className={classes.likeIcon}/>
                        </button>
                    }

                </div>
            </div>
        </>
    );
};
