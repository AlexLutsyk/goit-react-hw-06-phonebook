import "./App.css";
// import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { connect } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
// import shortid from "shortid";

function App() {
  // const [contacts, setContacts] = useState([
  //   { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  //   { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  //   { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  //   { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  // ]);
  // const [filter, setFilter] = useState("");

  // useEffect(() => {
  //   const localContacts = window.localStorage.getItem("contacts");
  //   const parsedContacts = JSON.parse(localContacts);
  //   if (parsedContacts) {
  //     setContacts(parsedContacts);
  //   }
  // }, []);

  // const firstRender = useRef(true);

  // useEffect(() => {
  //   if (firstRender.current) {
  //     firstRender.current = false;
  //     return;
  //   }
  //   window.localStorage.setItem("contacts", JSON.stringify(contacts));
  // }, [contacts]);

  // const addContact = ({ name, number }) => {
  //   const contact = {
  //     id: shortid.generate(),
  //     name,
  //     number,
  //   };

  //   const equalContact = contacts.find((c) => c.name.includes(name));

  //   if (equalContact) {
  //     alert(`${name} is already in contacts`);
  //   } else {
  //     setContacts((contacts) => [contact, ...contacts]);
  //   }
  // };

  // const filterContacts = () => {
  //   const toLowerCaseFilter = filter.toLowerCase();
  //   return contacts.filter((contact) =>
  //     contact.name.toLowerCase().includes(toLowerCaseFilter)
  //   );
  // };

  // const filterChange = (e) => {
  //   setFilter(e.currentTarget.value);
  // };

  // const onDelete = (id) => {
  //   setContacts(contacts.filter((contact) => contact.id !== id));
  // };

  // const formSubmit = (data) => {
  //   addContact(data);
  // };
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <div className="wrapper">
      <h1>Phonebook</h1>
      <ContactForm contactList={contacts} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default connect()(App);
