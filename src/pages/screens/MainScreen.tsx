import { CameraProps, Cursor } from "@/types/type";
import React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import ObjectScene from "@/components/ObjectScene";
import useWindowSize from "@/hooks/useWindowSize";
import CameraOrbitContoller from "@/components/CameraOrbitContoller";
import {
  Environment,
  Html,
  OrbitControls,
  useProgress,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import useHeaderBar from "@/hooks/useHeaderBar";
import SliderComponent from "@/components/SliderComponent";
import Scene from "@/components/Scene";
import { NextPage } from "next";

const CameraData: CameraProps = {
  fov: 45,
  near: 0.1,
  far: 1000,
  positionX: -1.5,
  positionY: 1.5,
  positionZ: 1.5,
};

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

const MainScreen: NextPage = () => {
  const [grab, setGrab] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);
  const [cameraSetting, setCameraSetting] = useState<CameraProps>(Object);
  const [onPress, setOnPress] = useState<boolean>(false);
  const { headerBar, ambientOn, bgPreset, pointLightOn, controls, sliderOpen } =
    useHeaderBar();
  const windowSize = useWindowSize();
  useEffect(() => {
    const storageSetting: CameraProps = JSON.parse(
      localStorage.getItem("camera_setting")!
    );
    if (storageSetting !== null) {
      console.log(storageSetting);
      setCameraSetting({
        fov: storageSetting.fov,
        near: storageSetting.near,
        far: storageSetting.far,
        positionX: storageSetting.positionX,
        positionY: storageSetting.positionY,
        positionZ: storageSetting.positionZ,
      });
    } else {
      setCameraSetting({
        fov: CameraData.fov,
        near: CameraData.near,
        far: CameraData.far,
        positionX: CameraData.positionX,
        positionY: CameraData.positionY,
        positionZ: CameraData.positionZ,
      });
    }
    setLoading(false);
  }, [loading]);

  return (
    <>
      {loading ? null : (
        <>
          {headerBar()}
          <main
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: windowSize.height,
              cursor: grab ? "grabbing" : "grab",
            }}
          >
            {sliderOpen && (
              <SliderComponent
                cameraSetting={cameraSetting}
                setCameraSetting={setCameraSetting}
                onPress={onPress}
                setOnPress={setOnPress}
              />
            )}
            <Canvas
              dpr={[1, 2]}
              shadows
              camera={{
                fov: cameraSetting.fov,
                near: cameraSetting.near,
                far: cameraSetting.far,
                position: [
                  cameraSetting.positionX,
                  cameraSetting.positionY,
                  cameraSetting.positionZ,
                ],
              }}
              onMouseDown={() => {
                setGrab(true);
              }}
              onMouseUp={() => {
                setGrab(false);
              }}
            >
              <Suspense fallback={null}>
                {ambientOn && <ambientLight />}
                {pointLightOn && <pointLight position={[50, 50, 50]} />}
                <ObjectScene
                  url={"/models/baked_mesh.obj"}
                  mtl={"/models/baked_mesh.mtl"}
                  colorMap={"/models/baked_mesh_tex0.png"}
                  normalMap={"/models/baked_mesh_norm0.png"}
                  aoMap={"/models/baked_mesh_ao0.png"}
                />
              </Suspense>
              {bgPreset !== "" && <Environment preset={bgPreset} background />}
              <CameraOrbitContoller cameraSetting={cameraSetting} />
            </Canvas>
          </main>
        </>
      )}
    </>
  );
};
export default MainScreen;
