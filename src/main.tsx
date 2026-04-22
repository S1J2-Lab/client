import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { AppStyleProvider } from './styles/AppStyleProvider';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStyleProvider>
      <App />
    </AppStyleProvider>
  </StrictMode>,
);
