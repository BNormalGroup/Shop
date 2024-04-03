import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import useStyles from "./MenuHeaderStyle.tsx";

const MenuHeader = () => {
    const { t } = useTranslation();
    const classes = useStyles();
    const [isElement, setIsElement] = useState<boolean>(false);

    const [targetLinkSelect, setTargetLinkSelect] = useState<HTMLElement | null>(null);

    const handleMouseEnter = (event:any) => {
        setIsElement(true);
        const target = event.target as HTMLAnchorElement;
        target.classList.add(classes.show);
        setTargetLinkSelect(target);
    };

    const handleMouseLeave = (event:any) => {
        const panel = document.getElementById('panelMenuInformation');

        if (!panel || (event.relatedTarget instanceof Node && panel.contains(event.relatedTarget))) {
            return;
        }
        setIsElement(false);
        targetLinkSelect?.classList.remove(classes.show);
    };

    return (
        <>
            <div id='panelMenuContainer' className={classes.headerWrapper}>
                {['New In', 'Clothing', 'Dresses', 'Shoes', 'Accessories', 'Sportswear', 'Face + Body', 'Topshop', 'Brands', 'Marketplace', 'Sale'].map((label, index) => (
                    <a
                        key={index}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className={classes.linkButton}>
                        {label}
                    </a>
                ))}
            </div>
            <div
                id='panelMenuInformation'
                onMouseLeave={handleMouseLeave}
                className={`${classes.panelMenuHeader} ${classes.overlay}`}
                style={{ visibility: isElement ? 'visible' : 'hidden' }}>
                <p>blalbal</p>
            </div>
        </>
    );
};

export default MenuHeader;
