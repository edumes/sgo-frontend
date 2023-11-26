import 'react-toastify/dist/ReactToastify.css';
import React, { ReactNode, useContext } from 'react';
import { CustomProvider as RsuiteProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import { useTheme } from 'next-themes';

import { ToastContainer, Slide } from "react-toastify";

interface RsuiteThemeProviderProps {
  children: ReactNode;
}

const RsuiteThemeProvider: React.FC<RsuiteThemeProviderProps> = ({ children }) => {
  const { theme } = useTheme();
  const rsuiteTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <RsuiteProvider locale={ptBR} theme={rsuiteTheme}>
      {children}
      <ToastContainer autoClose={3000} theme={rsuiteTheme} newestOnTop={true} transition={Slide} />
    </RsuiteProvider>
  );
};

export default RsuiteThemeProvider;