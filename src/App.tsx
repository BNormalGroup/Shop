import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { AdminLayout } from "./layouts/AdminLayout.tsx";
import React, { lazy } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListItem from "./pages/admin/item/list/ListItem.tsx";
import AddItem from "./pages/admin/item/add/AddItem.tsx";
import EditItem from "./pages/admin/item/edit/EditItem.tsx";
import ListUser from "./pages/admin/user/list/ListUser.tsx";
import MenuPage from "./pages/default/menu/MenuPage.tsx";
import ProductListPage from "./pages/default/productList/ProductListPage.tsx";

const ListCategory = lazy(
  () => import("./pages/admin/category/list/ListCategory"),
);
const AddCategory = lazy(
  () => import("./pages/admin/category/add/AddCategory"),
);
const EditCategory = lazy(
  () => import("./pages/admin/category/edit/EditCategory"),
);
const ListBrand = lazy(() => import("./pages/admin/brand/list/ListBrand.tsx"));
const AddBrand = lazy(() => import("./pages/admin/brand/add/AddBrand.tsx"));
const EditBrand = lazy(() => import("./pages/admin/brand/edit/EditBrand"));
const WomanShop = lazy(() => import("./pages/default/womanShop/WomenShop.tsx"));
const MenShop = lazy(() => import("./pages/default/manShop/MenShop.tsx"));
const Product = lazy(() => import("./pages/default/product/Product.tsx"));
const Favorite = lazy(() => import("./pages/default/favorite/Favorite.tsx"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<MenuPage></MenuPage>}></Route>
          <Route path={"/woman"} element={<WomanShop />} />
          <Route path={"/man"} element={<MenShop />} />
          <Route path="category/:id" element={<ProductListPage />}></Route>
          <Route path="product/:id" element={<Product />}></Route>
          <Route path="favorite" element={<Favorite />}></Route>
        </Route>
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
