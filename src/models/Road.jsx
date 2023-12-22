/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import  { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {a} from '@react-spring/three'
import RoadModel from "../assets/road_intersection.glb"

function Road(props) {
    const {position, scale} = props
    const roadRef = useRef();
  const { nodes, materials } = useGLTF(RoadModel);
  return (
    <a.group position={position} scale={scale}  ref={roadRef} {...props} dispose={null}>
      <a.group scale={3.744}>
        <mesh
          geometry={nodes.Object_2.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_3.geometry}
          material={materials.Material}
        />
        <mesh
          geometry={nodes.Object_4.geometry}
          material={materials["Material.001"]}
        />
        <mesh
          geometry={nodes.Object_5.geometry}
          material={materials["Material.002"]}
        />
        <mesh
          geometry={nodes.Object_6.geometry}
          material={materials["Material.003"]}
        />
        <mesh
          geometry={nodes.Object_7.geometry}
          material={materials.acera}
        />
        <mesh
          geometry={nodes.Object_8.geometry}
          material={materials.pabimento}
        />
      </a.group>
    </a.group>
  );
}

export default Road;
