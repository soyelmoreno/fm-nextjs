import React from 'react';
import amazing from './NavButton.module.css';

function NavButton({ onClick, label }) {
  return (
    <button className={amazing.bgPink} onClick={onClick}>
      {label}
    </button>
  );
}

export default NavButton;
