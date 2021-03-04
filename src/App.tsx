import React from 'react';
import './App.css';
import { VRCanvas, Hands, DefaultXRControllers } from '@react-three/xr';
const App: React.FC = () => {
  return (
    <VRCanvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <DefaultXRControllers />
      <Hands />
    </VRCanvas>
  );
}

export default App;
