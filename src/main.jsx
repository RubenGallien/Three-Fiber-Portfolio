import './Style/index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import InitScene from './Experience/InitScene'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Canvas>
			<InitScene/>
		</Canvas>
	</StrictMode>
)
