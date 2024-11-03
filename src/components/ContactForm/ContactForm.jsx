import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContactThunk } from "../../redux/contacts/operations";
import { useId } from "react";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    number: "",
  };

  const CheckSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    number: Yup.string()
      .min(7, "Too Short!")
      .max(9, "Too Long!")
      .required("Required"),
  });

  const nameId = useId();
  const numberId = useId();

  const handleAdd = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch(addContactThunk(newContact));
    actions.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={CheckSchema}
      >
        <Form>
          <label className={s.label}>
            Name
            <Field className={s.input} name="name" id={nameId} />
            <ErrorMessage name="name" component="div" className={s.error} />
          </label>
          <label className={s.label}>
            Number
            <Field name="number" className={s.input} id={numberId} />
            <ErrorMessage name="number" component="div" className={s.error} />
          </label>
          <button type="submit" className={s.btn}>
            Add contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
