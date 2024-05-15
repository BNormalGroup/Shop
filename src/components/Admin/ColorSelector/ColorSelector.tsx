import React from "react";
import {Dispatch, SetStateAction} from "react";
import {IColor, IProductPost} from "../../../utils/types.ts";
import useStyles from "./style.tsx";
import {DeleteColorService} from "../../../services/itemSizeColorService.ts";

interface ColorSelectorProps {
    setItem: Dispatch<SetStateAction<IProductPost>>;
    colors: { name: string; image?: File }[];
    colorsServer?: IColor[];
    setColorsServer?: Dispatch<SetStateAction<IColor[]>>;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({colors, setItem, colorsServer, setColorsServer}) => {
    const classes = useStyles();
    const handleAddColor = () => {
        const colorName = (document.getElementById("colorName") as HTMLInputElement)?.value;
        if (colorName) {
            const newColor: IColor = {
                name: colorName,
            };
            setItem((prevItem) => ({
                ...prevItem,
                colors: [...prevItem.colors, newColor],
            }));
        }
    };

    const removeColor = (index: number) => {
        setItem((prevItem) => ({
            ...prevItem,
            colors: prevItem.colors.filter((_, i) => i !== index),
        }));
    };

    const removeColorServer = async (index: number) => {
        if (colorsServer && setColorsServer) {
            const resp = await DeleteColorService(colorsServer[index].id);
            if (resp?.status == 200 && colorsServer) {
                const newArray = colorsServer.filter((_item, i) => i !== index);
                setColorsServer(newArray);
            }
        }
    };

    return (
        <div className="form-group mb-3">
            <input
                name="color"
                placeholder="color name"
                type="text"
                id="colorName"
                className="form-control validate mt-3"
            />
            <button
                onClick={handleAddColor}
                type="button"
                className="btn btn-dark btn-block text-uppercase mt-3"
            >
                Add Color
            </button>
            <div className="row">
                {colors.map((color, index) => (
                    <div className={`col-md-3 ${classes.item}`} key={index}>
                        <p className={classes.label}>{color.name}</p>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => removeColor(index)}
                            aria-label="Close"
                        ></button>
                    </div>
                ))}
                {colorsServer?.map((color, index) => (
                    <div className={`col-md-3 ${classes.item}`} key={index}>
                        <p className={classes.label}>{color.name}</p>
                        <button
                            type="button"
                            className="btn-close"
                            onClick={() => removeColorServer(index)}
                            aria-label="Close"
                        ></button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ColorSelector;
