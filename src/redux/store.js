
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../redux/auth/auth-slice";
import contactsReducer from "../redux/contacts/contact-slice"
import filterReducer from '../redux/filter/filter-slice';

// import rootReducer from "./root-reducer";

export const store = configureStore({
    // reducer: rootReducer,
     reducer: {
    auth: authReducer,
    contacts: contactsReducer,
    filter: filterReducer,
  },
})

