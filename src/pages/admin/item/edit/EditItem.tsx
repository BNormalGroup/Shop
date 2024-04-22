import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { IImage, IProductPost, IItemShow } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { APP_ENV } from "../../../../env";
import import_image from "../../../../assets/import_image.png";
import { useNavigate, useParams } from "react-router-dom";

const EditItem = () => {
  const [item, setItem] = useState<IProductPost>({
    id: undefined,
    name: "",
    sex: "",
    description: "",
    brand_id: undefined,
    category_id: undefined,
    price: 0,
    color: "",
    images: [],
  });
  const params = useParams();
  const [error, setError] = useState<string>("");
  const [image, setImage] = useState<IImage[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    http
      .get<IItemShow>("/items/show/" + params.id)
      .then((resp) => {
        startTransition(() => {
          setItem({
            ...resp.data.items_data.product,
            images: [],
          });
          setImage(resp.data.items_data.images);
          console.log(resp.data);
        });
      })
      .catch((error) => {
        setError(error);
      });
  }, []);
  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    try {
      await http
        .post<IProductPost>("/items/" + params.id, item, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((r) => {
          if (r.status == 200) {
            navigate("/admin/item/list");
          }
        });
    } catch (error: any) {
      startTransition(() => {
        setError(error);
      });
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    startTransition(() => {
      setItem((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    });
  };

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
    const newArray = item.images; // Створюємо копію масиву
    newArray.splice(index, 1); // Видаляємо елемент за індексом
    setItem((prevItem) => ({
      ...prevItem,
      images: [...newArray], // Оновлюємо стан масиву
    }));
  };
  // Видалення вже інуючих фото з сервера
  const removeImageServer = (index: number) => {
    const id_image = image[index].id;

    http.delete("/items/deleteImage/" + id_image).then((r) => {
      console.log(r.data);
      if (r.status === 200) {
        const newArray = image.filter((_item, i) => i !== index);
        setImage(newArray);
      }
    });
  };

  const handleSelectChange = (event: any) => {
    setItem((prevItem) => ({
      ...prevItem, // Копіюємо всі інші властивості з поточного стану
      sex: event.target.value, // Змінюємо тільки властивість sex
    }));
  };

  return (
    <>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Edit item</h2>
                </div>
              </div>

              <div className="row tm-edit-product-row">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <form
                    action=""
                    className="tm-edit-product-form"
                    onSubmit={handleSumbit}
                  >
                    <div className="form-group mb-3">
                      <label htmlFor="name">Name</label>
                      <input
                        onChange={handleChange}
                        id="name"
                        name="name"
                        value={item.name || ""}
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        onChange={handleChange}
                        className="form-control validate"
                        value={item.description || ""}
                        required
                        name="description"
                      ></textarea>
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="brand_id">Brand id</label>
                      <input
                        onChange={handleChange}
                        id="brand_id"
                        name="brand_id"
                        value={item.brand_id || 0}
                        type="number"
                        className="form-control validate"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="category_id">Category id</label>
                      <input
                        onChange={handleChange}
                        id="category_id"
                        name="category_id"
                        value={item.category_id || ""}
                        type="number"
                        className="form-control validate"
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="color">Color</label>
                      <input
                        onChange={handleChange}
                        id="color"
                        name="color"
                        value={item.color || ""}
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="sex">Sex</label>
                      {/* select для вибору */}
                      <select
                        id="sex"
                        name="sex"
                        className="form-select validate"
                        onChange={handleSelectChange} // Функція для відслідковування зміни
                        value={item.sex || "man"} // Поточне значення вибору
                        required
                      >
                        <option value="0" disabled>
                          Select sex
                        </option>
                        <option value="man">Man</option>
                        <option value="woman">Woman</option>
                        <option value="unisex">Unisex</option>
                      </select>
                    </div>
                    <div className="mb-3">
                      <div className="row">
                        <div className="col-md-3">
                          <img
                            className="img-fluid"
                            src={import_image}
                            onClick={onImageSelect}
                            alt="Оберіть фото"
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                        {item.images.map((img, index) => (
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
                        {image.map((img, index) => (
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
                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-dark btn-block text-uppercase"
                      >
                        Edit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <p>{error}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditItem;
