import { Global, ThemeProvider } from '@emotion/react';
import type { ReactNode } from 'react';
import { globalStyles } from './globalStyles';
import { theme } from './theme';

export function AppStyleProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}
