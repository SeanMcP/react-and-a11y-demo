import React from 'react';
import RecRating from './RecRating';

function Rec({ author, date, description, id, rating, tags, title, url }) {
    const _date = new Date(date);
    return (
        <div>
            <div>
                <a href={url}>
                    {title} ({url.slice(url.indexOf('//') + 2)})
                </a>
            </div>
            <div>
                By {author} at {_date.toLocaleTimeString()} on{' '}
                {_date.toLocaleDateString()}
            </div>
            <div>{description}</div>
            <div>
                {tags.map((tag) => (
                    <a key={tag} href={`#${tag}`}>
                        #{tag}
                    </a>
                ))}
            </div>
            <RecRating id={id} rating={rating} />
        </div>
    );
}

export default Rec;
