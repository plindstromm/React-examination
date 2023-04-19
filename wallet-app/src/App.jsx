import './App.scss';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './views/Home';
import Addcard from './views/Addcard';



function App() {
  
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    
    {
      path: '/addcard',
      element: <Addcard />
    },

  ]);

  return (
    <div className="App">
      <RouterProvider router={ router } />
    </div>
  )
}

export default App
