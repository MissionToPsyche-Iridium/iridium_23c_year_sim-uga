import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { useRef } from 'react';

export default function MetallicRotatingPlain(props) {
    const meshRef = useRef();
    const { nodes } = useGLTF('/psyche-metallic.glb');

    useFrame((state, delta) => {
        meshRef.current.rotation.z -= delta * (Math.PI / (4.196 * 3600)) * 2000;
    });

    return (
        <group {...props} ref={meshRef} dispose={null}>
            <mesh
                geometry={nodes.mesh_0.geometry}
                material={nodes.mesh_0.material}
            />
        </group>
    );
}
