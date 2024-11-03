import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/contacts/operations";
import ContactList from "../components/ContactList/ContactList";
import ContactForm from "../components/ContactForm/ContactForm";
import Loader from "../components/Loader/Loader";
import {
  selectContacts,
  selectError,
  selectIsLoading,
} from "../redux/contacts/selectors";
import SearchBox from "../components/SearchBox/SearchBox";

const Contacts = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <title>Your contacts</title>
      <ContactForm />
      <SearchBox />
      <div>
        {isLoading && <Loader />}
        {error && "Error! Try again"}
      </div>
      <ContactList contacts={contacts} />
    </>
  );
};

export default Contacts;
