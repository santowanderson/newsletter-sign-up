import React from 'react';

import './button.css';

function Button({ buttonType, children, handleClick }) {
  return (
    <button onClick={handleClick} type={buttonType} id="button">
      {children}
    </button>
  );
}

export default Button;
