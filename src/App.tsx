import { Suspense, lazy } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Navigate, Route} from 'react-router-dom'
import AuthGuard from './guards/auth.guard'
import RoutesWithNotFound from './helpers/RoutesWithNotFound'
import { Private } from './pages'
import store from './redux/store'
import { PrivateRoutes, PublicRoutes } from './routes'
import './App.css'
import { Logout } from './components/Logout'
const Login = lazy(() => import('./pages/Login/Login')) 
function App() {

  return (
    <div className="App">
       <Suspense fallback={<h1>Cargando...</h1>}>
        <Provider store={store}>
            <BrowserRouter >
             <Logout />
              <RoutesWithNotFound>
                <Route path='/' element={<Navigate to={PrivateRoutes.PRIVATE} />}   />
                <Route path='*' element={<Navigate to='/' />}   />
                <Route path={PublicRoutes.LOGIN} element={<Login />}   />
                
                <Route element={<AuthGuard />} >
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />}   />
                </Route>

              </RoutesWithNotFound>
            </BrowserRouter >
          </Provider> 
       </Suspense>
    </div>
  )
}

export default App
