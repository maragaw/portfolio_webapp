import React, { useState, useEffect } from 'react';

function ScrollFadeIn(props) {
  const [isVisible, setVisible] = useState(false);
  const [isFadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById(props.id);
      const elementTop = element.getBoundingClientRect().top;
      const elementBottom = element.getBoundingClientRect().bottom;
      const viewportHeight = window.innerHeight;

      if (elementTop < viewportHeight && elementBottom >= 0 && !isVisible) {
        setVisible(true);
        setFadingOut(false);
      } else if ((elementTop >= viewportHeight || elementBottom < 0) && isVisible) {
        setFadingOut(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, props.id]);

  const getClassName = () => {
    if (isVisible) {
      return 'fadein is-visible';
    } else if (isFadingOut) {
      return 'fadeout is-visible';
    } else {
      return 'fadein';
    }
  };

  return (
    <div className={getClassName()} id={props.id}>
      {props.children}
    </div>
  );
}

function FadeIn(props) {
    const [isVisible, setVisible] = useState(false);
  
    useEffect(() => {
      setVisible(true);
    }, []);
  
    return (
      <div className={`fadein ${isVisible ? 'is-visible' : ''}`}>
        {props.children}
      </div>
    );
  }


export default ScrollFadeIn

