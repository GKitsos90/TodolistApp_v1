import './Input.scss';

export default function Input({
  placeholder,
  value,
  onChange,
  children // Children expected to be an icon
}) {
  return (
    <div className="input-wrapper">
      <input
        className="input"
        type="text"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />

      <div className='input__icons'>
        {children}  
      </div>
    </div>
  );
}
