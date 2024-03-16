import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { ICategoryItem } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { useNavigate } from "react-router-dom";

const ListCategory = () => {
  const [allCategories, setAllCategories] = useState<ICategoryItem[]>([]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    http
      .get<ICategoryItem[]>("/categories/")
      .then((resp) => {
        startTransition(() => {
          setAllCategories(resp.data);
          console.log(resp.data);
        });
      })
      .catch((error) => {
        startTransition(() => {
          setError(error);
        });
      });
  }, []);

  async function handleDeleteClick(id: number | undefined) {
    if (id !== undefined) {
      await http.delete("/categories/" + id);
      startTransition(() => {
        setAllCategories(allCategories.filter((a) => a.id !== id));
      });
    }
  }

  return (
    <>
      <div className="tm-bg-primary-dark tm-block tm-block-products">
        <div className="tm-product-table-container">
          <table className="table table-hover tm-table-small tm-product-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">NAME</th>
                <th scope="col">DESCRIPTION</th>
                <th scope="col">SLUG</th>
                <th scope="col">PARENT ID</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {allCategories.map((item: ICategoryItem) => (
                <tr key={item.id}>
                  <th scope="row">
                    <a>{item.id}</a>
                  </th>
                  <td className="tm-product-name">{item.name}</td>
                  <td>
                    {item.description.length > 100
                      ? item.description.slice(0, 270) + "..."
                      : item.description}
                  </td>
                  <td className="tm-product-name">{item.slug}</td>
                  <td className="tm-product-name">{item.parent_id}</td>
                  <td>
                    <button onClick={() => handleDeleteClick(item.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <button
            onClick={() => {
              navigate("/admin/category/addCategory");
            }}
            className="btn btn-dark btn-block text-uppercase"
          >
            Add new category
          </button>
        </div>
        <p className="text-danger">{error}</p>
      </div>
    </>
  );
};

export default ListCategory;
