import "./backCanvas.scss"

import ReactDOM from 'react-dom'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Stats, useCamera, PerspectiveCamera } from '@react-three/drei'

import TWEEN from '@tweenjs/tween.js'

useGLTF.preload(process.env.PUBLIC_URL + "/static" + '/Moon_1_3474.glb')

// console.log(props)

// let cameraViewList = [[0, 10, 20], [0, 0, -10], [0, 10, 10], [0, -10, 10], [0, 0, 10], [0, 0, 0], [0, 0, -10]]
// let { activeValue } = props
// // let cameraView = useState<number[]>(cameraViewList[activeValue])
// let cameraView = useState(cameraViewList[activeValue])
// let cameraView0 = useState(cameraViewList[activeValue][0])
// let cameraView1 = useState(cameraViewList[activeValue][1])
// let cameraView2 = useState(cameraViewList[activeValue][2])

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
                scale={0.01} position={0}
                material-envMapIntensity={0.4}
            />
        </group>
    )
}

const CameraChange = () => {
    console.log("camera change")
    // 使用useThree函数获取相机
    const { camera } = useThree()
    // new TWEEN.Tween(camera.position)
    //     .to(
    //         {
    //             x: 0,
    //             y: 10,
    //             z: 10
    //         },
    //         // 2000
    //     )
    //     .easing(TWEEN.Easing.Cubic.Out)
    //     .start()
}

const BackCanvass = (props: any) => {
    const ref = useRef()
    // let target = (ref.current as any).target
    // controls={target}

    let cameraViewList = [[0, 10, 20], [0, 0, -10], [0, 10, 10], [0, -10, 10], [0, 0, 10], [0, 0, 0], [0, 0, -10]]
    let { activeValue } = props
    if (activeValue === 1) {
        CameraChange()
    }

    return (
        <div className="back-canvas-container">
            <Canvas onWheel={(e) => console.log('wheel spins')}>
                <directionalLight
                    intensity={1}
                    castShadow={true}
                    shadow-bias={-0.0002}
                    shadow-mapSize={[2048, 2048]}
                    position={[85.0, 80.0, 70.0]}
                    shadow-camera-left={-30}
                    shadow-camera-right={30}
                    shadow-camera-top={30}
                    shadow-camera-bottom={-30}
                />
                <ambientLight intensity={Math.PI / 2} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
                <Suspense fallback={null}>
                    <Stage environment={null} >
                        <Model controls={ref} />
                    </Stage>
                </Suspense>
                <OrbitControls autoRotate autoRotateSpeed={1.0} />
                <Stats />
                {/* <Tween /> */}
                {/* <PerspectiveCamera position={[0, 10, 20]} /> */}
            </Canvas>
        </div>
    )
}

export const BackCanvas = React.memo(BackCanvass); 