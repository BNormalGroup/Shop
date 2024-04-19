import React from "react";
import useStyles  from "./style.tsx";
import {Link} from "react-router-dom";

export const Breadcrumb = ({
                                      titles,
                                  }: {
    titles: { name: string; url: string }[];
}) => {
    const classes = useStyles();

    return (
        <ul className={classes.container}>
                {titles.map((item, index) => (
                    <React.Fragment key={index}>
                        {(index != 0 ? (<p className={`${classes.point} ${classes.link}`}>{">"}</p>) : '')}
                        <Link  className={`${classes.link} ${index == titles.length - 1 ? classes.disabled : '' }`} to={item.url}>{item.name}</Link>
                    </React.Fragment>
                ))}
        </ul>
    );
};
