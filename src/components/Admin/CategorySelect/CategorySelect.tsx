import React, { useEffect, useState } from "react";
import { ICategoryItem, IProductPost } from "../../../utils/types";
import { GetCategoriesService } from "../../../services/categoryService";
import { Dispatch, SetStateAction } from "react";
import { bool } from "yup";

interface CategorySelectProps {
  nameProps: string;
  setItem: Dispatch<SetStateAction<any>>;
  category_id?: number; // Необов'язковий параметр
  requiredSelect?: boolean;
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  setItem,
  category_id,
  nameProps,
  requiredSelect,
}) => {
  const [allCategories, setAllCategories] = useState<ICategoryItem[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setItem((prevItem: any) => ({
      ...prevItem,
      [name]: value,
    }));
  };

  useEffect(() => {
    const setCategoriesFromServer = async () => {
      const categories = await GetCategoriesService();
      if (categories) {
        setAllCategories(categories);
      }
    };

    setCategoriesFromServer();
  }, []);

  return (
    <div className="form-group mb-3">
      <label htmlFor="category_id">Category</label>
      <select
        id={nameProps}
        name={nameProps}
        className="form-select validate"
        onChange={handleSelectChange}
        value={category_id ?? ""}
        required={requiredSelect}
      >
        <option value="" disabled>
          Select a category
        </option>
        <option value="0" disabled={requiredSelect}>
          Nothing
        </option>
        {allCategories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelect;
