import { useEffect } from "react";
import { Navbar as RBNavbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import useSetState from "react-use-setstate";
import { Link } from "react-router-dom";
import { Code } from "react-feather";

import { Heading } from '../typography'
import Image from '../image'
import { listOrganizationsAPI } from '../../apis/organizations'
import * as styles from './Navbar.styled'
import { getImageURL } from "../../utils";

const OrganizationCard = ({ organization, user, active, imageSize }) => {

    const handleGetPersonalOrganizationName = (user) => {
        if (user.first_name) {
            return user.first_name + " " + user.last_name
        } else if (user.username) {
            return user.username
        } else {
            return user.email
        }
    }

    if (!organization) return null

    return (
        <styles.Organization active={active}>
            {
                organization?.is_personal
                    ? <>
                        <Image src={getImageURL(user.profile?.image_thumbnail)}
                            roundedCircle
                            size={imageSize}
                        />
                        <div className="mx-2 title">
                            {handleGetPersonalOrganizationName(user)}
                        </div>
                    </>
                    : <>
                        <Image src={getImageURL(organization.image_thumbnail)}
                            roundedCircle
                            size={imageSize}
                        />
                        <div className="mx-2 title">
                            {organization.name}
                        </div>
                    </>
            }
        </styles.Organization>
    )
}

OrganizationCard.defaultProps = {
    imageSize: "thumbnail"
}

const Navbar = props => {
    const [state, setState] = useSetState({
        organizations: [],
        activeOrganization: null,
    })

    const dispatch = useDispatch()

    const isAuthenticated = useSelector(state => state.user.isAuthenticated)
    const user = useSelector(state => state.user.info)

    useEffect(() => {
        if (isAuthenticated) {
            listOrganizationsAPI().then(res => {
                const { results } = res.data
                setState({ organizations: results, activeOrganization: results[0] })
                dispatch({ type: "SET_ORGANIZATIONS", payload: results })
                dispatch({ type: "SET_ACTIVE_ORGANIZATION", payload: results[0] })
            })
        }
    }, [isAuthenticated])


    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }

    const handleSelectOrganization = (organization) => {
        setState({ activeOrganization: organization })
        dispatch({ type: "SET_ACTIVE_ORGANIZATION", payload: organization })
    }


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
                        />
                        <Heading variant={6} className='mx-2'>Hoopoe</Heading>
                    </RBNavbar.Brand>
                    {isAuthenticated && <>
                        <styles.VerticalDivider />
                        <styles.NavDropdown
                            title={<styles.Organization>
                                <OrganizationCard organization={state.activeOrganization} user={user} 
                                    active={true}
                                />
                                <Code className="anchor" size={15} />
                            </styles.Organization>
                            }
                        >
                            <NavDropdown.Header>Personal Account</NavDropdown.Header>
                            {state.organizations
                                .filter(organization => organization.is_personal)
                                .map(organization => <NavDropdown.Item
                                    key={organization.uuid}
                                    onClick={() => handleSelectOrganization(organization)}
                                >
                                    <OrganizationCard
                                        organization={organization} user={user}
                                        active={state.activeOrganization.uuid === organization.uuid}
                                        imageSize={'xs'}
                                    />
                                </NavDropdown.Item>)}

                            {state.organizations
                                .filter(organization => !organization.is_personal).length > 0 && <NavDropdown.Header>Teams</NavDropdown.Header>}
                            {state.organizations
                                .filter(organization => !organization.is_personal)
                                .map(organization => <NavDropdown.Item
                                    key={organization.uuid}
                                    onClick={() => handleSelectOrganization(organization)}
                                >
                                    <OrganizationCard
                                        organization={organization} user={user}
                                        active={state.activeOrganization.uuid === organization.uuid}
                                        imageSize={'xs'}
                                    />
                                </NavDropdown.Item>)}

                            <NavDropdown.Divider />
                            <NavDropdown.Item
                            >Create Team</NavDropdown.Item>
                        </styles.NavDropdown>
                    </>}
                </div>
                <RBNavbar.Toggle />
                <RBNavbar.Collapse className='d-flex justify-content-end'>
                    <Nav className="align-items-center">
                        {/* <Nav.Link as={Link} to='/'>Home</Nav.Link> */}
                        {
                            !isAuthenticated
                                ? <>
                                    <Nav.Link as={Link} to='/auth/login'>Login</Nav.Link>
                                    <Nav.Link as={Link} to='/auth/register'>Register</Nav.Link>
                                </>
                                : <>
                                    <Nav.Link href='/'>Support</Nav.Link>
                                    <Nav.Link href='/'>Docs</Nav.Link>
                                    <styles.NavDropdown
                                        title={<div>
                                            <Image src={getImageURL(user.profile?.image_thumbnail)}
                                                roundedCircle
                                                size="thumbnail"
                                            />
                                        </div>}
                                    >
                                        <NavDropdown.Item>Edit Profile</NavDropdown.Item>
                                        <NavDropdown.Item>Settings</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            onClick={handleLogout}
                                        >Logout</NavDropdown.Item>
                                    </styles.NavDropdown>
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