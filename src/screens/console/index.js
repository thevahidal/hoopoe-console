import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap';
import { Outlet, useNavigate } from "react-router-dom";

import Navbar from "../../components/layouts/Navbar";
import Tabs from '../../components/tabs';
import Recipients from './Recipients'
import Upupas from './Upupas'
import * as styles from './index.styled'

const Console = props => {
    const navigate = useNavigate();

    return (
        <div>
            <Navbar />
            <styles.TabsWrapper>
                <Container>
                    <Tabs items={[
                        {
                            label: 'Upupas',
                            onClick: () => {
                                navigate('upupas');
                            }
                        },
                        {
                            label: 'Recipients',
                            onClick: () => {
                                console.log('Recipients')
                            }
                        },
                        {
                            label: 'Settings',
                            onClick: () => {
                                console.log('Settings')
                            }
                        },
                    ]} />
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