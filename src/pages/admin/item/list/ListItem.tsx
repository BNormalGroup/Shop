import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { IProduct } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { useNavigate } from "react-router-dom";

const ListItem = () => {
  const [Items, setItems] = useState<IProduct[]>([]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    http
      .get<IProduct[]>("/items/")
      .then((resp) => {
        startTransition(() => {
          setItems(resp.data);
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
      await http.delete("/items/" + id);
      startTransition(() => {
        setItems(Items.filter((a) => a.id !== id));
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
                <th scope="col">BRAND ID</th>
                <th scope="col">CATEGORY ID</th>
                <th scope="col">SEX</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {Items.map((item: IProduct) => (
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
                  <td className="tm-product-name">{item.brand_id}</td>
                  <td className="tm-product-name">{item.category_id}</td>
                  <td className="tm-product-name">{item.sex}</td>
                  <td>
                    <button
                      className="btn p-0"
                      onClick={() => handleDeleteClick(item.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn p-0"
                      onClick={() => {
                        navigate("/admin/item/edit/" + item.id);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
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
              navigate("/admin/item/add");
            }}
            className="btn btn-dark btn-block text-uppercase"
          >
            Add new item
          </button>
        </div>
        <p className="text-danger">{error}</p>
      </div>
    </>
  );
};

export default ListItem;
