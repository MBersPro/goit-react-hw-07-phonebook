import axios from "axios";

import { getContacts, setError, setLoader } from "./phoneBookActions";

axios.default.baseURL = "http://localhost:3000";

export const getContactsOperation = () => (dispatch) => {
  dispatch(setLoader());
  axios
    .get("/contacts")
    .then(({ response }) => dispatch(getContacts(response)))
    .catch(() => dispatch(setError()));
};
