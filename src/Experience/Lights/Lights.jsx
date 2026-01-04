import { useHelper } from "@react-three/drei"
import { button, useControls } from "leva"
import { useRef, useState } from "react"
import * as THREE from 'three'

export default function Light(){

	const [lightHelper, setLightHelper] = useState(true)
	const directionalLightRef = useRef()

	const { directionalLightIntensity, dirLightColor } = useControls(
		'DirectionalLight',
		{
			directionalLightIntensity: {
				value: 3,
				min: 0,
				max: 10,
				step: 0.01
			},
			dirLightColor: '#ffffff',
			hideHlper: button(() => {
				setLightHelper(!lightHelper);
			})
		}
	)

	const { hemispherLightIntensity, groundColor, skyColor } = useControls(
		'HemisphereLight',
		{
			hemispherLightIntensity: {
				value: 0.3,
				min: 0,
				max: 5,
				step: 0.001
			},
			skyColor: '#8899ff',
			groundColor: '#080820'
		}
	)

	useHelper(lightHelper ? directionalLightRef : null, THREE.DirectionalLightHelper, 1)

	return	<>
		<directionalLight
			color={dirLightColor}
			ref={directionalLightRef}
			intensity={directionalLightIntensity}
			position={[-3, 2, 1]}
			/>
		<hemisphereLight
			color={skyColor}
			groundColor={groundColor}
			intensity={hemispherLightIntensity} />
	</>
}
