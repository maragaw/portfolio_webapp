import Logo from '../assets/logo.png'
import React, { useState, useEffect } from 'react';

const LoadingScreen = () =>{
    const [isVisible, setVisible] = useState(true);
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        // Set a timeout to hide the loading screen after a delay
        const timeout = setTimeout(() => {
          setVisible(false);
        }, 2000);
    
        return () => {
          clearTimeout(timeout);
        };
      }, [])
      useEffect(() => {
        setTimeout(() => setLoading(false), 2000);
      }, []);
    return(
        <div className={`loading-screen ${isLoading ? 'fade-in' : 'fade-out'}`}>
        {/* <h1 className='load-screen'>Loading...</h1> */}
        <img className='load-screen' src={Logo} alt='Loading...'></img>
        <div className="loading-progress-bar"></div>
      </div>
    )
}

export default LoadingScreen