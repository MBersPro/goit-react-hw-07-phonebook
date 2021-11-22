import axios from "axios";

import {
  addNewContact,
  deleteContact,
  getContacts,
  setError,
  setLoader,
} from "./phoneBookActions";

axios.defaults.baseURL = "http://localhost:4000";

export const getContactsOperation = () => (dispatch) => {
  dispatch(setLoader());
  axios
    .get("/contacts")
    .then(({ data }) => dispatch(getContacts(data)))
    .catch(() => dispatch(setError()));
};

export const addNewContactOperation = (contact) => (dispatch) => {
  dispatch(setLoader());
  axios
    .post("/contacts/", contact)
    .then(({ data }) => dispatch(addNewContact(data)))
    .catch((error) => {
      dispatch(setError(error));
    });
};

export const deleteContactOperation = (id) => (dispatch) => {
  dispatch(setLoader());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContact(id)))
    .catch((error) => {
      dispatch(setError(error));
    });
};
