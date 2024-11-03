import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, ...contact }) => (
        <li key={id} className={s.contact}>
          <Contact contactData={{ contact, id }} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
