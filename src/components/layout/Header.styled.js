import styled from 'styled-components';

import _Button from '../common/Button';

export const Header = styled.div`
    align-items: center;
    background: ${p => p.theme.primary_background};
    color: white;
    display: flex;
    padding: 1em;
`

export const Heading = styled.div`
    font-size: 20px;
    font-weight: bold;
`

export const Tagline = styled.span`
    font-style: italic;
    margin-left: 0.5em;
`

export const Button = styled(_Button)`
    margin-left: auto;
`