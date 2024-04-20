import { useTranslation } from "react-i18next";
import React, { useState } from "react";
import { useStyles } from "../AuthorizationStyle.ts";
import { Register } from "../register/Register.tsx";
import { Form, Formik } from "formik";
import { defaultData } from "./default-data.ts";
import { FormLogin } from "./Form.tsx";
import * as Yup from "yup";
import { IUserLogin,  } from "../types/types.ts";
import { SingInService } from "../../../services/authService.ts";
import { useDispatch } from "react-redux";

export const Login = ({ setClose }: { setClose: () => void }) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  /**
   @todo: redux save user data
   **/
  //const dispatch = useDispatch();

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
      await SingInService(data);
      /**
       @todo: navigate to cabinet
       **/
      setClose();
    } catch (error: any) {
      setError(error.data);
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
                  <label className={classes.textValidation}>{error}</label>
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
        }}
      />
    );
};
