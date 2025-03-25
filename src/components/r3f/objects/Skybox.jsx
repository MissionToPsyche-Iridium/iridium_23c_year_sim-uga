import { CubeTextureLoader } from 'three';
import { useThree } from '@react-three/fiber';

export default function SkyBox() {
    const { scene } = useThree();
    const loader = new CubeTextureLoader();
    const texture = loader.load([
        '/skybox/px.png',
        '/skybox/nx.png',
        '/skybox/py.png',
        '/skybox/ny.png',
        '/skybox/pz.png',
        '/skybox/nz.png',
    ]);

    scene.background = texture;
    return null;
}
