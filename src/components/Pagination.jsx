import * as React from 'react';
import { Pagination } from 'baseui/pagination';
import PropTypes from 'prop-types';
import { Block } from 'baseui/block';

const Paginator = ({ pages, currentPage, setCurrentPage }) => (
  <Block
    backgroundColor="primaryB"
  >
    <Pagination
      numPages={pages}
      currentPage={currentPage}
      onPageChange={({ nextPage }) => {
        setCurrentPage(
          Math.min(Math.max(nextPage, 1), pages),
        );
      }}
    />
  </Block>
);

Paginator.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Paginator;
