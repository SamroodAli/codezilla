import * as React from 'react';
import { Pagination } from 'baseui/pagination';
import PropTypes from 'prop-types';

const Paginator = ({ pages, currentPage, setCurrentPage }) => (
  <Pagination
    numPages={Math.ceil(pages)}
    currentPage={currentPage}
    onPageChange={({ nextPage }) => {
      setCurrentPage(
        Math.min(Math.max(nextPage, 1), pages),
      );
    }}
  />
);

Paginator.propTypes = {
  pages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default Paginator;
