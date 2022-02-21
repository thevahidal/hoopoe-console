import PropTypes from 'prop-types';
import useSetState from 'react-use-setstate';
import { useTheme } from 'styled-components';

import * as styles from './index.styled'

const Tabs = ({ items, defaultActive, ...props }) => {
    const [state, setState] = useSetState({
        active: defaultActive,
    })

    const theme = useTheme();

    const handleClick = (id, onClick) => {
        setState({
            active: id,
        })
        onClick()
    }

    return (
        <styles.Wrapper>
            {
                items.map((item, index) => (
                    <styles.Button
                        key={index}
                        onClick={() => handleClick(index, item.onClick)}
                        active={state.active === index}
                        color={theme.colors.text}
                        className='pt-2 pb-3'
                    >
                        {item.label}
                    </styles.Button>
                ))
            }
        </styles.Wrapper>
    )
}

Tabs.propTypes = {
    /**
     * The items to be rendered
     * Each item must have a label and an onClick function
     * The onClick function will be called when the item is clicked
     * The label will be rendered as the button text
     */
    items: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        onClick: PropTypes.any,
    })),

    /**
     * The default active tab index starting from 0
     * It will be rendered as active
     */
    defaultActive: PropTypes.number,
}

Tabs.defaultProps = {
    items: [],
    defaultActive: 0,
}

export default Tabs