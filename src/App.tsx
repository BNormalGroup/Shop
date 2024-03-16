import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { AdminLayout } from "./layouts/AdminLayout.tsx";
import React from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListItem from "./pages/admin/item/list/ListItem.tsx";
import AddItem from "./pages/admin/item/add/AddItem.tsx";
import EditItem from "./pages/admin/item/edit/EditItem.tsx";
import ListUser from "./pages/admin/user/list/ListUser.tsx";
const ListCategory = React.lazy(
  () => import("./pages/admin/category/list/ListCategory"),
);
const AddCategory = React.lazy(
  () => import("./pages/admin/category/add/AddCategory"),
);
const EditCategory = React.lazy(
  () => import("./pages/admin/category/edit/EditCategory"),
);
const ListBrand = React.lazy(
  () => import("./pages/admin/brand/list/ListBrand.tsx"),
);
const AddBrand = React.lazy(
  () => import("./pages/admin/brand/add/AddBrand.tsx"),
);
const EditBrand = React.lazy(
  () => import("./pages/admin/brand/edit/EditBrand"),
);

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}></Route>
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="category">
            <Route path="listCategory" element={<ListCategory />}></Route>
            <Route path="addCategory" element={<AddCategory />}></Route>
            <Route path="editCategory/:id" element={<EditCategory />}></Route>
          </Route>
          <Route path="brand">
            <Route path="listBrand" element={<ListBrand />}></Route>
            <Route path="addBrand" element={<AddBrand />}></Route>
            <Route path="editBrand/:id" element={<EditBrand />}></Route>
          </Route>
          <Route path="item">
            <Route path="list" element={<ListItem></ListItem>}></Route>
            <Route path="add" element={<AddItem></AddItem>}></Route>
            <Route path="edit/:id" element={<EditItem></EditItem>}></Route>
          </Route>
          <Route path="user">
            <Route path="list" element={<ListUser></ListUser>}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
