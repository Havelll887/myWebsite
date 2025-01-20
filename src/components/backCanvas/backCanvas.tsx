import "./backCanvas.scss"

import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, Stage } from '@react-three/drei'


useGLTF.preload(process.env.PUBLIC_URL + "/static" + '/Moon_1_3474.glb')

const backCanvas = (props: any) => {


    const Box = (props: any) => {

        const ref = useRef()

        // const [hovered, hover] = useState(false)
        // const [clicked, click] = useState(false)

        useFrame((state, delta) => {
            (ref.current as any).rotation.x += delta;
            (ref.current as any).rotation.y += delta
        })

        /**
         *  onClick={(event) => click(!clicked)}
         *  onPointerOver={(event) => hover(true)}
         *  onPointerOut={(event) => hover(false)}
         *  scale={clicked ? 1.5 : 1}
         */

        return (
            <mesh
                {...props}
                ref={ref}>
                <boxGeometry args={[1, 1, 1]} />
                <meshStandardMaterial color={'hotpink'} />
            </mesh>
        )
    }

    const Model = (props: any) => {
        const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/static" + '/Moon_1_3474.glb')
        // console.log(nodes, materials)
        return (
            <group {...props} dispose={null}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={(nodes.Cube008 as any).geometry}
                    material={materials['Default OBJ.005']}
                    position={[1.2, 0, 0]}
                />
            </group>
        )
    }


    return (
        <div className="back-canvas-container">
            <Canvas onWheel={(e) => console.log('wheel spins')}>
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                {/* <Suspense fallback={null}>
                    <Box position={[-1.2, 0, 0]} />
                    <Box position={[1.2, 0, 0]} />
                    <Model />
                </Suspense> */}
                <Stage preset="rembrandt" intensity={1} environment="city" >
                    <Model />
                </Stage>
            </Canvas>
        </div>
    )
}

export const BackCanvas = React.memo(backCanvas); 