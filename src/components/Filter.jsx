import useActions from '../hooks/useActions';

const Filter = () => {
  const { setFilter } = useActions();
  return (
    <form>
      <input type="radio" id="css" onClick={() => setFilter('React')} />
      <input type="radio" id="css" onClick={() => setFilter('Angular')} />
      <input type="radio" id="css" onClick={() => setFilter('Vue')} />
    </form>
  );
};

export default Filter;
