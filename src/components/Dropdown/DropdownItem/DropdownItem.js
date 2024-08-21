import classnames from 'classnames';
import './DropdowinItem.scss';

export default function DropdownItem({ label, onClick, isActive }) {
  const className = classnames('dropdown-item', {
    'dropdown-item--active': isActive
  });

  return (
    <div className={className} onClick={onClick}>
      {label}
    </div>
  );
}
