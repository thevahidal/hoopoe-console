import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledP = styled.p`
    margin: 0;
    line-height: 1;
    color: ${p => p.theme.colors.text};
`

const Text = ({ children, className, ...props }) => {

    return (
        <StyledP className={`${className} ${props.muted ? 'text-muted' : ''}`} {...props}>{children}</StyledP>
    )
}

Text.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    muted: PropTypes.bool,
}

Text.defaultProps = {
    children: "",
    className: "",
    muted: false,
}

export default Text