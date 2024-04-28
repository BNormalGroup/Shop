import React, { Component, Dispatch, SetStateAction } from "react";
import { IImage, IProductPost } from "../../../utils/types.ts";
import { APP_ENV } from "../../../env";
import http from "../../../http.ts";

interface ImageSelectorProps {
  importImage: string;
  setItem: Dispatch<SetStateAction<IProductPost>>;
  images: File[];
  imageServer?: IImage[];
  setImageServer?: Dispatch<SetStateAction<IImage[]>>;
}

class ImageSelector extends Component<ImageSelectorProps> {
  render() {
    const { images, importImage, setItem, imageServer, setImageServer } =
      this.props;
    const onImageSelect = () => {
      const input = document.createElement("input");
      input.setAttribute("type", "file");
      input.setAttribute("accept", "image/*");
      input.addEventListener("change", (e: any) => {
        const files = e.target.files;
        if (files) {
          const file = files[0];
          setItem((prevItem) => ({
            ...prevItem,
            images: [...prevItem.images, file], // Додавання нового запису до масиву images
          }));
        }
      });
      input.click();
    };

    const removeImage = (index: number) => {
      setItem((prevItem) => ({
        ...prevItem,
        images: prevItem.images.filter((_, i) => i !== index), // Оновлюємо стан масиву
      }));
    };

    const removeImageServer = (index: number) => {
      if (imageServer && setImageServer) {
        const id_image = imageServer[index].id;

        http.delete("/items/deleteImage/" + id_image).then((r) => {
          console.log(r.data);
          if (r.status === 200) {
            const newArray = imageServer.filter((_item, i) => i !== index);
            setImageServer(newArray);
          }
        });
      }
    };

    return (
      <div className="mb-3">
        <div className="row">
          <div className="col-md-3">
            <img
              className="img-fluid"
              src={importImage}
              onClick={onImageSelect}
              alt="Оберіть фото"
              style={{ cursor: "pointer" }}
            />
          </div>
          {images.map((img, index) => (
            <div className="col-md-3" key={index}>
              <button
                type="button"
                className="btn-close"
                onClick={() => removeImage(index)}
                aria-label="Close"
              ></button>
              <img
                className="img-fluid"
                src={URL.createObjectURL(img)}
                onClick={onImageSelect}
                alt="Оберіть фото"
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
          {imageServer?.map((img, index) => (
            <div className="col-md-3" key={index}>
              <button
                type="button"
                className="btn-close"
                onClick={() => removeImageServer(index)}
                aria-label="Close"
              ></button>
              <img
                className="img-fluid"
                src={APP_ENV.UPLOADS_URL + img.url}
                alt="Оберіть фото"
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSelector;
