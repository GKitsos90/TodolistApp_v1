import Input from './../Input/Input';
import { ReactComponent as SearchIcon } from './../../assets/search-icon.svg';

export default function Search(props) {
  return (
    <div className="search">
      <Input placeholder="Search note" {...props}>
        <SearchIcon />
      </Input>
    </div>
  );
}
