import { createAction } from "@reduxjs/toolkit";
import {
  ADDNEWCONTACT,
  DELETECONTACT,
  FILTERNAME,
  GETCONTACTS,
  REMOVEERROR,
  REMOVELOADER,
  SETERROR,
  SETLOADER,
} from "./phoneBookTypes";

const getContacts = createAction(GETCONTACTS);
const addNewContact = createAction(ADDNEWCONTACT);
const deleteContact = createAction(DELETECONTACT);
const filterName = createAction(FILTERNAME);

const setError = createAction(SETERROR);
const removeError = createAction(REMOVEERROR)

const setLoader = createAction(SETLOADER)
const removeLoader = createAction(REMOVELOADER)

export {
  addNewContact,
  deleteContact,
  filterName,
  setError,
  getContacts,
  setLoader,
  removeError,
  removeLoader,
};
