import React, { useEffect, useState } from "react";
import useStyles from "./style.tsx";

export const ProductSortPanel = ({
  setSortField,
  setSortDirection,
}: {
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  setSortDirection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const classes = useStyles();
  const [sort, setSort] = useState([
    { id: 0, sortField: "price", sortDirection: "asc" },
    { id: 1, sortField: "price", sortDirection: "desc" },
  ]);
  const handleSelectChange = (event: any) => {
    const selectedValue = parseInt(event.target.value, 10); // Отримуємо значення з `select`
    const selectedSort = sort.find((s) => s.id === selectedValue);
    if (selectedSort) {
      setSortField(selectedSort.sortField);
      setSortDirection(selectedSort.sortDirection);
    }
  };

  return (
    <div className={classes.container}>
      {/*<select*/}
      {/*  style={{ float: "left" }}*/}
      {/*  value={"default"}*/}
      {/*  className={classes.select}*/}
      {/*  onChange={handleSelectChange}*/}
      {/*>*/}
      {/*  <option value={"default"} hidden>*/}
      {/*    Size*/}
      {/*  </option>*/}
      {/*  <option className={classes.option} value={0}>*/}
      {/*    41*/}
      {/*  </option>*/}
      {/*  <option className={classes.option} value={1}>*/}
      {/*    42*/}
      {/*  </option>*/}
      {/*</select>*/}

      {/*<select*/}
      {/*  style={{ float: "left" }}*/}
      {/*  value={"default"}*/}
      {/*  className={classes.select}*/}
      {/*  onChange={handleSelectChange}*/}
      {/*>*/}
      {/*  <option value={"default"} hidden>*/}
      {/*    Color*/}
      {/*  </option>*/}
      {/*  <option className={classes.option} value={0}>*/}
      {/*    White*/}
      {/*  </option>*/}
      {/*  <option className={classes.option} value={1}>*/}
      {/*    Black*/}
      {/*  </option>*/}
      {/*</select>*/}

      <select
        style={{ float: "right" }}
        value={"default"}
        className={classes.select}
        onChange={handleSelectChange}
      >
        <option value={"default"} hidden>
          Sort by
        </option>
        <option className={classes.option} value={0}>
          Від дешевих до дорогих
        </option>
        <option className={classes.option} value={1}>
          Від дорогих до дешевих
        </option>
      </select>
    </div>
  );
};
