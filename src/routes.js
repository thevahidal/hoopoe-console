import PropTypes from 'prop-types';
import { Route, Routes as RRRoutes, Outlet, Navigate } from 'react-router-dom';

import Console from './screens/console';
import Auth, { Login, Register } from './screens/auth';
import { useSelector } from 'react-redux';


const ConditionalEscapeOutlet = ({ condition, escapeTo }) => {
    return !condition ? <Outlet /> : <Navigate to={escapeTo} />;
}

ConditionalEscapeOutlet.propTypes = {
    /**
     * Condition to check if the user is authenticated
     * If true, the user will be redirected to the escapeTo
     * If false, the user will be redirected to the outlet screen
     */
    condition: PropTypes.bool,

    /**
     * The escape screen address
     */
    escapeTo: PropTypes.string,
}

ConditionalEscapeOutlet.defaultProps = {
    condition: false,
    escapeTo: '/',
}

const Routes = props => {
    const isAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        <div>
            <RRRoutes>
                <Route path='/' element={<Console />}>
                    <Route path="" element={<ConditionalEscapeOutlet condition={!isAuthenticated} escapeTo="/auth/login" />}>
                        <Route element={<div>Root</div>} />
                    </Route>

                    <Route path="" element={<ConditionalEscapeOutlet condition={isAuthenticated} escapeTo="/" />}>
                        <Route path='auth' element={<Auth />}>
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                        </Route>
                    </Route>
                </Route>
            </RRRoutes>
        </div>
    );
}

Routes.propTypes = {}

Routes.defaultProps = {}

export default Routes;
