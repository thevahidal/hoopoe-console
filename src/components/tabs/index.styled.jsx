import styled from "styled-components"

import CButton from "../button"

export const Wrapper = styled.div`
    position: relative;
`

export const TabsWrapper = styled.div`
    display: flex;
`

export const ActiveBar = styled.div`
    display: flex;
    height: 3px;
    bottom: 0;

    border-radius: 10px;
    position: absolute;
    background: ${({ theme }) => theme.colors.text};
`

export const Button = styled(CButton)`
    border-radius: 0;
    background: none !important;
    border: none;
    * {
        color: ${({ theme }) => theme.colors.darkGray};
    }

    ${
        p => p.active && `

            * {
                color: ${p.theme.colors.text} !important;
            }
        `
    }
`
