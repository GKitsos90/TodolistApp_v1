import './Checkbox.scss';
import Checkmark from './../../assets/checkmark.svg';
import classNames from 'classnames';

export default function Checkbox({ value, label, onChange }) {
  const className = classNames('checkbox', {
    'checkbox--checked': value
  });

  return (
    <div className={className} onClick={(e) => e.stopPropagation()}>
      <label className="checkbox__label">
        <input
          className="checkbox__input"
          type="checkbox"
          onChange={onChange}
          value={value}
        />

        <div className="checkbox__icon-wrapper">
          <img className="checkbox__icon" src={Checkmark} alt="check-mark" />
        </div>

        <span className="checkbox__text">{label}</span>
      </label>
    </div>
  );
}
