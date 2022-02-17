import PropTypes from 'prop-types'
import { Container } from 'react-bootstrap';

import Navbar from "./Navbar";

const ConsoleLayout = props => {

    return (
        <div>
            <Navbar />
            <Container className='py-4'>
                {props.children}
            </Container>
        </div>
    )
}

ConsoleLayout.propTypes = {
    children: PropTypes.node,
}

ConsoleLayout.defaultProps = {
    children: null,
}

export default ConsoleLayout;