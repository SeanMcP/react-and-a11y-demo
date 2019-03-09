import React from 'react';
import { Router } from '@reach/router';

import Layout from './layout/Layout';
import Home from './views/Home';
const Post = () => <div>Post</div>;

function App() {
    return (
        <Layout>
            <Router>
                <Home path="/" exact />
                <Post path="/post" />
            </Router>
        </Layout>
    );
}

export default App;
