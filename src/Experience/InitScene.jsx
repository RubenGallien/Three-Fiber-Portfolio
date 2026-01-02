import { AmbientLight } from "three";
import { OrbitControls } from "@react-three/drei";

export default function InitScene() {
	return <>
		<OrbitControls/>
		<mesh >
			<boxGeometry args={[2, 2, 2]}/>
			<meshBasicMaterial color="red" />
		</mesh>
		<mesh scale={10} rotation-x={-Math.PI * 0.5} position-y={-1}>
			<planeGeometry />
			<meshBasicMaterial color="yellowgreen"/>
		</mesh>
	</>
}
