import React,{ Suspense, useEffect,useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import CanvasLoader from '../Loader'



const Computers = ({ismobile}) => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black'/>
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={ismobile ? 0.6 : 0.75}
        position={ismobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
       />
    </mesh>
  )
}
const ComputerCanvas =()=>{
  const [ismobile,setIsmobile]=useState(false)
  useEffect(()=>{
    const mediaQuery = window.matchMedia('(max-width:500px)'); 
    setIsmobile(mediaQuery.matches)
    const handleMediaQueryChange = (event)=>{
      setIsmobile(event.matches)
      mediaQuery.addEventListener('change', handleMediaQueryChange);
      return ()=>{
        mediaQuery.removeEventListener('change', handleMediaQueryChange)
      }
    }
  },[])
  return (
    <Canvas frameLoop='demand' shadows camera={{ position: [20, 3, 5], fov: 25 }}
    gl={{ preserveDrawingBuffer: true }} >
        <Suspense fallback={<CanvasLoader/>}>
          <OrbitControls enableZoom={false} maxPolarAngle={Math.PI /2} minPolarAngle={Math.PI /2}  />
          <Computers ismobile={ismobile}/>
        </Suspense>
        <Preload all />
    </Canvas>
  )
}

export default ComputerCanvas