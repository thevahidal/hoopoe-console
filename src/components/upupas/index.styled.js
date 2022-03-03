import styled from 'styled-components'
import { Card } from 'react-bootstrap'

export const Extra = styled(Card.Text)`
    pre {
        overflow: hidden;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
    }
`