import React, { useEffect } from 'react';
import Particles from 'particlesjs';

const FondoParticulas = () => {
  useEffect(() => {
      Particles.init({
        selector: '.background'
      });
      
  }, []);
  return <canvas class="background"></canvas>;
};

export default FondoParticulas;
