
import { Route, Routes } from 'react-router-dom';

import ConsoleLayout from './components/layouts';
import './App.css';

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
        {
          routes.map(route => {
            const Layout = route.layout || ConsoleLayout

            return (
              <Route
                key={route.path}
                path={route.path}
                element={<Layout>{route.element}</Layout>}
              />
            )
          })
        }
      </Routes>
    </div>
  );
}

App.propTypes = {}

App.defaultProps = {}

export default App;
