import { ChakraProvider } from '@chakra-ui/react'
import { AuthRoutes } from './routes'
import ReactDOM from 'react-dom/client'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthRoutes />
    </ChakraProvider>
  </React.StrictMode>,
)
