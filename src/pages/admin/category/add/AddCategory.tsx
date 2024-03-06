import {useEffect, useState} from "react";
import {ICategoryItem} from "../../../../utils/types.ts";
import {Form} from "react-bootstrap";
import http from "../../../../http.ts";

const AddCategory =()=>{
    const [category, setCategory]  = useState<ICategoryItem>({
        id: 0,
        name: "",
        description: "",
        slug: "",
        parentId: null
    });
    const [allCategory, setAllCategory]  = useState<ICategoryItem[]>([]);
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

    useEffect(() => {

    }, []);
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        const form = event.currentTarget;
        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity() === false) {
            setValidated(true);
            return;
        }
        await PostDataAsync();
        setCategory({
            id: 0,
            name: "",
            description: "",
            slug: "",
            parentId: null
        });
        form.reset();
        setValidated(false);
    };
    const PostDataAsync = async () => {
        const formData = new FormData();
        formData.append('name', category.name);
        formData.append('description', category.description);
        let slugNew = category.slug
        if (category.parentId != null) {
            formData.append('parent_id', category.parentId.toString());
            const foundCategory = allCategory.find((c) => c.id === category.parentId);
            slugNew = foundCategory?.slug +"&"+ category.slug
            console.log("parent",slugNew);
            setCategory((prevState) => ({
                ...prevState,
                slug: slugNew,
            }));
        }
        formData.append('slug', slugNew);
        try {
            await http
                .post<ICategoryItem>("/AddCategory", formData, {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                });
        }
        catch (error: any) {
            setErrorServer(error);
        }
    }
    return(
        <>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formCategoryName" >
                    <Form.Label style={{
                        color: 'black',
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
                <Form.Group className="mb-3" controlId="formCategoryDescription">
                    <Form.Label style={{
                        color: 'black',
                        fontSize: "30px"
                    }}>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        type="text"
                        placeholder="Enter category description"
                        name="description"
                        value={category.description}
                        required
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a description.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group className="mb-3" controlId="ParentId">
                    <Form.Label style={{
                        color: 'black',
                        fontSize: "30px"
                    }}>Parent id</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter category parent id"
                        name="parentId"
                        value={category.parentId !== null ? category.parentId.toString() : ""}
                        required
                        onChange={handleChange}
                    />
                    <Form.Control.Feedback type="invalid">
                        Please enter a parent id.
                    </Form.Control.Feedback>
                </Form.Group>
                <button className="btn btn-primary" type="submit">Add category</button>
            </Form>
        </>
    )
}
export default AddCategory;
