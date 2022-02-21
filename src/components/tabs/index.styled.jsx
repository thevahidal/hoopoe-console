import styled from "styled-components"

import CButton from "../button"

export const Wrapper = styled.div`
    display: flex;
`

export const Button = styled(CButton)`
    border-radius: 0;
    background: none !important;
    border: none;

    ${
        p => p.active && `
            border-bottom: 3px solid ${p.theme.colors.text} !important;
            font-weight: bold;
        `
    }
`
