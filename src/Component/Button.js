import React from 'react';
import PropsTypes from 'prop-types';

const Button = ({
  buttonType,
  extraClassName,
  handleButtonClick,
  children,
}) => {
  return (
    <button
      type={buttonType}
      className={extraClassName}
      onClick={handleButtonClick}>
      {children}
    </button>
  );
};

Button.propsTypes = {
  buttonType: PropsTypes.oneOf(['button', 'submit']).isRequired,
  extraClassName: PropsTypes.string,
  handleButtonClick: PropsTypes.func,
  children: PropsTypes.element.isRequired,
};

Button.defaultProps = {
  buttonType: 'button',
  children: 'Submit',
};

export default Button;
