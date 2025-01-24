import "./backCanvas.scss"

import React, { useRef, useState, Suspense, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useGLTF, Stage, OrbitControls, Stats, useCamera, OrthographicCamera } from '@react-three/drei'
import { debounce } from "lodash";

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
    [0, 0, 10],
    [12, 2, 25],
    [10, -2, 25],
    [-1.5, -3.8, 10],
    [0, 0, 10],
]

let targetPosList = [
    [0, 0, 0],
    [-12, 2.0, -1.3],
    [10, -1.0, -0.6],
    [0, 15, -0.6],
    // [-6.8, -0.4, 1],
]

let cameraScale = [1, 1.3, 1.2, 1.1]



const Model = (props: any) => {
    const { nodes, materials } = useGLTF(process.env.PUBLIC_URL + "/static" + '/Moon_1_3474.glb')

    const ref = useRef(null)
    useFrame((state, delta) => {
        if (!ref.current) return
        (ref.current as any).rotation.x += 0.001;
        (ref.current as any).rotation.y -= 0.002;
        (ref.current as any).rotation.z += 0.001;
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

function NumberChange(curNumber: number, targetNumber: number, changeGap: number = 0.01) {
    if (curNumber > targetNumber) {
        return curNumber - changeGap
    } else if (curNumber < targetNumber) {
        return curNumber + changeGap
    } else {
        return curNumber
    }
}

const CameraChange = (props: any) => {
    // const [controls, setControls] = useState(props.controls);
    const controls = props.controls
    // 使用useThree函数获取相机
    const camera = useThree(state => state.camera)

    let activeValue = props.activeValue

    if (activeValue > 3) {
        activeValue = 3
    } else if (activeValue < 0) {
        activeValue = 0
    }

    console.log("activeValue", activeValue)
    let cameraView = cameraViewList[activeValue]
    let orbPos = targetPosList[activeValue]

    changeView()
    function changeView() {

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
            .onUpdate(function () {
                const zoom = JSON.parse(JSON.stringify(camera.zoom))
                camera.zoom = NumberChange(zoom,
                    cameraScale[activeValue],
                    Math.abs(zoom - cameraScale[activeValue]) / 70)
                camera.updateProjectionMatrix()
            })
            .start()
        if (controls.current && controls.current.target) {
            controls.enabled = false
            tweens = new TWEEN.Tween(controls.current.target)
                .to(
                    {
                        x: orbPos[0],
                        y: orbPos[1],
                        z: orbPos[2],
                    },
                    2000
                )
                .easing(TWEEN.Easing.Cubic.Out)
                .onComplete(function () {
                    controls.current.target.copy({
                        x: orbPos[0],
                        y: orbPos[1],
                        z: orbPos[2],
                    },);
                    controls.enabled = true;
                })
                .start()

        }




        function animate(time = 10) {
            tween?.update(time)
            tweens?.update(time)
            requestAnimationFrame(animate)
        }
        requestAnimationFrame(animate);
    }



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

const BackCanvasItem = (props: any) => {
    const ref = useRef()
    const { activeValue } = props

    // const { camera } = useThree()
    // useEffect(() => {
    //     console.log("camera", camera)
    // })

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
                    {/* <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} /> */}
                    <OrthographicCamera
                        makeDefault
                        zoom={1}
                        top={6}
                        bottom={-6}
                        left={12}
                        right={-12}
                        near={10}
                        far={50}
                        position={[0, 0, 10]}
                    />

                    <OrbitControls ref={ref as any} />

                    <Stats />

                    <CameraChange activeValue={activeValue} controls={ref} />

                    {/* target object */}
                    {/* <Stage environment={null} > */}
                    <Model controls={ref} />
                    {/* </Stage> */}
                    {/* </OrthographicCamera> */}

                </Canvas>
            </Suspense>

        </div>
    )
}

export const BackCanvas = React.memo(BackCanvasItem); 