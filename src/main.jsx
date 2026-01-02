import './Style/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import SeinePeniche from './Experience/Model/SeinePeniche'
import Light from './Experience/Lights/Lights'
import Control from './Experience/Controls/Control'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Canvas>
			<Control/>
			<Light/>
			<SeinePeniche/>
		</Canvas>
	</StrictMode>
)
