import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";

import Navbar from "../../components/layouts/Navbar";
import Recipients from './Recipients'

const Console = props => {

    return (
        <div>
            <Navbar />
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
}