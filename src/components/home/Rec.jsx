import React from 'react';
import RecRating from './RecRating';

import * as S from './Rec.styled';

function formatUrl(url) {
    const str = url.slice(url.indexOf('//') + 2);
    return str.indexOf('/') >= 0 ? str.substring(0, str.indexOf('/')) : str;
}

function Rec({ author, date, description, id, rating, tags, title, url }) {
    const _date = new Date(date);
    return (
        <S.Container>
            <S.Heading>
                <a href={url}>
                    {title} ({formatUrl(url)})
                </a>
            </S.Heading>
            <S.Meta>
                By {author} at {_date.toLocaleTimeString()} on{' '}
                {_date.toLocaleDateString()}
            </S.Meta>
            <div>{description}</div>
            <div>
                {tags.map((tag) => (
                    <S.Tag key={tag} href={`#${tag}`}>
                        #{tag}
                    </S.Tag>
                ))}
            </div>
            <RecRating id={id} rating={rating} />
        </S.Container>
    );
}

export default Rec;
