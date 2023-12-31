import React from 'react';
import './DropdownMenu.scss';

const DropdownMenu = ({
  value,
  onChange,
  options,
  id,
  openDropdown,
  setOpenDropdown,
}) => {
  const showOptions = openDropdown === id;
  const filteredOptions = options.filter((option) => option !== value);

  return (
    <div className={`dropdown ${showOptions ? 'show-options' : ''}`}>
      <span
        className={`status-pill status-${value}`}
        onClick={() => setOpenDropdown((prev) => (prev === id ? null : id))}
      >
        {value}
      </span>
      {showOptions && (
        <div className='dropdown-content'>
          {filteredOptions.map((option) => (
            <span
              key={option}
              onClick={() => {
                onChange(option);
                setOpenDropdown(null);
              }}
            >
              {option}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
