import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import useActions from '../hooks/useActions';
import BaseWeb from '../components/BaseWeb';

const BaseWebContainer = ({ children }) => {
  const theme = useSelector(({ theme }) => theme);
  const { setTheme } = useActions();

  return <BaseWeb theme={theme} setTheme={setTheme}>{ children}</BaseWeb>;
};
BaseWebContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseWebContainer;
