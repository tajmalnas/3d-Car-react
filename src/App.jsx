/* eslint-disable react/no-unknown-property */
import {Canvas} from '@react-three/fiber'
import './App.css'
import { Suspense, useEffect, useState } from 'react'
import Loaders from './components/Loaders'
import Road from './models/Road'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { MathUtils } from 'three/src/math/MathUtils'
import Car from './models/Car'
import NewCar from './models/NewCar'


const CameraHelper = () => {
  return (
    <>
      {/* <PerspectiveCamera makeDefault position={[0, 0, 5]} /> */}
      {/* <OrbitControls /> */}
      <mesh visible position={[-2, -16, 1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial wireframe opacity={0.5} />
      </mesh>
    </>
  );
};


function App() {

  const rotationXDegrees = 68;
  const rotationYDegrees = -20; // Adjusted to make the camera look slightly to the right
  const rotationZDegrees = -13;

  // Convert degrees to radians
  const rotationX = MathUtils.degToRad(rotationXDegrees);
  const rotationY = MathUtils.degToRad(rotationYDegrees);
  const rotationZ = MathUtils.degToRad(rotationZDegrees);
  console.log(Math.PI)


  const [carPosition, setCarPosition] = useState([-0.5, -15.5, -0.2]);

  const [cameraPosition,setCameraPosition] = useState([-1, -16, 0]);

  const handleScroll = (event) => {
    // Increase the Z-coordinate to move the car forward
    setCarPosition((prevPosition) => [prevPosition[0], prevPosition[1]- event.deltaY * 0.005, prevPosition[2] ]);
    setCameraPosition((prevPosition) => [prevPosition[0], prevPosition[1]- event.deltaY * 0.005, prevPosition[2] ]);
  };

  useEffect(()=>{
    window.addEventListener("wheel", handleScroll);
    return () => window.removeEventListener("wheel", handleScroll);
  })


  return (
    <div className='h-screen w-full'>
      <Canvas
        className='h-screen w-full relative'
        camera={{
          near: 0.1,
          far: 1000,
        }}
      >
      <CameraHelper/>
      <PerspectiveCamera makeDefault rotation={[rotationX,rotationY,rotationZ]}  position={cameraPosition}  fov={75} />
      <ambientLight intensity={0.5} />
      <hemisphereLight skyColor={'#ffffff'} groundColor={'#000000'} intensity={0.5} />
      <directionalLight position={[1, -14, 1]} intensity={1} />
      {/* <spotLightHelper/> */}
            {/* <pointLight position={[-0.5 , -15.5, 1]} rotation={[rotationX,rotationY,rotationZ]} intensity={5}/> */}
      <Suspense fallback={<Loaders/>}>
      {/* <Car
          position={carPosition}
          scale={[0.2, 0.2, 0.2]}
        /> */}
        <NewCar 
          position={carPosition}
          scale={[0.2, 0.2, 0.2]}
        />
        <Road
          position={[0, 0, 0]}
          scale={[0.1, 0.1, 0.1]}
        />
        
        
        <axesHelper args={[5]}/>
      </Suspense>
      {/* <gridHelper/> */}
      {/* <PointLightHelper/> */}
      {/* <OrbitControls/> */}
      </Canvas>
    </div>
  )
}

export default App
