import styled from "styled-components"
import { Image as RBImage } from "react-bootstrap";

export const Image = styled(RBImage)`
    width: ${p => p.width}px;

    ${
        p => !p.src && `
            height: ${p.width}px;
        `
    }
`
