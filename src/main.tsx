import React from 'react'
import ReactDOM from 'react-dom/client'
import { Alert, AlertIcon, ChakraProvider, ColorModeScript, Link } from '@chakra-ui/react'
import App from './App.tsx'
import theme from './theme.ts'
import './index.css'
import { SiLinkfire } from 'react-icons/si'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <Alert status='info' color={'red'} fontSize='20px' justifyContent='center'>
        <Link href='https://codewithmosh.com' isExternal>
          Made with Mosh Hamedani 💎
        </Link>
      </Alert>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
