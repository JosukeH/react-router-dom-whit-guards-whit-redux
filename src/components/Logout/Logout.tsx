import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { clearLocalStorage } from "../../helpers/localStorage.utility"
import { resetUser, UserKey } from "../../redux/states/user"
import { PublicRoutes } from "../../routes"

const Logout = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const logOut = () => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(PublicRoutes.LOGIN, {replace:true})
  }

  return (
    <>
      <button onClick={logOut}>Cerrar Sesión</button>
    </>
  )
}

export default Logout
