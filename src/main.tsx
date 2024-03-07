import { ChakraProvider } from '@chakra-ui/react'
import { MainLayout } from './core/layout'
import ReactDOM from 'react-dom/client'
import React from 'react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <MainLayout />
    </ChakraProvider>
  </React.StrictMode>,
)
