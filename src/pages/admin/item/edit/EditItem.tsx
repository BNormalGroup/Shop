import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import {
  IImage,
  IProductPost,
  IItemShow,
  IProductGet,
} from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { APP_ENV } from "../../../../env";
import import_image from "../../../../assets/import_image.png";
import { useNavigate, useParams } from "react-router-dom";
import SizeSelector from "../../../../components/Admin/SizeSelector/SizeSelector.tsx";
import ColorSelector from "../../../../components/Admin/ColorSelector/ColorSelector.tsx";
import SexSelector from "../../../../components/Admin/SexSelector/SexSelector.tsx";
import ImageSelector from "../../../../components/Admin/ImageSelector/ImageSelector.tsx";
import CategorySelect from "../../../../components/Admin/CategorySelect/CategorySelect.tsx";

const EditItem = () => {
  const [item, setItem] = useState<IProductPost>({
    id: undefined,
    name: "",
    sex: "",
    description: "",
    brand_id: undefined,
    category_id: undefined,
    price: 0,
    images: [],
    sizes: [],
    colors: [],
    texture: "",
  });
  const params = useParams();
  const [error, setError] = useState<string>("");
  const [image, setImage] = useState<IImage[]>([]);
  const navigate = useNavigate();
  useEffect(() => {
    http
      .get<IProductGet>("/items/show/" + params.id)
      .then((resp) => {
        startTransition(() => {
          if (resp.data.product)
            setItem({
              ...resp.data.product,
              images: [],
              sizes: [],
              colors: [],
            });
          setImage(resp.data.images);
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

                    <CategorySelect
                      setItem={setItem}
                      category_id={item.category_id}
                    />
                    <SizeSelector
                      handleChange={handleChange}
                      setItem={setItem}
                      sizes={item.sizes}
                    />
                    <ColorSelector setItem={setItem} colors={item.colors} />
                    <SexSelector sex={item.sex} setItem={setItem} />
                    <ImageSelector
                      images={item.images}
                      importImage={import_image}
                      setItem={setItem}
                      imageServer={image}
                      setImageServer={setImage}
                    />

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
