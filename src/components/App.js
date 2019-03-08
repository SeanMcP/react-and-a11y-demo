import React from 'react';
import { AppContext } from '../reducers/appReducer';

function App(props) {
    const { state } = React.useContext(AppContext);
    console.log(state);
    return <div className="App">Hello world!</div>;
}

export default App;
