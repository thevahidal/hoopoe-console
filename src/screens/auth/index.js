import { Outlet } from "react-router"

import Navbar from "../../components/layouts/Navbar"
import * as styles from './index.styled'
import Login from './Login'
import Register from './Register'

const Auth = props => {

    return (
        <div>
            <Navbar />
            <styles.Wrapper>

                <styles.Form>
                    <Outlet />
                </styles.Form>
            </styles.Wrapper>
        </div>
    )
}

export default Auth

export {
    Login,
    Register,
}