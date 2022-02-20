import { Outlet } from "react-router"

import * as styles from './index.styled'
import Login from './Login'

const Auth = props => {

    return (<styles.Wrapper>
        <styles.Form>
            <Outlet />
        </styles.Form>
    </styles.Wrapper>)
}

export default Auth

export {
    Login,
}