import "./backCanvas.scss"

import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Stats, useCamera, PerspectiveCamera } from '@react-three/drei'


useGLTF.preload(process.env.PUBLIC_URL + "/static" + '/Moon_1_3474.glb')

const BackCanvass = (props: any) => {
    console.log(props)

    let cameraViewList = [[0, 10, 20], [0, 0, -10], [0, 10, 10], [0, -10, 10], [0, 0, 10], [0, 0, 0], [0, 0, -10]]
    let { activeValue } = props
    // let cameraView = useState<number[]>(cameraViewList[activeValue])
    let cameraView = useState(cameraViewList[activeValue])
    let cameraView0 = useState(cameraViewList[activeValue][0])
    let cameraView1 = useState(cameraViewList[activeValue][1])
    let cameraView2 = useState(cameraViewList[activeValue][2])

    // let camera = useCamera(()=>({
    //     // return new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000
    // }))

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
            <Canvas onWheel={(e) => console.log('wheel spins')}
            >
                {/* camera={camera} */}
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Suspense fallback={null}>
                    <Stage environment={null} >
                        {/* <Box position={[-10.2, 0, 0]} /> */}
                        <Model scale={0.01} position={0} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={1.0} />
                <Stats />
                {/* <PerspectiveCamera position={[0, 10, 20]} /> */}
            </Canvas>
        </div>
    )
}

export const BackCanvas = React.memo(BackCanvass); 