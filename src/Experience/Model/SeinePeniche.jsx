import { useGLTF } from "@react-three/drei";


export default function SeinePeniche() {

	const seineModel = useGLTF('seineConflansPlanet.glb')

	return <>
		<primitive object={seineModel.scene} scale={1} />
	</>
}
