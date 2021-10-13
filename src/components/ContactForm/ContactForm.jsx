import { useState } from "react";
import { useDispatch } from "react-redux";
import phoneBookActions from "../../redux/phoneBookActions";
// import { connect } from "react-redux";

import s from "./ContactForm.module.css";

function ContactForm({ contactList }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  console.log(contactList);
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;
      case "number":
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    const validName = name.trim();
    const equalName = contactList.find((contact) => name === contact.name);

    if (equalName) {
      return alert(`${name} is already in contacts`);
    }
    if (validName) {
      dispatch(phoneBookActions.addContact({ name, number }));
      reset();
    }
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.formLabel}>
        Name
        <input
          className={s.formInput}
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
      </label>

      <label className={s.formLabel}>
        Number
        <input
          className={s.formInput}
          type="text"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
      </label>
      <button className={s.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

// const mapStateToProps = ({ contacts: contacts }) => ({ contacts });
// const mapDispatchToProps = (dispatch) => ({
//   onSubmit: ({ name, number }) =>
//     dispatch(phoneBookActions.addContact({ name, number })),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
export default ContactForm;
