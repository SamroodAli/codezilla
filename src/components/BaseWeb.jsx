import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { BaseProvider, LightTheme, DarkTheme } from 'baseui';
import { Button } from 'baseui/button';
import useActions from '../hooks/useActions';

const debug = process.env.NODE_ENV === 'production' ? undefined : new DebugEngine();
const engine = new Styletron();

const THEME = {
  light: 'light',
  dark: 'dark',
};

const toggleTheme = (theme) => (theme === THEME.light ? THEME.dark : THEME.light);

const BaseWeb = ({ children }) => {
  const theme = useSelector(({ theme }) => theme);
  const { setTheme } = useActions();

  return (
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
        <Button
          onClick={() => setTheme(toggleTheme)}
        >
          Toggle light/dark theme!
        </Button>
        {children}
      </BaseProvider>
    </StyletronProvider>
  );
};

BaseWeb.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BaseWeb;
