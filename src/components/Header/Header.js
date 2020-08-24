import React from 'react';

import { ReactComponent as AddIcon } from '../../icons/plus.svg';

import './Header.css';

const Header = ({ handleToggleAddTask }) => {
  return (
    <>
      <header className="header">
        <div className="placeholder-div-1"></div>
        <nav className="navbar">
          <div className="placeholder-div-2"></div>
          <div className="placeholder-div-3"></div>
        </nav>
      </header>
      <div className="sub-header">
        <h2 className="sub-header__title">Dashboard</h2>
        <button
          className="primary-button sub-header__button"
          onClick={handleToggleAddTask}
        >
          <span className="sub-header__icon">
            <AddIcon width="18" />
          </span>
          task
        </button>
      </div>
    </>
  );
};

export default Header;
