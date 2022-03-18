import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate, useLocation } from "react-router-dom";

import Navbar from "../../components/layouts/Navbar";
import Tabs from '../../components/tabs';
import Recipients from './Recipients'
import Upupas from './Upupas'
import * as styles from './index.styled'

const Console = props => {
    const navigate = useNavigate();
    const location = useLocation();

    const tabs = [
        {
            name: "upupas",
            label: 'Upupas',
            onClick: () => {
                navigate('upupas');
            }
        },
        {
            name: "recipients",
            label: 'Recipients',
            onClick: () => {
                navigate('recipients');
            }
        },
        {
            name: "settings",
            label: 'Settings',
            onClick: () => {
                console.log('Settings')
            }
        },
    ]

    return (
        <div>
            <Navbar />
            <styles.TabsWrapper>
                <Container>
                    <Tabs
                        defaultActive={tabs.findIndex(tab => tab.name === location.pathname.split('/')[1])}
                        items={tabs} />
                </Container>
            </styles.TabsWrapper>
            <Container className='py-4'>
                <Outlet />
            </Container>
        </div>
    )
}

Console.propTypes = {
    children: PropTypes.node,
}

Console.defaultProps = {
    children: null,
}

export default Console;

export {
    Recipients,
    Upupas,
}