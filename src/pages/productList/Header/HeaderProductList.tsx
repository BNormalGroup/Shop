import React from "react";
import useStyles from "./style.tsx";
import {Breadcrumb} from "../../../components/Breadcrumb/Breadcrumb.tsx";
import {Button} from "react-bootstrap";
import {Link} from "react-router-dom";

export const HeaderProductList = ({
                                      title,
                                      description,
                                  }: {
    description: string;
    title: string;
}) => {
    const classes = useStyles();

    return (
        <>
            <div className={classes.container} >
                <div className={classes.breadcrumb}>
                <Breadcrumb titles={[{name: 'Home', url: '/'}, {name: 'Women', url: '/men'}, {name: 'Dresses', url: '/men/dresses'}]}></Breadcrumb>
                </div>
                <div className={classes.containerHeader}>
                    <h1 className={classes.title}>{title}</h1>
                    <p className={classes.description}>{description}</p>
                </div>
                <div className={`${classes.titleNav}`}>
                    <Link to={'#'} className={`${classes.titleButton}`}>
                        Maxi Dresses
                    </Link>
                    <Link to={'#'} className={`${classes.titleButton}`}>
                        Midi Dresses
                    </Link>
                    <Link to={'#'} className={`${classes.titleButton}`}>
                        Midi Dresses
                    </Link>
                    <Link to={'#'} className={`${classes.titleButton}`}>
                        Midi Dresses
                    </Link>
                    <Link to={'#'} className={`${classes.titleButton}`}>Midi Dresses Midi Dresses</Link>
                    <Link to={'#'} className={`${classes.titleButton}`}>Midi Dresses</Link>
                    <Link to={'#'} className={`${classes.titleButton}`}>Midi Dresses</Link>
                </div>
            </div>
        </>
    );
};