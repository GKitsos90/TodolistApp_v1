import NotFoundImg from './../../assets/not-found.svg';
import './NotFound.scss';

export default function NotFound() {
  return (
    <div className="not-found">
      <img src={NotFoundImg} alt="Not Found" draggable="false" />
      <p>Empty...</p>
    </div>
  );
}
