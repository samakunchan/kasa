import HeaderComponent from './index';
import { MemoryRouter } from 'react-router-dom';
import ThemeProvider from '../../core/utils/theme-provider';
import { render } from '@testing-library/react';

describe('Given we have a HeaderComponent', () => {
  describe('When the componant is loaded', () => {
    test('Then test if we can see the logo', () => {
      const { getByAltText } = render(
        <ThemeProvider>
          <MemoryRouter>
            <HeaderComponent />
          </MemoryRouter>
        </ThemeProvider>,
      );

      expect(getByAltText('Logo du site')).toBeTruthy();
    });
  });
});
