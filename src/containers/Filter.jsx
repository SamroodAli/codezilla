import { useSelector } from 'react-redux';
import useActions from '../hooks/useActions';
import Filter from '../components/Filter';

const FilterContainer = () => {
  const { setFilter } = useActions();
  const filterState = useSelector(({ filters }) => filters);
  return <Filter filterState={filterState} setFilter={setFilter} />;
};

export default FilterContainer;
