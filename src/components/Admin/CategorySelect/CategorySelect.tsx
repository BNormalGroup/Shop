import React, { useEffect, useState } from "react";
import { ICategoryItem, IProductPost } from "../../../utils/types";
import { GetCategoriesService } from "../../../services/categoryService";
import { Dispatch, SetStateAction } from "react";

interface CategorySelectProps {
  setItem: Dispatch<SetStateAction<IProductPost>>;
  category_id?: number; // Необов'язковий параметр
}

const CategorySelect: React.FC<CategorySelectProps> = ({
  setItem,
  category_id,
}) => {
  const [allCategories, setAllCategories] = useState<ICategoryItem[]>([]);

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const categoryId = parseInt(event.target.value, 10);
    setItem((prevItem) => ({
      ...prevItem,
      category_id: categoryId,
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
        id="category_id"
        name="category_id"
        className="form-select validate"
        onChange={handleSelectChange}
        value={category_id ?? ""}
        required
      >
        <option value="" disabled>
          Select a category
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
