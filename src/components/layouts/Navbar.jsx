import { Navbar as RBNavbar, Nav, Container } from "react-bootstrap";

import { Heading } from '../typography'

import * as styles from './Navbar.styled'

const Navbar = props => {

    return (<styles.Wrapper>
        <RBNavbar>
            <Container className='py-2'>
                <RBNavbar.Brand className='d-flex align-items-center'>
                    <img
                        alt="brand logo"
                        src="/logo192.png"
                        width="30"
                        height="30"
                    />{' '}
                    <Heading variant={6} className='mx-2'>Hoopoe</Heading>
                </RBNavbar.Brand>
                <RBNavbar.Toggle />
                <RBNavbar.Collapse>
                    <Nav>
                        {/* <Nav.Link>Link</Nav.Link> */}
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    </styles.Wrapper>)
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar