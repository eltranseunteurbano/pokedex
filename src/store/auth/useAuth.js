import { useContext, useEffect } from 'react'
import { AuthContext } from './AuthContext'

const useAuth = () => {

  const contextData = useContext(AuthContext);

  return contextData
}

export default useAuth