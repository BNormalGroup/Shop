import React from "react";
import {useStyles} from "./ItemCategoryStyle.ts";
import {useNavigate} from "react-router-dom";

export const ItemCategory = ({
                                 image,
                                 text,
                                 link,
                             }: {
    image: string;
    text: string;
    link?: string;
}) => {
    const classes = useStyles();

    const navigator = useNavigate();

    const goToLink = () => {
        console.log('click', link);
        if (link)
            navigator(link);
    };

    return (
        <>
            <div onClick={goToLink} className={classes.wrapper}>
                <img className={classes.image} src={image}/>
                <a className={classes.text}>{text}</a>
            </div>
        </>
    );
};
