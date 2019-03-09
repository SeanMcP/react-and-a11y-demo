import styled from 'styled-components'

export const Container = styled.div`
    background: white;
    border: 1px solid lightgray;
    border-radius: 0.25em;
    box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.125);
    display: grid;
    grid-gap: 1em;
    padding: 1em;
`

export const Heading = styled.div`
    font-size: 125%;
    font-weight: bold;
`

export const Meta = styled.div`
    font-size: 75%;
`

export const Tag = styled.a`
    &:not(:last-of-type) {
        margin-right: 0.5em;
    }
`