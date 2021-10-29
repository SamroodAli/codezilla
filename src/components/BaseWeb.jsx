import PropTypes from 'prop-types';
import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider, DebugEngine } from 'styletron-react';
import { BaseProvider, LightTheme, DarkTheme } from 'baseui';
import { Button } from 'baseui/button';
import { Block } from 'baseui/block';
import Nav from './Nav';

const debug = process.env.NODE_ENV === 'production' ? undefined : new DebugEngine();
const engine = new Styletron();

const THEME = {
  light: 'light',
  dark: 'dark',
};

const toggleTheme = (theme) => (theme === THEME.light ? THEME.dark : THEME.light);

const BaseWeb = ({ theme, setTheme, children }) => (
  <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    <BaseProvider theme={theme === THEME.light ? LightTheme : DarkTheme}>
      <Nav button={(
        <Button onClick={() => setTheme(toggleTheme(theme))}>
          {`Go ${toggleTheme(theme)}`}
        </Button>
          )}
      />
      <Block
        backgroundColor="primaryB"
        height="100vh"
      >
        {children}
      </Block>
    </BaseProvider>
  </StyletronProvider>
);

BaseWeb.propTypes = {
  theme: PropTypes.string.isRequired,
  setTheme: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default BaseWeb;
