import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { IProduct, IProductGet } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { useNavigate } from "react-router-dom";
import {
  DeleteItemService,
  GetItemsService,
} from "../../../../services/productService.ts";

const ListItem = () => {
  const [Items, setItems] = useState<IProductGet[]>([]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    GetItems();
  }, []);

  async function GetItems() {
    const resp = await GetItemsService();
    console.log(resp);
    if (resp) setItems(resp);
  }

  async function handleDeleteClick(id: number | undefined) {
    if (id !== undefined) {
      const response = await DeleteItemService(id);
      if (response?.status == 200) {
        startTransition(() => {
          setItems(Items.filter((a) => a.product.id !== id));
        });
      }
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
                <th scope="col">CATEGORY ID</th>
                <th scope="col">SEX</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {Items.map((item: IProductGet) => (
                <tr key={item.product.id}>
                  <th scope="row">
                    <a>{item.product.id}</a>
                  </th>
                  <td className="tm-product-name">{item.product.name}</td>
                  <td>
                    {item.product.description.length > 100
                      ? item.product.description.slice(0, 270) + "..."
                      : item.product.description}
                  </td>
                  <td className="tm-product-name">
                    {item.product.category_id}
                  </td>
                  <td className="tm-product-name">{item.product.sex}</td>
                  <td>
                    <button
                      className="btn p-0"
                      onClick={() => handleDeleteClick(item.product.id)}
                    >
                      <i className="bi bi-trash"></i>
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn p-0"
                      onClick={() => {
                        navigate("/admin/item/edit/" + item.product.id);
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
