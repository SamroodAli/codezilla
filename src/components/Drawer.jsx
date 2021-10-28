import { useState } from 'react';
import { Drawer, ANCHOR } from 'baseui/drawer';
import { Button } from 'baseui/button';
import {
  Display4,
} from 'baseui/typography';
import Filters from './Filter';

const FilterOptions = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setIsOpen(true)}
        overrides={{
          Root: {
            style: ({ $theme }) => ({
              color: $theme.colors.primaryB,
              backgroundColor: $theme.colors.primaryA,
            }),
          },
        }}
      >
        Filter Courses

      </Button>
      <Drawer
        isOpen={isOpen}
        autoFocus
        onClose={() => setIsOpen(false)}
        anchor={ANCHOR.bottom}
      >
        <Display4 style={{ margin: '1rem' }}>
          Thank you for using CodeZilla
        </Display4>
        <Filters />
      </Drawer>
    </>
  );
};

export default FilterOptions;
