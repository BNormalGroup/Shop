import { useStyles } from "../AuthorizationStyle.ts";
import { useTranslation } from "react-i18next";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";
import { FormRegister } from "./Form.tsx";
import { defaultData } from "./default-data.ts";
import { IUserRegister } from "../types/types.ts";
import { register } from "../../../services/authService.ts";
import { useState } from "react";

export const Register = ({
  setClose,
  backLogin,
}: {
  setClose: () => void;
  backLogin: () => void;
}) => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [error, setError] = useState<string>('');
  const validationSchema = Yup.object().shape({
    email: Yup.string().email(t("EmailInvalid")).required(t("ValidationRegisterEmail")),
    firstName: Yup.string().required(t("FirstNameRequired")).matches(/^[A-Za-zА-Яа-яЁёЇїІіЄєҐґ]+$/, t("FirstNameLettersOnly")),
    password: Yup.string().required(t("PasswordRequired"))
      .min(6, t("PasswordIsShort")),
  });

  const handleSubmit = async (
    data: IUserRegister
  ) => {
    try{
      await register(data);
      backLogin();
    }
    catch (error: any)
    {
      setError(error.data);
    }
  };

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
              <FormRegister />
              <div className={classes.buttonsContainer}>
                <button className={classes.buttonCreate} type={"submit"}>
                  {t("CreateButton")}
                </button>
                <button className={classes.buttonBack} onClick={backLogin}>
                  {t("BackButton")}
                </button>
              </div>
              <label className={classes.textValidation}>{error}</label>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
};
