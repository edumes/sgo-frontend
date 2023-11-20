import React, { ReactNode, useContext } from 'react';
import { CustomProvider as RsuiteProvider } from 'rsuite';
import ptBR from 'rsuite/locales/pt_BR';
import { useTheme } from 'next-themes';

interface RsuiteThemeProviderProps {
  children: ReactNode;
}

const RsuiteThemeProvider: React.FC<RsuiteThemeProviderProps> = ({ children }) => {
  const { theme } = useTheme();
  const rsuiteTheme = theme === 'dark' ? 'dark' : 'light';

  return (
    <RsuiteProvider locale={ptBR} theme={rsuiteTheme}>
      {children}
    </RsuiteProvider>
  );
};

export default RsuiteThemeProvider;