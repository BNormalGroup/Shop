import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./MenuHeaderStyle.tsx";
import { Link } from "react-router-dom";
import { ImageMenu } from "./imageMenu/ImageMenu.tsx";
import womenDressesImage from "../../assets/HeaderMenu/womenDresses.png";
import womenSpringImage from "../../assets/HeaderMenu/womenSpring.png";
import { ICategoryParentItem } from "../../utils/types.ts";
import http from "../../http.ts";

const MenuHeader = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  const [isElement, setIsElement] = useState<boolean>(false);
  const [elementId, setElementId] = useState<number>(0);
  const [category, setCategory] = useState<ICategoryParentItem[]>();

  const [targetLinkSelect, setTargetLinkSelect] = useState<HTMLElement | null>(
    null,
  );

  useEffect(() => {
    http.get<ICategoryParentItem[]>("/categories/child").then((resp) => {
      setCategory(resp.data);
    });
  }, []);

  const handleMouseEnter = (event: any) => {
    setIsElement(true);
    const target = event.target as HTMLAnchorElement;
    target.classList.add(classes.show);
    setTargetLinkSelect(target);
  };
  const handleMouseLeave = (event: any) => {
    const panel = document.getElementById("panelMenuInformation");
    if (
      !panel ||
      (event.relatedTarget instanceof Node &&
        panel.contains(event.relatedTarget))
    ) {
      return;
    }
    setIsElement(false);
    targetLinkSelect?.classList.remove(classes.show);
  };

  return (
    <div style={{ backgroundColor: "#282826" }}>
      <div
        id="panelMenuContainer"
        className={`container ${classes.headerWrapper}`}
      >
        {category?.slice(0, 11).map((item, index) => (
          <Link
            to={"/category/" + item.id}
            key={index}
            onMouseEnter={(event) => {
              handleMouseEnter(event);
              setElementId(index);
            }}
            onMouseLeave={handleMouseLeave}
            className={classes.linkButton}
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div
        id="panelMenuInformation"
        onMouseLeave={handleMouseLeave}
        className={`${classes.panelMenuHeader} ${classes.overlay}`}
        style={{ visibility: isElement ? "visible" : "hidden" }}
      >
        <div
          className={`container ${classes.panelMenuHeader}`}
          style={{ visibility: isElement ? "visible" : "hidden" }}
        >
          <div className={`${classes.linkContainer}`}>
            <h1 className={classes.linkContainerHeader}>SHOP BY PRODUCT</h1>
            <div className={classes.listLink}>
              <p
                className={classes.link}
                style={{ marginBottom: 0, fontWeight: 600 }}
              >
                Top Rated Clothing
              </p>
              {category &&
                category[elementId]?.children?.map((item, childIndex) => (
                  <Link
                    key={childIndex}
                    className={classes.link}
                    to={"/category/" + item.id}
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
          </div>
          <div className={classes.imageContainer}>
            <ImageMenu
              image={womenDressesImage}
              text={"Spring 2024"}
            ></ImageMenu>
            <ImageMenu
              image={womenSpringImage}
              text={"Spring 2024"}
            ></ImageMenu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
