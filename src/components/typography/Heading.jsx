import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledH2 = styled.h2`
    margin: 0;
    font-weight: bold;
    line-height: 1;
    color: ${p => p.theme.colors.heading};
`

const Heading = ({ children, variant, ...props }) => {
    const getElementByVariant = (_variant) => {
        if (!_variant || _variant > 6 || _variant < 1) return 'h2'
        else return 'h' + _variant
    }

    return (
        <StyledH2 as={getElementByVariant(variant)} {...props}>{children}</StyledH2>
    )
}

Heading.propTypes = {
    children: PropTypes.string,
    variant: PropTypes.number.isRequired,
}

Heading.defaultProps = {
    children: "",
    variant: 2,
}

export default Heading