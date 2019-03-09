import React from 'react';
import Welcome from '../home/Welcome';
import Feed from '../home/Feed';

function Home(props) {
    return (
        <div>
            <Welcome />
            <Feed />
        </div>
    );
}

export default Home;
