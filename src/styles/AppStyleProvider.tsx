import { Global, ThemeProvider } from '@emotion/react';
import type { ReactNode } from 'react';
import { globalStyles } from './globalStyles';
import { theme } from './theme';

interface AppStyleProviderProps {
  children: ReactNode;
}

export function AppStyleProvider({ children }: AppStyleProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProvider>
  );
}