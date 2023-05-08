// == Import : npm
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

// == Import : local
import './style.scss';
import { useState } from 'react';

// == Composant
function Field({
  type,
  name,
  placeholder,
}) {
  const value = useSelector((state) => state.users[name]);
  const [inputValue, setInputValue] = useState('');


  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const inputId = `field-${name}`;

  return (
    <div className={value.length > 0 ? 'field field--has-content' : 'field'}>
      <input
        // React - state
        value={inputValue}
        onChange={handleChange}
        // infos de base
        id={inputId}
        type={type}
        className="field-input"
        placeholder={placeholder}
        name={name}
      />

      <label
        htmlFor={inputId}
        className="field-label"
      >
        {placeholder}
      </label>
    </div>
  );
}

Field.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

// Valeurs par défaut pour les props
Field.defaultProps = {
  type: 'text',
};

// == Export
export default Field;
