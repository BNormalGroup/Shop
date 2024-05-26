import React, { startTransition, useEffect, useState } from "react";
import "../../css/templatemo-style.css";
import "../../css/fontawesome.min.css";
import { IBan, IUser, IUserBanned } from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import { useNavigate } from "react-router-dom";

const ListUser = () => {
  const [Users, setUsers] = useState<IUserBanned[]>([]);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    UpdateUsersTable();
  }, []);

  async function UpdateUsersTable() {
    await http
      .get<IUserBanned[]>("/bans/")
      .then((resp) => {
        startTransition(() => {
          setUsers(resp.data);
        });
      })
      .catch((error) => {
        startTransition(() => {
          setError(error);
        });
      });
  }

  async function handleBanUser(id: number) {
    let ban: IBan = { user_id: id, reason: "admin panel banned", id: 0 };
    await http.post("/bans/", ban).then((r) => {
      if (r.status == 200) {
        UpdateUsersTable();
      }
    });
  }

  async function handleUnBannedUser(index: number) {
    await http.delete("/bans/" + Users[index].bans[0].id).then((r) => {
      if (r.status == 200) {
        UpdateUsersTable();
      }
    });
  }

  return (
    <>
      <div className="tm-bg-primary-dark tm-block tm-block-products">
        <div className="tm-product-table-container">
          <table className="table table-hover tm-table-small tm-product-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">FIRSTNAME</th>
                <th scope="col">LASTNAME</th>
                <th scope="col">EMAIL</th>
                <th scope="col">&nbsp;</th>
                <th scope="col">&nbsp;</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((item: IUser, index) => (
                <tr key={item.id}>
                  <th scope="row">
                    <a>{item.id}</a>
                  </th>
                  <td className="tm-product-name">{item.firstName}</td>
                  <td className="tm-product-name">{item.lastName}</td>
                  <td className="tm-product-name">{item.email}</td>
                  <td>
                    {(item.isAdmin && (
                      <button className="btn btn-success">ADMIN</button>
                    )) || <button className="btn btn-danger">NOT ADMIN</button>}
                  </td>
                  <td>
                    {(item.isBanned && (
                      <button
                        onClick={() => handleUnBannedUser(index)}
                        className=" btn btn-danger"
                      >
                        BANNED
                      </button>
                    )) || (
                      <button
                        onClick={() => handleBanUser(item.id)}
                        className="btn btn-success"
                      >
                        NOT BANNED
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-danger">{error}</p>
      </div>
    </>
  );
};

export default ListUser;
