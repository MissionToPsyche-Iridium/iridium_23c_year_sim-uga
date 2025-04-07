import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Spacecraft(props) {
    const { nodes, materials } = useGLTF('/psyche-spacecraft.glb');
    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    );
}

useGLTF.preload('/psyche-spacecraft.glb');
