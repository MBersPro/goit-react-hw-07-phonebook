import React, { useState, useEffect } from "react";
import Section from "./section/Section";
import { v4 as uuidv4 } from "uuid";
import ContactForm from "./contactForm/ContactForm";
import ContactList from "./contactList/ContactList";
import Filter from "./filter/Filter";
import { connect } from "react-redux";

const defaultChooser = () => {
  return (
    JSON.parse(localStorage.getItem("contacts")) || [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ]
  );
};

const App = () => {

  // useEffect(() => {
  //   localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = (contact) => {
  //   const id = uuidv4();
  //   if (
  //     contacts.some(
  //       (item) => item.name.toLowerCase() === contact.name.toLowerCase()
  //     )
  //   ) {
  //     return alert(`${contact.name} is already in contacts.`);
  //   }
  //   setContacts((prev) => [...prev, { ...contact, id }]);
  // };

  // const getFilteredContacts = () =>
  //   contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(filter.toLowerCase())
  //   );

  return (
    <>
      <Section title={"Phonebook"}>
        <ContactForm />
      </Section>
      <Section title={"Contacts"}>
        <Filter />
        <ContactList/>
      </Section>
    </>
  );
};

export default App;
