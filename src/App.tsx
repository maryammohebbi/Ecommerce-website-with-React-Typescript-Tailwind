import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Products from './pages/Products'
import AppLayout from './features/ui/AppLayout'
import { DarkModeProvider } from './context/DarkModeContext'

const queryClient = new QueryClient()

function App() {
  return (
    <DarkModeProvider>
      <QueryClientProvider client={queryClient}>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
          </Routes>
        </AppLayout>
      </QueryClientProvider>
    </DarkModeProvider>
  )
}

export default App
