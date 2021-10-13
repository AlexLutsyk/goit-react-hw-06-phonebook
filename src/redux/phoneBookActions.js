import { createAction } from "@reduxjs/toolkit";
import shortid from "shortid";

const addContact = createAction(
  "contacts/addContact",
  ({ contact, number }) => ({
    payload: {
      id: shortid.generate(),
      contact,
      number,
    },
  })
);

const deleteContact = createAction("contacts/delete");

const changeFilter = createAction("contacts/changeFilter");

const phoneBookActions = { addContact, deleteContact, changeFilter };

export default phoneBookActions;
