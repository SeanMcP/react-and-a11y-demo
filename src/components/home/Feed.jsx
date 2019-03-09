import React from 'react';
import { AppContext } from '../../reducers/appReducer';
import Rec from './Rec';

function Feed() {
    const {
        state: { recs }
    } = React.useContext(AppContext);
    return (
        <div>
            {recs.map((rec) => (
                <Rec key={rec.id} {...rec} />
            ))}
        </div>
    );
}

export default Feed;
