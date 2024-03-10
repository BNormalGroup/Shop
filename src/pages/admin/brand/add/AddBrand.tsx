import React, {useState} from "react";
import '../../css/templatemo-style.css';
import  '../../css/fontawesome.min.css';
import {IBrandItem} from "../../../../utils/types.ts";
import http from "../../../../http.ts";

const AddBrand = ()=> {
    const [brand, setBrand] = useState<IBrandItem>({
        id: undefined,
        name: "",
        description: "",
    });
    const [error, setError] = useState<string>('');
   async function handleSumbit(event: React.FormEvent) {
       event.preventDefault();
       try {
           await http
               .post<IBrandItem>("/brands/", brand, {
                   headers: {
                       "Content-Type": "multipart/form-data"
                   }
               });
       } catch (error: any) {
           setError(error);
       }
   }
    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        const { name, value } = event.target;
        setBrand((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    return(
        <>
        <div className="container tm-mt-big tm-mb-big">
            <div className="row">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Add Brand</h2>
                            </div>
                        </div>
                        <div className="row tm-edit-product-row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <form action="" className="tm-edit-product-form" onSubmit={handleSumbit}>
                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="name"
                                        >Name
                                        </label>
                                        <input
                                            onChange={handleChange}
                                            id="name"
                                            name="name"
                                            type="text"
                                            className="form-control validate"
                                            required
                                        />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label
                                            htmlFor="description"
                                        >Description</label
                                        >
                                        <textarea
                                            onChange={handleChange}
                                            className="form-control validate"
                                            required
                                            name='description'
                                        ></textarea>
                                    </div>
                                    <div className="col-12">
                                        <button type="submit"  className="btn btn-dark btn-block text-uppercase">Add</button>
                                    </div>
                                </form>
                            </div>

                    </div>
                        <p>{error}</p>
                </div>
            </div>
        </div>
        </div>
        </>
    )
}

export default AddBrand;
