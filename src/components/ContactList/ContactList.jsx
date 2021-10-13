// import { connect } from "react-redux";
import phoneBookActions from "../../redux/phoneBookActions";
import shortid from "shortid";
import { useSelector, useDispatch } from "react-redux";

import s from "./ContactList.module.css";

const ContactList = () => {
  const getFilteredContacts = (state) => {
    const { items, filter } = state.contacts;
    const normalizeFilter = filter.toLowerCase();
    return items.filter((item) =>
      item.name.toLowerCase().includes(normalizeFilter)
    );
  };
  const contacts = useSelector((state) => getFilteredContacts(state));

  const dispatch = useDispatch();

  const onDelete = (id) => dispatch(phoneBookActions.deleteContact(id));

  return (
    <ul className={s.contactItemsList}>
      {contacts.map(({ name, number, id }) => (
        <li key={shortid.generate()} className={s.contactItem}>
          <p>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.contactDelete}
            onClick={() => onDelete(id)}
          >
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};

// const getVisibleContacts = (allContacts, filter) => {
//   const normalizedFilter = filter.toLowerCase();
//   const visibleContacts = allContacts.filter((contact) =>
//     contact.name.toLowerCase().includes(normalizedFilter)
//   );
//   return visibleContacts;
// };

// const mapStateToProps = ({ contacts: { state } }) => ({
//   contacts: getFilteredContacts(state),
// });

// const mapDispatchToProps = (dispatch) => ({
//   onDelete: (id) => dispatch(phoneBookActions.deleteContact(id)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
export default ContactList;
