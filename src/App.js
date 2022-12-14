//import logo from './logo.svg';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
 
function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/about",
      element: <About/>
    },
    {
      path: "/resume",
      element: <Resume/>
    },
    {
      path: "/portfolio",
      element: <Portfolio/>
    },
    {
      path: "/contact",
      element: <Contact/>
    },
  ]);

  return (
    <div>
      
      <RouterProvider router={router}/>



    </div>
  );
}

export default App;