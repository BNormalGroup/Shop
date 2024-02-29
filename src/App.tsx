import './App.css'
import {Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./layouts/DefaultLayout.tsx";
import {AdminLayout} from "./layouts/AdminLayout.tsx";

function App() {

  return (
    <>
        <Routes>
            <Route path='/' element={<DefaultLayout/>}>

            </Route>
            <Route path='/admin' element={<AdminLayout/>}>

            </Route>
        </Routes>
    </>
  )
}

export default App
