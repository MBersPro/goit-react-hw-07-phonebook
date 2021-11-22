import React, { useEffect } from "react";
import Section from "./section/Section";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { getContactsOperation } from "../redux/contacts/phoneBookOperations";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { errorSelector, loadingSelector } from "../redux/contacts/phoneBookSelectors";

const App = () => {
  const dispatch = useDispatch();
  const loader = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  useEffect(() => {
    dispatch(getContactsOperation());
  }, [dispatch]);

  return (
    <>
      {!loader && !error && (
        <>
          <Section title={"Phonebook"}>
            <ContactForm />
          </Section>
          <Section title={"Contacts"}>
            <Filter />
            <ContactList />
          </Section>
        </>
      )}
      {loader && <p>...Loading</p>}
      {error && <p>Something is wrong</p>}
    </>
  );
};

export default App;
