import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from "react"

import Home from './pages/Home'
import About from './pages/About'
import Navbar from './components/Navbar';
import LoadingScreen from './pages/LoadingScreen';
import Footer from './components/Footer'
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay to show the loading screen
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
     <BrowserRouter>
     {isLoading ? (
      <LoadingScreen/>
     ):(
     <div className='homePage'>
     <Navbar />
      <div className='pages'>
        <Routes>
          <Route
            path='/blog'
            element={<Home/>}
          />
          <Route
            path='/'
            element={<About/>}
          />

        </Routes>
      </div>    
      <Footer />
     </div>
     )}
     </BrowserRouter>
    </div>
  );
}

export default App;
