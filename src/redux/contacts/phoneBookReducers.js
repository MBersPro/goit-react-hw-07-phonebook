import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addNewContact, deleteContact, filterName, getContacts, setError, setLoader, removeError, removeLoader } from "./phoneBookActions";

const initialState = {
  contactsList: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
  filterName: "",
};

const contactsReducer = createReducer(initialState, {
  [getContacts]: (state, action) => ({
    ...state, contactsList: action.payload
  }),
  [addNewContact]: (state, action) => ({
    ...state,
    contactsList: [...state.contactsList, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    ...state,
    contactsList: state.contactsList.filter((contact) => contact.id !== action.payload),
  }),
  [filterName]: (state, action) => ({ ...state, filterName: action.payload }),
});

const errorReducer = createReducer("", {
  [setError]: () => true,
  [removeError]: () => false,
})

const loaderReducer = createReducer("", {
  [setLoader]: () => true,
  [removeLoader]: () => false,

})

const phoneBookReducer = combineReducers({
  contacts: contactsReducer,
  error: errorReducer,
  loader: loaderReducer,
});

export default phoneBookReducer
