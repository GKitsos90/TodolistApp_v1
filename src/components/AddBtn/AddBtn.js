import Plus from './../../assets/plus.svg';
import './AddBtn.scss';

export default function AddBtn({ onClick }) {
  return (
    <button onClick={onClick} className="add-btn">
      <img src={Plus} alt="add" />
    </button>
  );
}
