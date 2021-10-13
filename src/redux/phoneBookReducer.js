import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import phoneBookActions from "./phoneBookActions";

const initialStateContacts = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],

    filter: "",
  },
};

const items = createReducer(initialStateContacts.contacts.items, {
  [phoneBookActions.addContact]: (state, { payload }) => [...state, payload],
  [phoneBookActions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.name !== payload.name),
});
const filter = createReducer(initialStateContacts.contacts.filter, {
  [phoneBookActions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
