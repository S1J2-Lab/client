import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { AppStyleProvider } from './styles/AppStyleProvider';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppStyleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppStyleProvider>
  </StrictMode>,
);
