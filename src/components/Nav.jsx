import * as React from 'react';
import {
  HeaderNavigation,
  ALIGN,
  StyledNavigationList,
  StyledNavigationItem,
} from 'baseui/header-navigation';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  DisplayMedium, LabelLarge,
} from 'baseui/typography';

const Nav = ({ button }) => (
  <HeaderNavigation>
    <StyledNavigationList $align={ALIGN.left}>
      <StyledNavigationItem>
        <Link to="/">
          <DisplayMedium>CodeZilla</DisplayMedium>
        </Link>
      </StyledNavigationItem>
    </StyledNavigationList>
    <StyledNavigationList $align={ALIGN.center} />
    <StyledNavigationList $align={ALIGN.right}>
      <StyledNavigationItem>
        <Link to="/courses">
          <LabelLarge>

            Courses
          </LabelLarge>

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
