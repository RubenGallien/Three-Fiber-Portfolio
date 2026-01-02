import { useHelper } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from 'three'

export default function Light(){

	const directionnalLightRef = useRef()

	useHelper(directionnalLightRef, THREE.DirectionalLightHelper, 1)
	return <directionalLight ref={directionnalLightRef} intensity={3} position={[-3, 1, 2]}/>
}
