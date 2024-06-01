import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

const queryClient = new QueryClient()

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </QueryClientProvider>
      
  )
}

export default App
