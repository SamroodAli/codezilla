import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import PropTypes from 'prop-types';

const Nav = ({ button }) => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>Macroverse</StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <StyledLink href="courses">
          Courses
        </StyledLink>
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
