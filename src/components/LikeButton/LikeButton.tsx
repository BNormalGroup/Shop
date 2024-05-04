import React, {useEffect, useState} from "react";
import useStyles from "./style.tsx";
import likeIcon from "../../assets/likeIcon.png";
import likeIconActive from "../../assets/likeIconActive.png";
import {CheckLikedService, DeleteLikeService, LikeService} from "../../services/favoriteService.ts";
import {useSelector} from "react-redux";
import {RootState} from "../../app/store.ts";


export const LikeButton = ({productId}: { productId: number | undefined }) => {
    const userId = useSelector((state: RootState) => state.users.user.id);
    const [isLiked, setIsLiked] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [likeId, setLikeId] = useState<number>(0);
    const classes = useStyles();

    const likeClick = async () => {
        setIsLoading(true);
        try {
            if (productId) {
                await LikeService(productId, userId);
                await checkLiked();
            }

        } catch (error: any) {
            console.log(error);
        }
        setIsLoading(false);
    };
    const unlikeClick = async () => {
        try {
            if (productId) {
                await DeleteLikeService(likeId);
                await checkLiked();
            }
        } catch (error: any) {
            console.log(error);
        }
        setIsLoading(false);
    };

    useEffect(() => {
        checkLiked();
    }, []);

    const checkLiked = async () => {
        if (productId) {
            const resp = await CheckLikedService(userId, productId);
            if (resp) {
                setIsLiked(resp.liked);
                setLikeId(resp.like_id);
            }
        }
    };

    return (
        <>
            {!isLiked &&
                <button className={classes.likeBtn} onClick={likeClick}>
                    {!isLoading &&
                        <img src={likeIcon} className={classes.likeIcon}/>
                        ||
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                </button>
                ||
                <button className={classes.likeBtn} onClick={unlikeClick}>
                    {!isLoading &&
                        <img src={likeIconActive} className={classes.likeIcon}/>
                        ||
                        <div className="spinner-border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    }
                </button>
            }

        </>
    );
};
