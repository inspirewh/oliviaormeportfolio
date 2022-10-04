//import logo from './logo.svg';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
 
function App() {
  const router = createBrowserRouter([
    {
      path: "oliviaportfolio/",
      element: <Home/>,
    },
    {
      path: "oliviaportfolio/about",
      element: <About/>
    },
    {
      path: "oliviaportfolio/resume",
      element: <Resume/>
    },
    {
      path: "oliviaportfolio/portfolio",
      element: <Portfolio/>
    },
    {
      path: "oliviaportfolio/contact",
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