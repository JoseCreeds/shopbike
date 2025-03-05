import { createContext, useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const LoadingContext = createContext({ isLoading: true })

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <LoadingContext.Provider value={{ isLoading }}>
      {children}
    </LoadingContext.Provider>
  )
}

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
}

export const useLoading = () => useContext(LoadingContext)
