import './App.css'
import {Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout.tsx";
import {AdminLayout} from "./layouts/AdminLayout.tsx";
import React from "react";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
const AddCategory = React.lazy(() => import('./pages/admin/category/add/AddCategory'));
const ListBrand = React.lazy(() => import('./pages/admin/brand/list/ListBrand.tsx'));
const AddBrand = React.lazy(() => import('./pages/admin/brand/add/AddBrand.tsx'));

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>

            </Route>
            <Route path='/admin' element={<AdminLayout/>}>
                <Route path='category'>
                    <Route path='addCategory' element={<AddCategory></AddCategory>}></Route>
                </Route>
                <Route path='brand'>
                    <Route path='listBrand' element={<ListBrand></ListBrand>}></Route>
                    <Route path='addBrand' element={<AddBrand></AddBrand>}></Route>
                </Route>
            </Route>
        </Routes>
    </>
  )
}

export default App
