import s from "./Filter.module.css";
import phoneBookActions from "../../redux/phoneBookActions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  value: state.contacts.filter,
});
const mapDispatchToProps = (dispatch) => ({
  onChange: (event) =>
    dispatch(phoneBookActions.changeFilter(event.target.value)),
});

function Filter({ value, onChange }) {
  return (
    <div>
      <label className={s.filter}>
        <input
          className={s.filterInput}
          type="text"
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
