import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './global';
import theme from './theme';

function StylesContainer({ children }) {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                {children}
            </>
        </ThemeProvider>
    );
}

export default StylesContainer;
