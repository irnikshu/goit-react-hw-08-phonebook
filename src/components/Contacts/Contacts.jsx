import styles from './contacts.module.scss';
import PropTypes from 'prop-types';

const ContactsList = ({ items, deleteContact }) => {
  return (
    <ul className={styles.contactList}>
      {items.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          {name}: {number}
          <button
            className={styles.deleteBtn}
            onClick={() => deleteContact(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func,
};
