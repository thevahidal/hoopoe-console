import styled from 'styled-components'  
import { NavDropdown as RBNavDropdown } from 'react-bootstrap'

export const Wrapper = styled.div`
    background-color: ${({theme}) => theme.colors.navbar};
`

export const Organizations = styled.div`
    background-color: ${({theme}) => theme.colors.navbar};
`

export const NavDropdown = styled(RBNavDropdown)`
    a {
        :after {
            content: none;
        }
    }
`

export const VerticalDivider = styled.div`
    width: 1px;
    height: 25px;
    background-color: ${({theme}) => theme.colors.gray};
`

export const Organization = styled.div`
    display: flex;
    align-items: center;

    .title {
        color: ${({theme}) => theme.colors.text};

        ${
            p => p.active && `
                font-weight: bold;
            `
        }
    }

    .anchor {
        color: ${({theme}) => theme.colors.text};
        transform: rotate(90deg);
    }
`