import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./contacts/reducers";




const store = configureStore({ reducer: contactsReducer });

// import { composeWithDevTools } from "redux-devtools-extension";
// const store = createStore(contactsReducer, composeWithDevTools());

export default store;
