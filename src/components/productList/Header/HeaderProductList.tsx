import React, {useEffect, useState} from "react";
import useStyles from "./style.tsx";
import { Breadcrumb } from "../../Breadcrumb/Breadcrumb.tsx";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {ICategoryItem, ICategoryParentItem} from "../../../utils/types.ts";
import {CheckLikedService} from "../../../services/favoriteService.ts";
import {GetChildesCategoryService} from "../../../services/categoryService.ts";

export const HeaderProductList = ({
  title,
  description,
    category_id,
}: {
  description: string;
  title: string;
  category_id: string | number | undefined;
}) => {
  const classes = useStyles();
  const {t} = useTranslation();
  const [childes,setChildes] = useState<ICategoryItem[]>([]);
  useEffect(() => {
    getChild();
  }, []);

  const getChild = async () => {
    if(category_id)
    setChildes(await GetChildesCategoryService(category_id));
  };



  return (
    <>
      <div className={`${classes.containerHead}`}>
        <div className={`container ${classes.container}`}>
          <div className={classes.breadcrumb}>
            <Breadcrumb
              titles={[
                { name: `${t('Home')}`, url: "/" },
                { name: "Women", url: "/men" },
                { name: "Dresses", url: "/men/dresses" },
              ]}
            ></Breadcrumb>
          </div>
          <div className={classes.containerHeader}>
            <h1 className={classes.title}>{title}</h1>
            <p className={classes.description}>{description}</p>
          </div>
          <div className={`${classes.titleNav}`}>
            {childes.slice(0,7).map((item) => (
                <Link key={item.id} to={"/category/"+item.id} className={`${classes.titleButton}`}>
                  {item.name}
                </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
