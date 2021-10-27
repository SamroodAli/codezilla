import * as React from 'react';
import { Pagination } from 'baseui/pagination';
import PropTypes from 'prop-types';

const Paginator = ({ pages }) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  return (
    <Pagination
      numPages={Math.ceil(pages)}
      currentPage={currentPage}
      onPageChange={({ nextPage }) => {
        setCurrentPage(
          Math.min(Math.max(nextPage, 1), 20),
        );
      }}
    />
  );
};

Paginator.propTypes = {
  pages: PropTypes.number.isRequired,
};

export default Paginator;
