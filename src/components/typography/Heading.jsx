import PropTypes from 'prop-types'

import * as styles from './Heading.styled'

const Heading = ({ children, variant, ...props }) => {
    const getElementByVariant = (_variant) => {
        if (!_variant || _variant > 6 || _variant < 1) return 'h2'
        else return 'h' + _variant
    }

    return (
        <styles.Heading as={getElementByVariant(variant)} {...props}>{children}</styles.Heading>
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