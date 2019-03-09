import styled from 'styled-components'

export const Button = styled.div`
    border: 1px solid ${p => p.inverse ? 'white' : p.theme.primary_background};
    border-radius: 0.25em;
    cursor: pointer;
    padding: 0.25em 0.5em;
`