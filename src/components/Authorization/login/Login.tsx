import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useStyles } from "../AuthorizationStyle.ts";
import { Register } from "../register/Register.tsx";
import { Form, Formik } from "formik";
import { defaultData } from "./default-data.ts";
import { FormLogin } from "./Form.tsx";
import * as Yup from "yup";
import { IUserAuth, IUserLogin } from "../types/types.ts";
import { SingInService } from "../../../services/authService.ts";
import { useDispatch } from "react-redux";
import { auth, login } from "../../../redux/userSlice.ts";
import { addLocalStorage } from "../../../utils/localStorageUtils.ts";
import { store } from "../../../app/store.ts";
import { jwtDecode } from "jwt-decode";
// import { ShowUserBag } from "../../../services/bagService.ts";
// import { addUserProducts } from "../../../redux/bagSlice.ts";

export const Login = ({ setClose }: { setClose: () => void }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const dispatch = useDispatch();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(t("EmailInvalid"))
      .required(t("ValidationRegisterEmail")),
    password: Yup.string()
      .required(t("PasswordRequired"))
      .min(6, t("PasswordIsShort")),
  });

  const handleSubmit = async (data: IUserLogin) => {
    try {
      const user = await SingInService(data);
      dispatch(login(data));
      if (user) {
        addLocalStorage("authToken", user?.access_token);
        if (typeof user?.access_token === "string") {
          const decoded = jwtDecode<IUserAuth>(user.access_token);
          store.dispatch(auth(decoded));
        }
      }
      setClose();
    } catch (error: any) {
      if (error && error.data) {
        if (error.data.error === "Unauthorized")
          setError(t("UnauthorizedError"));
        else if (error.data.banned === "true") setError(t("BannedError"));
        else setError(error.data.error || t("UnknownError"));
      } else {
        setError(t("UnknownError"));
      }
    }
  };

  if (!isRegister)
    return (
      <>
        <div className={classes.overlay} onClick={setClose} />
        <div className={classes.content}>
          <div className={classes.contentContainer}>
            <Formik
              initialValues={defaultData}
              onSubmit={handleSubmit}
              validationSchema={validationSchema}
            >
              <Form>
                <FormLogin />
                <div className={classes.buttonsContainer}>
                  <button className={classes.buttonCreate} type={"submit"}>
                    {t("LoginButton")}
                  </button>
                  <button
                    className={classes.buttonBack}
                    onClick={() => {
                      setIsRegister(true);
                    }}
                  >
                    {t("CreateAnAccount")}
                  </button>
                  {error && (
                    <div className={classes.textValidation}>{error}</div>
                  )}
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </>
    );
  else
    return (
      <Register
        setClose={setClose}
        backLogin={() => {
          setIsRegister(false);
          setError("");
        }}
      />
    );
};
