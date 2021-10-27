import { useState } from 'react';
import { Drawer, ANCHOR } from 'baseui/drawer';
import { Button } from 'baseui/button';
import Filters from './Filter';

const FilterOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)}>Filter Courses</Button>
      <Drawer
        isOpen={isOpen}
        autoFocus
        onClose={() => setIsOpen(false)}
        anchor={ANCHOR.bottom}
      >
        <Filters />
      </Drawer>
    </>
  );
};

export default FilterOptions;
