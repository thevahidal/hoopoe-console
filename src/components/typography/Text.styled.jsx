import styled from "styled-components"

export const Text = styled.p`
    margin: 0;
    line-height: 1;
    color: ${p => p.color || p.theme.colors.text};
`
