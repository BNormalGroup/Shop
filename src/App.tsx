import './App.css'
import {Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout.tsx";
import {AdminLayout} from "./layouts/AdminLayout.tsx";
import React from "react";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const ListCategory = React.lazy(() => import('./pages/admin/category/list/ListCategory'));
const AddCategory = React.lazy(() => import('./pages/admin/category/add/AddCategory'));
const EditCategory= React.lazy(() => import('./pages/admin/category/edit/EditCategory'));
const ListBrand = React.lazy(() => import('./pages/admin/brand/list/ListBrand.tsx'));
const AddBrand = React.lazy(() => import('./pages/admin/brand/add/AddBrand.tsx'));
const EditBrand = React.lazy(() => import('./pages/admin/brand/edit/EditBrand'));


function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>
            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
                <Route path='category'>
                    <Route path='listCategory' element={<ListCategory></ListCategory>}></Route>
                    <Route path='addCategory' element={<AddCategory></AddCategory>}></Route>
                    <Route path='editCategory/:id' element={<EditCategory></EditCategory>}></Route>
                </Route>
                <Route path='brand'>
                    <Route path='listBrand' element={<ListBrand></ListBrand>}></Route>
                    <Route path='addBrand' element={<AddBrand></AddBrand>}></Route>
                    <Route path='editBrand/:id' element={<EditBrand></EditBrand>}></Route>
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App;
