import React, { Children } from 'react';
import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/GetClasses';

const buttonTypes = {
  primary: 'primary',
  secondary: 'secondary',
};
function Button({ children, variant, type, ...rest }) {
  return (
    <button
      className={getClasses([
        styles.button,
        styles['button--{buttonTypes[variant]}'],
      ])}
      type="button"
      // type={type === 'submit' ? 'submit' : 'botton'}
      {...rest} // to pass more informations as i continue.
    >
      {children}
    </button>
  );
}
function SelectButton({ children, ...rest }) {
  return (
    <select
      className={getClasses([styles.button, styles.button__select])}
      {...rest}
    >
      {children}
    </select>
  );
}
export { SelectButton };
export default Button;
