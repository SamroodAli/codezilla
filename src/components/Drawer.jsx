import { useState } from 'react';
import { Drawer, ANCHOR } from 'baseui/drawer';
import Filters from './Filter';

const FilterOptions = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Drawer
      isOpen={isOpen}
      autoFocus
      onClose={() => setIsOpen(false)}
      anchor={ANCHOR.bottom}

    >
      <Filters />
    </Drawer>
  );
};

export default FilterOptions;
