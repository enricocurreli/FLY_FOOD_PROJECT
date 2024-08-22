import { RouterProvider } from 'react-router-dom'
import router from './router/router'
import './App.css'
import CartContextProvider from './contexts/Context'
import LoggedContextProvider from './contexts/ContextLog'

function App() { 

  return (
    <>
      <LoggedContextProvider>
        <CartContextProvider>
          <RouterProvider router={router} />

        </CartContextProvider>
      </LoggedContextProvider>

     
    </>
  )
}

export default App
