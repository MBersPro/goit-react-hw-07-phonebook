import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  addNewContact,
  deleteContact,
  filterName,
  getContacts,
  setError,
  setLoader,
  removeError,
  removeLoader,
} from "./phoneBookActions";

const initialState = {
  contactsList: [],
  filterName: "",
};

const contactsReducer = createReducer(initialState, {
  [getContacts]: (state, action) => ({
    ...state,
    contactsList: action.payload,
  }),
  [addNewContact]: (state, action) => ({
    ...state,
    contactsList: [...state.contactsList, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    contactsList: state.contactsList.filter(
      (contact) => contact.id !== action.payload
    ),
  }),
  [filterName]: (state, action) => ({ ...state, filterName: action.payload }),
});

const errorReducer = createReducer("", {
  [setError]: () => true,
  [removeError]: () => false,
  [getContacts]: () => false,
});

const loaderReducer = createReducer(false, {
  [setLoader]: () => true,
  [removeLoader]: () => false,
  [getContacts]: () => false,
  [addNewContact]: () => false,
  [setError]: () => false,
  [deleteContact]: () => false,
});

const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default phoneBookReducer;
