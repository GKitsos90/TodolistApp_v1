import classNames from 'classnames';
import './Btn.scss';

export default function Btn({ children, onClick, type = 'primary' }) {
  const className = classNames('btn', {
    'btn--primary': type === 'primary',
    'btn--secondary': type === 'secondary'
  });

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}
