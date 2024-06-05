import React from 'react';

import './button.css';

function Button({ buttonType, children, handleClick }) {
  return (
    <button onClick={handleClick} type={buttonType}>
      {children}
    </button>
  );
}

export default Button;
