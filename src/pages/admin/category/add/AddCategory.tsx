import React, { startTransition, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { ICategoryPostItem } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { useNavigate } from "react-router-dom";
import { AddCategoryService } from "../../../../services/categoryService.ts";
import CategorySelect from "../../../../components/Admin/CategorySelect/CategorySelect.tsx";

const AddCategory = () => {
  const [category, setCategory] = useState<ICategoryPostItem>({
    name: "",
    description: "",
    slug: "",
    parent_id: "",
  });
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    console.log(category);
    const responseStatus = await AddCategoryService(category);
    if (responseStatus.status == 200) {
      navigate("/admin/category/listCategory");
    } else {
      setError(responseStatus.statusText);
    }
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    startTransition(() => {
      setCategory((prevState) => ({
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
                  <h2 className="tm-block-title d-inline-block">
                    Add Category
                  </h2>
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
                      <label htmlFor="description">Description</label>
                      <textarea
                        onChange={handleChange}
                        className="form-control validate"
                        required
                        name="description"
                      ></textarea>
                    </div>
                    <CategorySelect
                      setItem={setCategory}
                      nameProps={"parent_id"}
                      category_id={parseInt(category.parent_id ?? "0", 10)}
                    ></CategorySelect>
                    <div className="form-group mb-3">
                      <label htmlFor="slug">Slug</label>
                      <input
                        onChange={handleChange}
                        id="slug"
                        name="slug"
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
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

export default AddCategory;
