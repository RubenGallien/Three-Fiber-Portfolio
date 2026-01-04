import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";


export default function SeinePeniche() {


	const seineModel = useGLTF('seineConflansPlanet.glb')

	useFrame((state, delta) => {

		if (seineModel.scene)
			seineModel.scene.rotation.y += delta * 0.2
	})

	return <>
		<primitive object={seineModel.scene} scale={1} />
	</>
}
