import { Box, ChakraProvider } from '@chakra-ui/react'
import { Header, Main } from './pages'

export default function Home() {
  return (
    <ChakraProvider>
      <main>
        <Main />
      </main>
    </ChakraProvider>
  )
}
