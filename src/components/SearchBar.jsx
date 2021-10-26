import { useState } from 'react';
import { useActions } from '../hooks';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const { searchVideos } = useActions();

  const onSubmit = (e) => {
    e.preventDefault();
    searchVideos(term);
  };

  return (
    <form className="ui form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="search">
          Youtube Search
          <input
            id="search"
            text=""
            type="text"
            placeholder="Search here"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </label>
      </div>
    </form>
  );
};

export default SearchBar;
