
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Console from './screens/console';
import Auth, { Login } from './screens/auth';

const routes = [
  {
    path: '/',
    element: 'Root'
  },
]

const App = props => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Console />}>
          <Route path='' element={<div>Root</div>} />
          <Route path='auth' element={<Auth />}>
            <Route path='login' element={<Login />} />
            {/* <Route path='/register' element='Register' /> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

App.propTypes = {}

App.defaultProps = {}

export default App;
