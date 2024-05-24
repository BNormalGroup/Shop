import useStyles from "./style.tsx";
import React, { startTransition, useEffect, useState } from "react";
import { IOrder } from "../../../utils/types.ts";
import { GetUserOrdersService } from "../../../services/ordersService.ts";
import { APP_ENV } from "../../../env";
import { useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../../app/store.ts";
import { IUserAuth, IUserLogin } from "../../Authorization/types/types.ts";
import InputBirthday from "./inputBirthday/InputBirthday.tsx";
import { Form } from "formik";
import { AddCategoryService } from "../../../services/categoryService.ts";
import { UpdateUserService } from "../../../services/authService.ts";
import { string } from "yup";
import { auth } from "../../../redux/userSlice.ts";
import { jwtDecode } from "jwt-decode";
import { addLocalStorage } from "../../../utils/localStorageUtils.ts";

const MainDetails = () => {
  const classes = useStyles();
  const id = useSelector((state: RootState) => state.users.user.id);
  const [message, setMessage] = useState<string>("");
  const [user, setUser] = useState<IUserLogin>(
    useSelector((state: RootState) => state.users.user),
  );

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;
    startTransition(() => {
      setUser((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    });
  };

  const birthdayChange = (birthday: string) => {
    console.log(birthday);
    setUser((prevState) => ({
      ...prevState,
      birthday: birthday,
    }));
    console.log(user);
  };

  async function handleSumbit(event: React.FormEvent) {
    event.preventDefault();
    const responseStatus = await UpdateUserService(
      user,
      localStorage.getItem("authToken") ?? "",
    );
    if (responseStatus.status == 200) {
      setMessage("Changed successfully");
      if (responseStatus.data.access_token) {
        addLocalStorage("authToken", responseStatus.data.access_token);
        const decoded = jwtDecode<IUserAuth>(responseStatus.data.access_token);
        store.dispatch(auth(decoded));
      }
    } else {
      setMessage(responseStatus.statusText);
    }
  }

  return (
    <form action="" onSubmit={handleSumbit} className={classes.container}>
      <h1 className={classes.title}>Main details</h1>
      <div className={classes.inputContainer}>
        <label className={classes.inputLabel} htmlFor="firstName">
          First Name
        </label>
        <input
          className={classes.input}
          id="firstName"
          type="text"
          name="firstName"
          value={user.firstName}
          onChange={handleChange}
        ></input>
      </div>
      <div className={classes.inputContainer}>
        <label className={classes.inputLabel} htmlFor="lastName">
          Last Name
        </label>
        <input
          className={classes.input}
          id="lastName"
          name="lastName"
          type="text"
          value={user.lastName}
          onChange={handleChange}
        ></input>
      </div>
      <div className={classes.inputContainer}>
        <label className={classes.inputLabel} htmlFor="email">
          Email Address
        </label>
        <input
          className={classes.input}
          id="email"
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
        ></input>
      </div>
      <InputBirthday
        birthday={user.birthday}
        birthdayChange={birthdayChange}
      ></InputBirthday>
      <button type="submit" className={classes.buttonSave}>
        Save
      </button>
      <p className={classes.message}>{message}</p>
    </form>
  );
};

export default MainDetails;
