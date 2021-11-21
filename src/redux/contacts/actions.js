import { createAction } from "@reduxjs/toolkit";
import { ADDNEWCONTACT, DELETECONTACT, FILTERNAME } from "./phoneBookTypes";

const addNewContact = createAction(ADDNEWCONTACT);
const deleteContact = createAction(DELETECONTACT);
const filterName = createAction(FILTERNAME);

// const addNewContact = (payload) => ({
//   type: ADDNEWCONTACT,
//   payload,
// });

// const deleteContact = (payload) => ({
//   type: DELETECONTACT,
//   payload,
// });

// const filterName = (payload) => ({
//   type: FILTERNAME,
//   payload,
// });

export { addNewContact, deleteContact, filterName };
