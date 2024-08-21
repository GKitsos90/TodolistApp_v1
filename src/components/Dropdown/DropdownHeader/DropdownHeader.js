import './DropdownHeader.scss';
import ChevronTop from './../../../assets/chevron-top.svg';

export default function DropdownHeader({ value, onClick }) {
  return (
    <div className="dropdown-header" onClick={onClick}>
      <span>{value}</span>

      <img
        src={ChevronTop}
        alt="chevron-top"
        className="dropdown-header__icon"
      />
    </div>
  );
}
