import "./backCanvas.scss"

import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Stats, useCamera, OrthographicCamera } from '@react-three/drei'

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


let cameraViewList = [
    [0, 9, 0],
    [0, 1.9, -9],
    [1.5, -3.8, -10],
    [0, -10, 10],
    [0, 0, 10],
    [0, 0, 0],
    [0, 0, -10]
]

let targetPosList = [
    [0, 0, 0],
    [-6, 1.7, 0],
    [6.8, -0.7, -1],
]

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

    const ref = useRef(null)
    useFrame((state, delta) => {
        if (!ref.current) return
        (ref.current as any).rotation.x += delta * 0.1;
        (ref.current as any).rotation.y -= delta * 0.2;
        (ref.current as any).rotation.z += delta * 0.1;
    })

    return (
        <group {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={(nodes.Cube008 as any).geometry}
                material={materials['Default OBJ.005']}
                scale={0.01} position={0}
                material-envMapIntensity={0.4}
                ref={ref}
            />
        </group>
    )
}

const CameraChange = (props: any) => {
    // const [controls, setControls] = useState(props.controls);
    const controls = props.controls
    // 使用useThree函数获取相机
    const { camera } = useThree()


    let activeValue = props.activeValue
    if(activeValue > 2){
        activeValue = 2
    }
    console.log("activeValue", activeValue)
    let cameraView = cameraViewList[activeValue]
    let orbPos = targetPosList[activeValue]

    let tween: any
    let tweens: any

    tween = new TWEEN.Tween(camera.position)
        .to(
            {
                x: cameraView[0],
                y: cameraView[1],
                z: cameraView[2],
            },
            2000
        )
        .easing(TWEEN.Easing.Cubic.Out)
        .start()
    console.log("re", controls)
    if (controls.current && controls.current.target) {
        tweens = new TWEEN.Tween(controls.current.target)
            .to(
                {
                    x: orbPos[0],
                    y: orbPos[1],
                    z: orbPos[2],
                },
                1800
            )
            .easing(TWEEN.Easing.Cubic.Out)
            .start()

    }


    function animate(time = 10) {
        tween?.update(time)
        tweens?.update(time)
        requestAnimationFrame(animate)
    }
    requestAnimationFrame(animate);

    return (<></>);
}


// export const setThemeConfig = (themeConfig: ThemeConfigProp) => ({
// 	type: types.SET_THEME_CONFIG,
// 	themeConfig
// });

const Loading = () => {
    return (
        <div className="loading-container">
            <div className="loading">加载中</div>
        </div>
    )
}

const BackCanvass = (props: any) => {
    const ref = useRef()
    const { activeValue } = props

    return (
        <div className="back-canvas-container">
            <Suspense fallback={<Loading />}>
            {/* camera={{ fov: 0 , position:[0, 0, 10] }}  */}
                <Canvas onWheel={(e) => console.log('wheel spins')}>
                    {/* environment light */}
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

                    <OrbitControls ref={ref as any} position={[0, 0, 0]} target={[0, 0, 0]}  />

                    <Stats />

                    <CameraChange activeValue={activeValue} controls={ref} />

                    {/* target object */}
                    {/* <Stage environment={null} > */}
                    <Model controls={ref} />
                    {/* </Stage> */}
                </Canvas>
            </Suspense>

        </div>
    )
}

export const BackCanvas = React.memo(BackCanvass); 