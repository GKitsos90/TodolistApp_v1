import { ReactComponent as Moon } from './../../assets/moon.svg';

import './ThemeBtn.scss';
export default function ThemeBtn({ onClick }) {
  return (
    <div className="theme-btn">
      <button onClick={onClick} className="theme-btn__btn">
        <Moon />
      </button>
    </div>
  );
}
