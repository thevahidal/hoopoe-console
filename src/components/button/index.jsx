import { forwardRef } from "react"
import { useTheme } from "styled-components"
import PropTypes from 'prop-types'

import * as styles from "./index.styled"
import Text from '../typography/Text'

/**
 * Button component
 *
 * @component
 * @example
 * return (
 *   <Button loading={false} disabled={false} icon={(p) => <RefreshCw {...p} />} iconRotating={false}>
 *     Refresh
 *   </Button>
 * )
 */
const Button = ({ iconRotating, loading, loadingText, icon, color, fullWidth, ...props }, ref) => {
    const theme = useTheme()
    
    return (
        <styles.Button
            {...props}
            $hasChildren={props.children}
            $iconRotating={iconRotating}
            disabled={props.disabled || loading}
            $fullWidth={fullWidth}
            ref={ref}
        >
            {icon && <span className='icon'>
                {
                    icon({
                        size: 17,
                        color: theme.colors.text,
                    })
                }
            </span>}
            {
                props.children && <Text color={color}>
                    {!loading ? props.children : loadingText}
                </Text>
            }
        </styles.Button>
    )
}

// Button.propTypes = {
//     /**
//      * Button's text
//      */
//     children: PropTypes.string,

//     /**
//      * Button's loading state
//      * If true, button will be disabled 
//      * and loadingText will be shown instead of button's text
//      */
//     loading: PropTypes.bool,

//     /**
//      * Button's loading text
//      */
//     loadingText: PropTypes.string,

//     /**
//      * Button's disable state
//      */
//     disabled: PropTypes.bool,

//     /**
//      * Button's icon
//      */
//     icon: PropTypes.oneOfType([
//         PropTypes.node,
//         PropTypes.func,
//     ]),

//     /**
//      * If true, button's icon start rotating
//      */
//     iconRotating: PropTypes.bool,

//     /**
//      * Button's text color
//      */
//     color: PropTypes.string,

//     /**
//      * Whether button is full width
//      */
//     fullWidth: PropTypes.bool,
// }

export default forwardRef(Button);
