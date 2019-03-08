import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import StylesContainer from './styles/StylesContainer';
import AppStoreProvider from './reducers/appReducer';

ReactDOM.render(
    <StylesContainer>
        <AppStoreProvider>
            <App />
        </AppStoreProvider>
    </StylesContainer>,
    document.getElementById('root')
);

serviceWorker.register();
