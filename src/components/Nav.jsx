import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ button }) => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <Link to="/">
          COdZilla
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <Link to="/courses">
          Courses
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        {button}
      </StyledNavigationItem>
    </StyledNavigationList>
  </HeaderNavigation>
);

Nav.propTypes = {
  button: PropTypes.node.isRequired,
};

export default Nav;
