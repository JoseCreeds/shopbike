import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

const ProtectedRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token)

  return token ? children : (window.location.href = '/login')
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
}
export default ProtectedRoute
