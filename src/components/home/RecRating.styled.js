import styled, { css } from 'styled-components';

export const Container = styled.div`
    display: flex;
`;

export const Rating = styled.div`
    align-items: center;
    border: 1px solid gray;
    border-radius: 0.25em;
    cursor: pointer;
    display: flex;
    padding: 0.5em;

    &:not(:last-of-type) {
        margin-right: 0.5em;
    }

    ${(p) => {
        switch (p.type) {
            case 'angry':
                return css`
                    border-color: ${p.theme.rating_angry};
                `;
            case 'thoughtful':
                return css`
                    border-color: ${p.theme.rating_thoughtful};
                `;
            case 'like':
                return css`
                    border-color: ${p.theme.rating_like};
                `;
            case 'sad':
                return css`
                    border-color: ${p.theme.rating_sad};
                `;
            default:
                return css``;
        }
    }}
`;

export const Emoji = styled.span`
    font-size: 125%;
`

export const Bubble = styled.span`
    background: rgba(0, 0, 0, 0.125);
    border-radius: 0.5em;
    font-size: 75%;
    margin-left: 0.5em;
    padding: 0 0.25em;
`
