import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { ICategoryItem, ICategoryPostItem } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { useNavigate, useParams } from "react-router-dom";
import CategorySelect from "../../../../components/Admin/CategorySelect/CategorySelect.tsx";
import categorySelect from "../../../../components/Admin/CategorySelect/CategorySelect.tsx";

const EditCategory = () => {
  const [category, setCategory] = useState<ICategoryItem>({
    id: undefined,
    name: "",
    slug: "",
    description: "",
    parent_id: undefined,
  });
  const params = useParams();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    http
      .get<ICategoryItem>("/categories/show/" + params.id)
      .then((resp) => {
        startTransition(() => {
          setCategory(resp.data);
        });
      })
      .catch((error) => {
        startTransition(() => {
          setError(error);
        });
      });
  }, []);

  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    try {
      await http
        .post<ICategoryPostItem>("/categories/" + params.id, category, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((r) => {
          if (r.status == 200) {
            navigate("/admin/category/listCategory");
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
                    Edit Category
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
                        value={category.name}
                        type="text"
                        className="form-control validate"
                        required
                      />
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="description">Description</label>
                      <textarea
                        onChange={handleChange}
                        value={category.description}
                        className="form-control validate"
                        required
                        name="description"
                      ></textarea>
                    </div>
                    <CategorySelect
                      setItem={setCategory}
                      nameProps={"parent_id"}
                      category_id={category.parent_id}
                    ></CategorySelect>
                    <div className="form-group mb-3">
                      <label htmlFor="slug">Slug</label>
                      <input
                        onChange={handleChange}
                        id="slug"
                        name="slug"
                        value={category.slug}
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

export default EditCategory;
