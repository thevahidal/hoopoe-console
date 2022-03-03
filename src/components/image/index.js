import { PropTypes } from "prop-types";

import * as styles from "./index.styled"

const getExtraPropsByType = (type) => {
    switch (type) {
        case '':

            break;

        default:
            break;
    }
}

const getWidth = (size) => {
    switch (size) {
        case 'xs':
            return 25;
        case 'thumbnail':
            return 30
        case 'sm':
            return 60
        case 'lg':
            return 100
        default:
            return 60
    }
}

const Image = ({ src, alt, className, type, size, ...props }) => {
    const extraProps = getExtraPropsByType(type);
    const width = getWidth(size);

    return (
        <styles.Image src={src || ""} alt={alt} className={className} width={width} {...props} />
    )
}

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(['', 'avatar']),
    size: PropTypes.oneOf(['thumbnail', 'sm', 'md', 'lg']),
}

Image.defaultProps = {
    src: '',
    alt: '',
    className: '',
    type: '',
    size: 'sm',
}

export default Image