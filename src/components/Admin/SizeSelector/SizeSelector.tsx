import React, { ChangeEvent, Component, Dispatch, SetStateAction } from "react";
import {IProductPost, ISize} from "../../../utils/types.ts";
import {DeleteSizeService} from "../../../services/itemSizeColorService.ts";

interface SizeFormProps {
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  setItem: Dispatch<SetStateAction<IProductPost>>;
  sizes: ISize[];
  sizesServer?: ISize[];
  setSizesServer?: Dispatch<SetStateAction<ISize[]>>;
}

class SizeSelector extends Component<SizeFormProps> {
  render() {
    const { sizes, setItem, sizesServer, setSizesServer, handleChange } = this.props;
    const removeSizes = (removedSize: number) => {
      setItem((prevItem) => ({
        ...prevItem,
        sizes: prevItem.sizes.filter((size) => size.size !== removedSize),
      }));
    };

    const handleAddSize = () => {
      const input = document.getElementById("size") as HTMLInputElement;
      const size = input.value;
      const newSize: ISize = {
        size: Number(size),
      };
      if (!sizes.some((item) => item.size === newSize.size))
        setItem((prevItem) => ({
          ...prevItem,
          sizes: [...prevItem.sizes, newSize],
        }));
    };

    const removeSizeServer = async (index: number) => {
      if (sizesServer && setSizesServer) {
        console.log('sizes ', index);
        const resp = await DeleteSizeService(sizesServer[index].id);
        if (resp?.status == 200 && sizesServer) {
          const newArray = sizesServer.filter((_item, i) => i !== index);
          setSizesServer(newArray);
        }
      }
    };

    return (
      <div className="form-group mb-3">
        <label htmlFor="size">Sizes</label>
        <input
          onChange={handleChange}
          name="size"
          type="number"
          id="size"
          className="form-control validate"
        />
        <button
          type="button"
          onClick={handleAddSize}
          className="btn btn-dark btn-block text-uppercase mt-3"
        >
          Add size
        </button>
        {sizes &&
          sizes.map((size, key) => (
            <div key={key} className="m-1">
              {size.size}
              <button
                type="button"
                className="btn-close"
                onClick={() => removeSizes(size.size)}
                aria-label="Close"
              ></button>
            </div>
          ))}
        {sizes &&
            sizesServer?.map((size, key) => (
                <div key={key} className="m-1">
                  {size.size}
                  <button
                      type="button"
                      className="btn-close"
                      onClick={() => removeSizeServer(key)}
                      aria-label="Close"
                  ></button>
                </div>
            ))}
      </div>
    );
  }
}

export default SizeSelector;
