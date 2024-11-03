import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import s from "./LoginForm.module.css";
import { login } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const LoginForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    const userData = {
      email: values.email,
      password: values.password,
    };
    dispatch(login(userData))
      .unwrap()
      .then(() => {
        options.resetForm();
        toast.success("Success!", { position: "top-center" });
      })
      .catch((error) => {
        toast.error("Error, invalid login or password!", {
          position: "top-center",
        });
      });
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Please enter a valid email address")
      .required("Enter your email address"),
    password: Yup.string()
      .min(8, "Your password should be at least 8 characters long for security")
      .max(20, "Too Long!")
      .required("Please create a password"),
  });

  return (
    <div className={s.formWrapper}>
      <p className={s.message}>Please log in to continue</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label>
            Email
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
            <ErrorMessage className={s.error} name="email" component="span" />
          </label>
          <label>
            Password
            <Field
              className={s.input}
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </label>
          <button className={s.btn} type="submit">
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
