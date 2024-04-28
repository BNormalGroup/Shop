import React, { startTransition, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { IColor, IProductPost, ISize } from "../../../../utils/types.ts";
import import_image from "../../../../assets/import_image.png";
import { useNavigate } from "react-router-dom";
import { AddProductService } from "../../../../services/productService.ts";
import ImageSelector from "../../../../components/Admin/ImageSelector/ImageSelector.tsx";
import SexSelector from "../../../../components/Admin/SexSelector/SexSelector.tsx";
import ColorSelector from "../../../../components/Admin/ColorSelector/ColorSelector.tsx";
import SizeSelector from "../../../../components/Admin/SizeSelector/SizeSelector.tsx";
import CategorySelect from "../../../../components/Admin/CategorySelect/CategorySelect.tsx";

const AddItem = () => {
  const [item, setItem] = useState<IProductPost>({
    id: undefined,
    name: "",
    sex: "",
    description: "",
    brand_id: undefined,
    category_id: undefined,
    price: 0,
    texture: "",
    images: [],
    colors: [],
    sizes: [],
    image: undefined,
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    try {
      const result = await AddProductService(item);
      if (result == 200) {
        navigate("/admin/item/list");
      } else {
        setError("Error: " + result);
      }
    } catch (error: any) {}
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

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setItem((prevItem) => ({
        ...prevItem,
        image: file,
      }));
    }
  };
  console.log(item);
  return (
    <>
      <div className="container tm-mt-big tm-mb-big">
        <div className="row">
          <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
            <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
              <div className="row">
                <div className="col-12">
                  <h2 className="tm-block-title d-inline-block">Add item</h2>
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
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="price">Price</label>
                      <input
                        onChange={handleChange}
                        id="price"
                        name="price"
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="texture">Texture</label>
                      <input
                        onChange={handleChange}
                        id="texture"
                        name="texture"
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="image">Main image</label>
                      <input
                        name="image"
                        type="file"
                        id="image"
                        onChange={handleImageChange}
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        onChange={handleChange}
                        className="form-control validate"
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
                    />

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn btn-dark btn-block text-uppercase"
                      >
                        Add
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

export default AddItem;
