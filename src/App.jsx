import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css'
import CartContextProvider from './contexts/Context'

function App() {
  

  return (
    <>

      <CartContextProvider>
        <RouterProvider router={router} />

      </CartContextProvider>

     
    </>
  )
}

export default App
