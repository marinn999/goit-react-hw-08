import s from "./ Contact.module.css";
import { useDispatch } from "react-redux";
import { Icon } from "@iconify-icon/react";
import { deleteContactThunk } from "../../redux/contactsOps";

function Contact({ contactData }) {
  const dispatch = useDispatch();

  const { contact, id } = contactData || {};

  if (!contact) {
    return <div>No contact information available</div>;
  }

  return (
    <>
      <div className={s.textContainer}>
        <p className={s.text}>
          <Icon icon="bxs:user" className={s.icon} /> {contact.name}
        </p>
        <p>
          <Icon icon="carbon:phone-filled" className={s.icon} />{" "}
          {contact.number}
        </p>
      </div>
      <button
        className={s.btn}
        onClick={() => dispatch(deleteContactThunk(id))}
      >
        Delete
      </button>
    </>
  );
}

export default Contact;
