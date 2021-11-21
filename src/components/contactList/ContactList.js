import React from "react";
import PropTypes from "prop-types";
import { ul, p } from "./ContactList.module.css";
import { connect } from "react-redux";
import { deleteContact } from "../../redux/contacts/actions";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={ul}>
      {contacts.map((item) => (
        <li key={item.id}>
          <p className={p}>
            {item.name}: {item.number}
          </p>
          <button type="button" id={item.id} onClick={() => deleteContact(item.id)}>Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired
}
const mapStateToProps = (state) => {
  if (state.filterName)
    return { contacts: state.contacts.filter(({ name }) => name.toLowerCase().includes(state.filterName)) };
  return {contacts: state.contacts}
}

const mapDispatchToProps = {
  deleteContact
}


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
