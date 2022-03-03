import { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import useSetState from 'react-use-setstate';
import { useTheme } from 'styled-components';

import * as styles from './index.styled'

const ACTIVE_BAR_PADDING = 20;

const Tabs = ({ items, defaultActive, ...props }) => {
    const [state, setState] = useSetState({
        active: defaultActive,
        activeBarLeft: 0,
        activeBarWidth: 0,
    })

    const buttons = useRef([]);
    const theme = useTheme();

    useEffect(() => {
        setState({
            activeBarLeft: buttons.current[state.active].offsetLeft,
            activeBarWidth: buttons.current[state.active].clientWidth,
        })
    }, [])

    const handleClick = (id, onClick) => {
        setState({
            active: id,
        })
        if (onClick) {
            onClick();
        }
        setState({
            activeBarLeft: buttons.current[id].offsetLeft,
            activeBarWidth: buttons.current[id].clientWidth,
        })
    }


    return (
        <styles.Wrapper>
            <styles.TabsWrapper>
                {
                    items.map((item, index) => (
                        <styles.Button
                            key={index}
                            onClick={() => handleClick(index, item.onClick)}
                            active={state.active === index}
                            color={theme.colors.text}
                            className='pt-3 pb-3'
                            ref={el => buttons.current[index] = el}
                        >
                            {item.label}
                        </styles.Button>
                    ))
                }
            </styles.TabsWrapper>
            <styles.ActiveBar style={{
                left: state.activeBarLeft + ACTIVE_BAR_PADDING,
                width: state.activeBarWidth - ACTIVE_BAR_PADDING * 2
            }} />
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