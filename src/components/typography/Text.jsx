import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import * as styles from './Text.styled'

const Text = ({ children, className, type, href, ...props }) => {
    const handleType = () => {
        switch (type) {
            case 'link':
                return <Link to={href}>{children}</Link>
            default:
                return children
        }
    }

    return (
        <styles.Text className={`${className} ${props.muted ? 'text-muted' : ''}`} {...props}>
            {handleType()}
        </styles.Text>
    )
}

Text.propTypes = {
    children: PropTypes.string,
    className: PropTypes.string,
    muted: PropTypes.bool,

    /**
     * Text's type
     */
    type: PropTypes.oneOf(['text', 'link']),

    /**
     * If type is link, this is the link's href
     */
    href: PropTypes.string,
}

Text.defaultProps = {
    children: "",
    className: "",
    muted: false,

    type: 'text',
    href: '',
}

export default Text