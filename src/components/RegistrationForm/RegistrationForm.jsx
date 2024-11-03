import { Field, Form, Formik, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import s from "./RegistrationForm.module.css";
import { register } from "../../redux/auth/operations";
import toast from "react-hot-toast";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, options) => {
    const newUser = {
      name: values.name,
      email: values.email,
      password: values.password,
    };
    dispatch(register(newUser))
      .unwrap()
      .then(() => {
        options.resetForm();
        toast.success("Success!", { position: "top-center" });
      })
      .catch(() => {
        toast.error("Error, input correct data", {
          position: "top-center",
        });
      });
  };

  const registerSchema = Yup.object({
    name: Yup.string().required("Please enter your name to create an account"),
    email: Yup.string()
      .email("Please enter email address, e.g., name@example.com")
      .required("Your email address is required to create an account"),
    password: Yup.string()
      .min(8, "Your password should be at least 8 characters long for security")
      .max(20, "Too Long!")
      .required("Please create a password to secure your account"),
  });

  return (
    <div className={s.formWrapper}>
      <p className={s.message}>Please create your account</p>
      <Formik
        initialValues={initialValues}
        validationSchema={registerSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <label>
            Name
            <Field
              className={s.input}
              type="text"
              name="name"
              placeholder="Enter your name"
            />
            <ErrorMessage className={s.error} name="name" component="span" />
          </label>
          <label>
            Email
            <Field
              className={s.input}
              type="email"
              name="email"
              placeholder="Enter your email"
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
            />
            <ErrorMessage
              className={s.error}
              name="password"
              component="span"
            />
          </label>
          <button className={s.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
