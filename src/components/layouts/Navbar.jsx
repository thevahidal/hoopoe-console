import { useEffect } from "react";
import { Navbar as RBNavbar, Nav, Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import useSetState from "react-use-setstate";

import { Heading } from '../typography'
import { organizationsAPI } from '../../apis/users'

import * as styles from './Navbar.styled'

const Navbar = props => {
    const [state, setState] = useSetState({
    })

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    useEffect(() => {
        if (isAuthenticated) {
            organizationsAPI().then(res => {
                console.log(res)
            })
        }
    }, [isAuthenticated])

    return (<styles.Wrapper>
        <RBNavbar>
            <Container className='py-2'>
                <div className="d-flex align-items-center">
                    <RBNavbar.Brand className='d-flex align-items-center'>
                        <img
                            alt="brand logo"
                            src="/logo192.png"
                            width="30"
                            height="30"
                        />{' '}
                        <Heading variant={6} className='mx-2'>Hoopoe</Heading>
                    </RBNavbar.Brand>
                    {'|'}
                </div>
                <RBNavbar.Toggle />
                <RBNavbar.Collapse className='d-flex justify-content-end'>
                    <Nav>
                        {/* <Nav.Link href='/'>Home</Nav.Link> */}
                        {
                            !isAuthenticated
                                ? <>
                                    <Nav.Link href='/auth/login'>Login</Nav.Link>
                                    <Nav.Link href='/auth/register'>Register</Nav.Link>
                                </>
                                : <>
                                    <Nav.Link href='/profile'>Profile</Nav.Link>
                                </>
                        }
                    </Nav>
                </RBNavbar.Collapse>
            </Container>
        </RBNavbar>
    </styles.Wrapper>)
}

Navbar.propTypes = {}

Navbar.defaultProps = {}

export default Navbar