import React, {useEffect, useState} from "react";
import '../../css/templatemo-style.css';
import  '../../css/fontawesome.min.css';
import {IBrandItem} from "../../../../utils/types.ts";
import http from "../../../../http.ts";
import {useNavigate} from "react-router-dom";

const ListBrand = ()=>{
    const [allBrands , setAllBrands] = useState<IBrandItem[]>([]);
    const [error, setError] = useState<string>('');
    const navigate = useNavigate();

    useEffect(() => {
        http.get<IBrandItem[]>('/brands/')
            .then(resp => {
                setAllBrands(resp.data);
            })
            .catch((error) => {
                setError(error);
            });

    }, []);


    return(
        <>
                        <div className="tm-bg-primary-dark tm-block tm-block-products">
                            <div className="tm-product-table-container">
                                <table className="table table-hover tm-table-small tm-product-table">
                                    <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">BRAND NAME</th>
                                        <th scope="col">DESCRIPTION</th>
                                        <th scope="col">&nbsp;</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {allBrands.map((item: IBrandItem)=>(
                                        <tr key={item.id}>
                                            <th scope="row"><a>{item.id}</a></th>
                                            <td className="tm-product-name">{item.name}</td>
                                            <td>{item.description.length>100 ? (
                                                item.description.slice(0,270)+'...'
                                            ):(item.description)}</td>
                                            <td>
                                                <a href="#" className="tm-product tm-product-delete-link">
                                                    <i className="bi bi-trash"></i>
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className="d-flex flex-row justify-content-between">
                                <button onClick={()=>{navigate('/admin/brand/addBrand')}}
                                    className="btn btn-dark btn-block text-uppercase">Add new product</button>
                            </div>
                            <p className="text-danger">{error}</p>
                        </div>
        </>
    )
}

export default ListBrand;
