import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { StyledLink } from 'baseui/link';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Nav = ({ button }) => (
  <div style={{ position: 'sticky', top: 0 }}>
    <HeaderNavigation>
      <StyledNavigationList $align={ALIGN.left}>
        <StyledNavigationItem>
          <StyledLink>
            <Link to="/">
              COdZilla
            </Link>
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.center} />
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          <StyledLink>
            <Link to="/courses">
              Courses
            </Link>
          </StyledLink>
        </StyledNavigationItem>
      </StyledNavigationList>
      <StyledNavigationList $align={ALIGN.right}>
        <StyledNavigationItem>
          {button}
        </StyledNavigationItem>
      </StyledNavigationList>
    </HeaderNavigation>
  </div>
);

Nav.propTypes = {
  button: PropTypes.node.isRequired,
};

export default Nav;
