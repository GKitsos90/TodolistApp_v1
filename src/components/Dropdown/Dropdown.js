import './Dropdown.scss';
import DropdownContainer from './DropdownContainer/DropdownContainer';
import DropdownHeader from './DropdownHeader/DropdownHeader';
import DropdownItem from './DropdownItem/DropdownItem';
import classnames from 'classnames';

import { useEffect, useState } from 'react';

export default function Dropdown({
  value,
  onChange,
  options = [],
  placeholder = 'Select option'
}) {
  const [open, setOpen] = useState(false);

  const className = classnames('dropdown', {
    'dropdown--open': open
  });

  const headerValue = options.find((option) => option.value === value).label;

  const handleDropdownItemClick = (option) => {
    onChange(option.value);
    setOpen(false);
  };

  useEffect(() => {
    function handleOutsideClick(event) {
      if (event.target.closest('.dropdown')) {
        return;
      }

      setOpen(false);
    }

    document.addEventListener('click', handleOutsideClick);

    return () => document.removeEventListener('click', handleOutsideClick);
  });

  return (
    <div className={className}>
      <DropdownHeader
        value={headerValue ?? placeholder}
        onClick={() => setOpen(!open)}
      />

      <DropdownContainer>
        {options.map((option, idx) => (
          <DropdownItem
            key={idx}
            label={option.label}
            isActive={option.value === value}
            onClick={() => handleDropdownItemClick(option)}
          />
        ))}
      </DropdownContainer>
    </div>
  );
}
