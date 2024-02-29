import {useState} from "react";
import {ICategoryItem} from "../../../../utils/types.ts";
import {Form} from "react-bootstrap";

export const AddCategory =()=>{
    const [category, setCategory]  = useState<ICategoryItem>({
        id: 0,
        name: "",
        description: "",
        slug: "",
        parentId: null
    });
    const [loading, setLoading] = useState(true);
    const [validated, setValidated] = useState(false);
    const [ErrorServer, setErrorServer] = useState("");

    function handleChange(event:  React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setCategory((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }

    return(
        <>
            <Form noValidate validated={validated} onSubmit={()=>{}}>
                <Form.Group className="mb-3" controlId="formCategoryName" >
                    <Form.Label style={{
                        color: 'white',
                        fontSize: "30px"
                    }}>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter category name"
                        name="name"
                        value={category.name}
                        required
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a category name.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formCategoryDescription" >
                    <Form.Label style={{
                        color: 'white',
                        fontSize: "30px"
                    }}>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Enter category name"
                        name="name"
                        value={category.description}
                        required
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a description.
                    </Form.Control.Feedback>
                </Form.Group>
            </Form>
        </>
    )
}
