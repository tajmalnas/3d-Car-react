/* eslint-disable react/no-unknown-property */
import CarModel from '../assets/free_porsche_911_carrera_4s.glb'
import { useGLTF } from '@react-three/drei'
const NewCar = ({...props}) => {
    const {scene,animation} = useGLTF(CarModel)
    console.log(animation)
    console.log(scene.action)
  return (
    <mesh {...props}>
        <primitive rotation={[Math.PI/2,Math.PI,0]} object={scene} />
    </mesh>
  )
}

export default NewCar