import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './style.css';

const App: React.FC = () => {
  return (
    <div>
      <Parallax pages={3}>
        <ParallaxLayer
          offset={0}
          factor={3}
          speed={0}
          style={{
            backgroundImage: 'url(/assets/back1.png)',
            backgroundSize: 'cover',
          }}
        />
        <ParallaxLayer
          factor={3}
          speed={1}
          offset={1}
          style={{
            backgroundImage: 'url(/assets/back2.png)',
            backgroundSize: 'cover',
          }}
        />
          
      </Parallax>
    </div>
  );
};

export default App;
