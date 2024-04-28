import React, { Component, Dispatch, SetStateAction } from "react";
import { IProductPost } from "../../../utils/types.ts";

interface ImageSelectorProps {
  setItem: Dispatch<SetStateAction<any>>;
  sex: string;
}

class SexSelector extends Component<ImageSelectorProps> {
  render() {
    const { sex, setItem } = this.props;
    const handleSelectChange = (event: any) => {
      setItem((prevItem: any) => ({
        ...prevItem, // Копіюємо всі інші властивості з поточного стану
        sex: event.target.value, // Змінюємо тільки властивість sex
      }));
    };

    return (
      <div className="form-group mb-3">
        <label htmlFor="sex">Sex</label>
        {/* select для вибору */}
        <select
          id="sex"
          name="sex"
          className="form-select validate"
          onChange={handleSelectChange} // Функція для відслідковування зміни
          value={sex} // Поточне значення вибору
          required
        >
          <option value="" disabled>
            Select sex
          </option>
          <option value="man">Man</option>
          <option value="woman">Woman</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>
    );
  }
}

export default SexSelector;
