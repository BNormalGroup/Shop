import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout.tsx";
import { AdminLayout } from "./layouts/AdminLayout.tsx";
import React, { lazy, useState } from "react";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import ListItem from "./pages/admin/item/list/ListItem.tsx";
import AddItem from "./pages/admin/item/add/AddItem.tsx";
import EditItem from "./pages/admin/item/edit/EditItem.tsx";
import ListUser from "./pages/admin/user/list/ListUser.tsx";
import MenuPage from "./pages/default/menu/MenuPage.tsx";
import ProductListPage from "./pages/default/productList/ProductListPage.tsx";
import ListOrders from "./pages/admin/orders/list/ListOrders.tsx";
import SearchProduct from "./pages/default/searchProduct/SearchProduct.tsx";
import PersonalOffice from "./pages/default/personalOffice/PersonalOffice.tsx";
import UserOrdersList from "./components/PersonalOffice/ListOrders/ListOrders.tsx";
import { useSelector } from "react-redux";
import { RootState } from "./app/store.ts";
import { LoginModalContext } from "./context/LoginModalContext.ts";
import { Login } from "./components/Authorization/login/Login.tsx";
import MainDetails from "./components/PersonalOffice/MainDetails/MainDetails.tsx";
import ChangePassword from "./components/PersonalOffice/ChangePassword/ChangePassword.tsx";

const ListCategory = lazy(
  () => import("./pages/admin/category/list/ListCategory"),
);
const AddCategory = lazy(
  () => import("./pages/admin/category/add/AddCategory"),
);
const EditCategory = lazy(
  () => import("./pages/admin/category/edit/EditCategory"),
);
const WomanShop = lazy(() => import("./pages/default/womanShop/WomenShop.tsx"));
const MenShop = lazy(() => import("./pages/default/manShop/MenShop.tsx"));
const Product = lazy(() => import("./pages/default/product/Product.tsx"));
const Favorite = lazy(() => import("./pages/default/favorite/Favorite.tsx"));
const ReviewBag = lazy(() => import("./pages/default/reviewBag/ReviewBag.tsx"));
const NotFound = lazy(
  () => import("./pages/default/notFound/NotFoundPage.tsx"),
);
const CheckoutPage = lazy(
  () => import("./pages/default/checkout/CheckoutPage.tsx"),
);

function App() {
  const { isAuth, user } = useSelector((state: RootState) => state.users);
  const [isLoginOpen, setLoginOpen] = useState<boolean>(false);

  const openLoginModal = () => {
    setLoginOpen(true);
  };

  const closeLoginModal = () => {
    setLoginOpen(false);
  };

  return (
    <>
      <LoginModalContext.Provider value={{ openLoginModal }}>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<MenuPage></MenuPage>}></Route>
            <Route path={"/woman"} element={<WomanShop />} />
            <Route path={"/man"} element={<MenShop />} />
            <Route path="category/:id" element={<ProductListPage />}></Route>
            <Route path="product/:id" element={<Product />}></Route>
            <Route
              path="searchproduct/:keyword"
              element={<SearchProduct />}
            ></Route>
            <Route path="review-bag" element={<ReviewBag />}></Route>
            {isAuth && (
              <>
                <Route path="favorite" element={<Favorite />}></Route>
                <Route path="office" element={<PersonalOffice />}>
                  <Route path="orders" element={<UserOrdersList />}></Route>
                  <Route path="details" element={<MainDetails />}></Route>
                  <Route
                    path="change-password"
                    element={<ChangePassword />}
                  ></Route>
                </Route>
              </>
            )}
            <Route path={"*"} element={<NotFound />} />
          </Route>
          {user.isAdmin && (
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="category">
                <Route path="listCategory" element={<ListCategory />}></Route>
                <Route path="addCategory" element={<AddCategory />}></Route>
                <Route
                  path="editCategory/:id"
                  element={<EditCategory />}
                ></Route>
              </Route>
              <Route path="item">
                <Route path="list" element={<ListItem></ListItem>}></Route>
                <Route path="add" element={<AddItem></AddItem>}></Route>
                <Route path="edit/:id" element={<EditItem></EditItem>}></Route>
              </Route>
              <Route path="user">
                <Route path="list" element={<ListUser></ListUser>}></Route>
              </Route>
              <Route path="order">
                <Route path="list" element={<ListOrders></ListOrders>}></Route>
              </Route>
            </Route>
          )}
          <Route path="/order/checkout" element={<CheckoutPage />}></Route>
        </Routes>
        {isLoginOpen && <Login setClose={closeLoginModal} />}
      </LoginModalContext.Provider>
    </>
  );
}

export default App;
