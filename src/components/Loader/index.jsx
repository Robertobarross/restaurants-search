import React from 'react';
import Lottie from 'react-lottie';
import animationData from '../../assets/anima.json';

export default () => {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return <Lottie style={{width: '500px', marginTop: '100px'}} options={defaultOptions} />;
};
