import React, {Component, Dispatch, SetStateAction} from 'react';
import {IColor, IProductPost} from "../../../utils/types.ts";

interface ColorSelectorProps {
    setItem: Dispatch<SetStateAction<IProductPost>>;
    colors: { name: string, image: File }[];
}

class ColorSelector extends Component<ColorSelectorProps> {
    render() {
        const { colors,setItem } = this.props;

        const handleAddColor = () => {
            const colorName = (document.getElementById("colorName") as HTMLInputElement)?.value;
            const colorImage = (
                document.getElementById("colorImage") as HTMLInputElement
            ).files;
            console.log('start' + colorImage);
            if (colorImage && colorName) {
                const newColor: IColor = {
                    name: colorName,
                    image: colorImage[0],
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


        return (
            <div className="form-group mb-3">
                <input name="color" type="file" id="colorImage" />
                <input
                    name="color"
                    placeholder="name"
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
                        <div className="col-md-3" key={index}>
                            <label>{color.name}</label>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={() => removeColor(index)}
                                aria-label="Close"
                            ></button>
                            <img
                                className="img-fluid"
                                src={URL.createObjectURL(color.image)}
                                alt={color.name}
                                style={{ cursor: "pointer" }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default ColorSelector;
