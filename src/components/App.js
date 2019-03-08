import React from 'react';
import { Router } from '@reach/router';
// import { AppContext } from '../reducers/appReducer';

const Home = () => <div>Home</div>;
const Post = () => <div>Post</div>;

function App(props) {
    return (
        <div className="App">
            <Router>
                <Home path="/" exact />
                <Post path="/post" />
            </Router>
        </div>
    );
}

export default App;
