import styled, { keyframes } from "styled-components"
import { Button as RBButton } from "react-bootstrap"

export const rotate = keyframes`
    100% {
        transform: rotate(360deg);
    }
`

export const Button = styled(RBButton)`
    display: flex;
    /* border-radius: ${({ theme }) => theme.sizes.button.radius}px; */
    align-items: center;
    justify-content: center;
    text-align: center;
    
    &:focus {
        outline: 0 !important;
        box-shadow: none !important;
    }

    &:hover {
        opacity: 0.8 !important;
    }

    p {
        transition: none;
    }

    ${p => p.$fullWidth
        ? `width: 100%;`
        : ``
    }    
    ${p => p.$hasChildren
        ? `padding: 0.5rem 1rem;`
        : `padding: 0.5rem;`
    }
    ${p => p.variant === 'transparent' && `
            background-color: rgba(0, 0, 0, 0.1);
        `
    }

    .icon {
        display: flex;
        animation: ${rotate} 1s ${p => p.$iconRotating && `infinite`};

        ${p => p.$hasChildren && `
                margin-right: 0.75rem;
            `
    }
`